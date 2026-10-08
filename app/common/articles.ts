import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Collection = "yar" | "hakka";

export type ArticleFrontmatter = {
  title: string;
  date?: string | Date;
  description?: string;
  tags?: string[];
  cover?: string;
  draft?: boolean;
};

export type Article = {
  slug: string;
  collection: Collection;
  frontmatter: ArticleFrontmatter;
  content: string;
  format: "md" | "mdx";
};

const CONTENT_ROOT = path.join(process.cwd(), "content");
// 同名文章同时存在时，.mdx 优先于 .md
const EXTS = [".mdx", ".md"] as const;

function collectionDir(collection: Collection): string {
  return path.join(CONTENT_ROOT, collection);
}

function resolveFile(collection: Collection, slug: string): string | null {
  for (const ext of EXTS) {
    const file = path.join(collectionDir(collection), `${slug}${ext}`);
    if (fs.existsSync(file)) return file;
  }
  return null;
}

function parse(file: string, collection: Collection, slug: string): Article {
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    collection,
    frontmatter: data as ArticleFrontmatter,
    content,
    format: file.endsWith(".mdx") ? "mdx" : "md",
  };
}

/**
 * 列出集合下所有非草稿文章的 slug。
 * 仅在构建期（generateStaticParams）调用——依赖文件系统，不能在 Worker 运行时执行。
 */
export function getArticleSlugs(collection: Collection): string[] {
  const dir = collectionDir(collection);
  if (!fs.existsSync(dir)) return [];

  const bySlug = new Map<string, { file: string; priority: number }>();
  for (const entry of fs.readdirSync(dir)) {
    const extIdx = EXTS.findIndex((ext) => entry.endsWith(ext));
    if (extIdx === -1) continue;
    const slug = entry.slice(0, -EXTS[extIdx].length);
    const existing = bySlug.get(slug);
    if (!existing || extIdx < existing.priority) {
      bySlug.set(slug, { file: path.join(dir, entry), priority: extIdx });
    }
  }

  const slugs: string[] = [];
  for (const [slug, { file }] of bySlug) {
    const { data } = matter(fs.readFileSync(file, "utf8"));
    if ((data as ArticleFrontmatter).draft) continue;
    slugs.push(slug);
  }
  return slugs.sort();
}

/** 读取单篇文章；不存在时返回 null。 */
export function getArticle(collection: Collection, slug: string): Article | null {
  const file = resolveFile(collection, slug);
  return file ? parse(file, collection, slug) : null;
}
