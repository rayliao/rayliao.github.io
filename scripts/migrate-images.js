#!/usr/bin/env node
/**
 * 图片迁移脚本：从 Vercel Blob 下载所有图片，并上传到 Cloudflare R2
 *
 * 使用方法:
 *   pnpm migrate-images        # 完整迁移（下载 + 上传）
 *   pnpm migrate-images --dry  # 只扫描生成清单，不下载不上传
 *   pnpm migrate-images --download-only  # 只下载到 temp_images/
 *
 * 前置条件:
 *   1. .env.local 里有 NEXT_PUBLIC_BLOB_URL
 *   2. .env 里有 R2 相关的私密凭证
 *   3. 已安装 @aws-sdk/client-s3: pnpm add -D @aws-sdk/client-s3
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// ============== 配置 ==============
const TEMP_DIR = path.join(__dirname, "..", "temp_images");
const CONCURRENCY = 5; // 并发数

// ============== 加载环境变量 ==============
function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, "utf-8");
  const env = {};
  content.split("\n").forEach((line) => {
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (match) {
      let val = match[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
      env[match[1]] = val;
    }
  });
  return env;
}

const envLocal = loadEnv(path.join(__dirname, "..", ".env.local"));
const env = { ...loadEnv(path.join(__dirname, "..", ".env")), ...envLocal };

const BLOB_URL = env.NEXT_PUBLIC_BLOB_URL;
const R2_URL = env.NEXT_PUBLIC_R2_URL || "";
const R2_ENDPOINT = env.R2_ENDPOINT || "";
const R2_ACCESS_KEY = env.R2_ACCESS_KEY_ID || "";
const R2_SECRET_KEY = env.R2_SECRET_ACCESS_KEY || "";
const R2_BUCKET = env.R2_BUCKET_NAME || "";

// ============== 1. 从代码中提取静态图片路径 ==============
function extractLiteralPaths() {
  const appDir = path.join(__dirname, "..", "app");
  const files = execSync('find "' + appDir + '" -name "*.tsx" -o -name "*.ts"', { encoding: "utf-8" })
    .trim()
    .split("\n")
    .filter(Boolean);

  const paths = new Set();
  const dynamicPatterns = []; // 记录需要人工确认的变量路径

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");

    // 匹配 getImageUrl("xxx") 或 getImageUrl('xxx')
    const regex1 = /getImageUrl\s*\(\s*["']([^"']+)["']\s*\)/g;
    let m;
    while ((m = regex1.exec(content)) !== null) {
      paths.add(m[1]);
    }

    // 记录模板字符串变量（如 `jon/${item.name}.JPG`）
    const regex2 = /getImageUrl\s*\(\s*`([^`]+)`\s*\)/g;
    while ((m = regex2.exec(content)) !== null) {
      if (m[1].includes("${")) {
        dynamicPatterns.push({ file: path.relative(process.cwd(), file), pattern: m[1] });
      } else {
        paths.add(m[1]);
      }
    }
  });

  return { literalPaths: Array.from(paths).sort(), dynamicPatterns };
}

// ============== 2. 推导动态路径（如 Jon 的年龄编号） ==============
function deriveDynamicPaths(literalPaths) {
  // 从 app/common/config.ts 提取 JonData
  const configPath = path.join(__dirname, "..", "app", "common", "config.ts");
  const derived = [];

  if (fs.existsSync(configPath)) {
    const configContent = fs.readFileSync(configPath, "utf-8");
    // Jon: jon/${item.name}.JPG
    const jonMatch = configContent.match(/JonData.*?\[\s*\{[^\]]+\}\s*\]/s);
    if (jonMatch) {
      const names = [...configContent.matchAll(/name:\s*["'](\d+)["']/g)].map((m) => m[1]);
      names.forEach((n) => derived.push(`jon/${n}.JPG`));
    }
  }

  // undefined 目录有 34 张图
  if (!literalPaths.some((p) => p.startsWith("undefined/"))) {
    for (let i = 1; i <= 34; i++) {
      derived.push(`undefined/${i}.jpg`);
    }
  }

  // 从年份 page.tsx 推导 shoot/YYYY/*.jpg
  const years = ["2016", "2017", "2018", "2019"];
  const appDir = path.join(__dirname, "..", "app");
  years.forEach((year) => {
    if (literalPaths.some((p) => p.startsWith(year + "/"))) return;
    const yearFile = path.join(appDir, "shoot", year, "page.tsx");
    if (fs.existsSync(yearFile)) {
      const text = fs.readFileSync(yearFile, "utf-8");
      const strMatches = [...text.matchAll(/"([0-9a-zA-Z]+)"/g)].map((m) => m[1]);
      const seen = new Set();
      const skipWords = new Set(["next", "string", "Layout", "styles", "Image", "fill", "alt", "className", "object", "cover", "contain", "jpg", "jpeg", "src", "getImageUrl"]);
      strMatches.forEach((id) => {
        if (seen.has(id) || skipWords.has(id) || /^[A-Z]/.test(id)) return;
        seen.add(id);
        derived.push(year + "/" + id + ".jpg");
      });
    }
  });

  // lover 目录（从 page.tsx 中 title 数组长度推导）
  const loverFile = path.join(appDir, "alice", "lover", "page.tsx");
  if (!literalPaths.some((p) => p.startsWith("lover/")) && fs.existsSync(loverFile)) {
    const text = fs.readFileSync(loverFile, "utf-8");
    const lines = text.split("\n").filter((l) => l.trim().startsWith('"'));
    lines.forEach((_, i) => derived.push(`lover/${i}.jpg`));
  }

  // family 目录
  if (!literalPaths.some((p) => p.startsWith("family/"))) {
    for (let i = 0; i <= 25; i++) {
      derived.push(`family/${i}.jpg`);
    }
  }

  // li 目录
  const liNumbers = ["1", "2", "5", "6", "7", "8", "10", "11", "12", "13", "14"];
  if (!literalPaths.some((p) => p.startsWith("li/"))) {
    liNumbers.forEach((n) => derived.push(`li/${n}.jpg`));
  }

  return derived;
}

// ============== 3. 下载单张图片 ==============
async function downloadImage(imagePath) {
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  const url = `${BLOB_URL.replace(/\/$/, "")}/${cleanPath}`;
  const localPath = path.join(TEMP_DIR, cleanPath);

  // 已存在则跳过
  if (fs.existsSync(localPath)) {
    const stats = fs.statSync(localPath);
    if (stats.size > 0) return { path: cleanPath, status: "skipped" };
  }

  fs.mkdirSync(path.dirname(localPath), { recursive: true });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { path: cleanPath, status: "failed", error: `HTTP ${response.status}` };
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(localPath, Buffer.from(buffer));
    return { path: cleanPath, status: "downloaded", size: buffer.byteLength };
  } catch (err) {
    return { path: cleanPath, status: "failed", error: err.message };
  }
}

// ============== 4. 上传到 R2 ==============
async function uploadToR2(imagePath) {
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  const localPath = path.join(TEMP_DIR, cleanPath);

  if (!fs.existsSync(localPath)) {
    return { path: cleanPath, status: "missing" };
  }

  const contentType = getContentType(cleanPath);
  const fileBuffer = fs.readFileSync(localPath);

  try {
    const client = new S3Client({
      region: "auto",
      endpoint: R2_ENDPOINT,
      credentials: {
        accessKeyId: R2_ACCESS_KEY,
        secretAccessKey: R2_SECRET_KEY,
      },
    });

    await client.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: cleanPath,
        Body: fileBuffer,
        ContentType: contentType,
      })
    );

    return { path: cleanPath, status: "uploaded", size: fileBuffer.length };
  } catch (err) {
    return { path: cleanPath, status: "failed", error: err.message };
  }
}

function getContentType(filename) {
  const ext = path.extname(filename).toLowerCase();
  const map = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
  };
  return map[ext] || "application/octet-stream";
}

// ============== 5. 批量处理 ==============
async function batchProcess(items, processor, label) {
  const results = [];
  const queue = [...items];
  let processed = 0;

  async function worker() {
    while (queue.length > 0) {
      const item = queue.shift();
      const result = await processor(item);
      results.push(result);
      processed++;
      if (result.status === "failed") {
        console.error(`  [${label}] ❌ ${result.path}: ${result.error}`);
      } else {
        const size = result.size ? ` (${(result.size / 1024).toFixed(1)}KB)` : "";
        console.log(`  [${label}] ✅ ${result.status}: ${result.path}${size}`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);
  return results;
}

// ============== 主流程 ==============
async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry");
  const downloadOnly = args.includes("--download-only");

  console.log("\n🚀 Vercel Blob → Cloudflare R2 图片迁移工具\n");

  // 检查配置
  if (!BLOB_URL) {
    console.error("❌ 缺少 NEXT_PUBLIC_BLOB_URL，请在 .env.local 里配置");
    process.exit(1);
  }
  console.log(`📦 源地址: ${BLOB_URL}`);

  if (!dryRun && !downloadOnly) {
    const missing = ["R2_ENDPOINT", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY", "R2_BUCKET_NAME"].filter(
      (k) => !env[k]
    );
    if (missing.length > 0) {
      console.error(`❌ 缺少 R2 配置: ${missing.join(", ")}，请在 .env 里配置`);
      process.exit(1);
    }
    console.log(`☁️ 目标桶: ${R2_BUCKET} (${R2_ENDPOINT})`);
  }

  // 提取路径
  const { literalPaths, dynamicPatterns } = extractLiteralPaths();
  console.log(`\n📁 从代码中提取到 ${literalPaths.length} 个静态路径`);

  if (dynamicPatterns.length > 0) {
    console.log(`\n⚠️  发现 ${dynamicPatterns.length} 个动态路径模板（已自动推导）:`);
    dynamicPatterns.forEach((d) => console.log(`   - ${d.file}: ${d.pattern}`));
  }

  const derivedPaths = deriveDynamicPaths(literalPaths);
  console.log(`📁 自动推导 ${derivedPaths.length} 个动态路径`);

  const allPaths = [...new Set([...literalPaths, ...derivedPaths])].sort();
  console.log(`\n🎯 总共 ${allPaths.length} 张图片待处理\n`);

  if (dryRun) {
    console.log("\n--dry 模式，只输出清单:\n");
    allPaths.forEach((p) => console.log(`  ${p}`));
    console.log(`\n💡 确认无误后，运行: pnpm migrate-images\n`);
    return;
  }

  // 下载阶段
  console.log(`⬇️  开始下载到 ${TEMP_DIR} ...`);
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  const downloadResults = await batchProcess(allPaths, downloadImage, "DL");
  const downloadFailed = downloadResults.filter((r) => r.status === "failed");
  console.log(
    `\n📊 下载完成: ${downloadResults.filter((r) => r.status === "downloaded").length} 成功, ${downloadResults.filter((r) => r.status === "skipped").length} 已存在, ${downloadFailed.length} 失败`
  );

  if (downloadFailed.length > 0 && downloadFailed.length <= 5) {
    console.log("\n❌ 失败的文件:");
    downloadFailed.forEach((f) => console.log(`   ${f.path}: ${f.error}`));
  }

  if (downloadOnly) {
    console.log(`\n💾 图片已保存到 ${TEMP_DIR}，你可以用其它工具上传到 R2\n`);
    return;
  }

  // 上传阶段
  console.log(`\n⬆️  开始上传到 R2 ...`);
  const uploadResults = await batchProcess(allPaths, uploadToR2, "UP");
  const uploadFailed = uploadResults.filter((r) => r.status === "failed");
  console.log(
    `\n📊 上传完成: ${uploadResults.filter((r) => r.status === "uploaded").length} 成功, ${uploadFailed.length} 失败`
  );

  if (uploadFailed.length > 0) {
    console.log("\n❌ 上传失败的文件（可重试）:");
    uploadFailed.forEach((f) => console.log(`   ${f.path}: ${f.error}`));
  }

  // 可选：清理本地缓存
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise((resolve) => {
    rl.question("\n🧹 是否删除本地临时文件 temp_images/? [y/N] ", resolve);
  });
  rl.close();
  if (answer.toLowerCase() === "y") {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    console.log("✅ 已清理临时文件\n");
  } else {
    console.log(`💾 临时文件保留在: ${TEMP_DIR}\n`);
  }

  console.log("\n🎉 迁移完成！");
  console.log(`\n下一步：把 .env.local 里的 NEXT_PUBLIC_BLOB_URL 替换为:`);
  console.log(`  NEXT_PUBLIC_R2_URL=${R2_URL || "https://你的R2域名.com"}`);
  console.log(`\n然后重新构建部署即可: pnpm build && pnpm deploy\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
