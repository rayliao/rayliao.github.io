# Vercel Blob 图片集成说明

## 集成步骤

### 1. 环境变量配置

在项目根目录创建 `.env.local` 文件（已有模板 `.env.example`），添加以下配置：

```bash
NEXT_PUBLIC_BLOB_URL=https://your-blob-url.public.blob.vercel-storage.com
```

请将 URL 替换为你的实际 Vercel Blob 存储地址。

### 2. 上传图片到 Vercel Blob

将 `public/images` 文件夹中的所有图片上传到 Vercel Blob，保持相同的目录结构：

```
images/
  ├── 2016/
  ├── 2017/
  ├── 2018/
  ├── 2019/
  ├── 2020/
  ├── 2021/
  ├── albums/
  ├── family/
  ├── jon/
  ├── li/
  ├── lover/
  ├── undefined/
  └── bg.jpg
```

### 3. Vercel 环境变量设置

在 Vercel 项目设置中添加环境变量：

1. 进入你的 Vercel 项目
2. 点击 Settings -> Environment Variables
3. 添加 `NEXT_PUBLIC_BLOB_URL` 变量，值为你的 Blob 存储地址
4. 确保在 Production、Preview 和 Development 环境中都添加此变量

### 4. 本地开发

- 如果配置了 `NEXT_PUBLIC_BLOB_URL`，将使用 Vercel Blob 的图片
- 如果未配置，将继续使用本地 `/public/images` 的图片

### 5. 删除本地图片（可选）

确认 Vercel Blob 上的图片都正常访问后，可以删除 `public/images` 文件夹以减小项目体积：

```bash
rm -rf public/images
```

## 技术实现

### getImageUrl 工具函数

项目已集成 `getImageUrl` 函数（位于 `app/common/image.ts`），用于处理图片路径：

```typescript
import { getImageUrl } from "./common/image";

// 使用示例
<Image src={getImageUrl("2021/0130.jpg")} />
<Image src={getImageUrl("albums/201510.jpeg")} />
```

### 已修改的文件

以下文件已更新为使用 `getImageUrl`：

- `app/shoot/2016/page.tsx`
- `app/shoot/2017/page.tsx`
- `app/shoot/2018/page.tsx`
- `app/shoot/2019/page.tsx`
- `app/shoot/2020/page.tsx`
- `app/shoot/2021/page.tsx`
- `app/shoot/undefined/page.tsx`
- `app/shoot/past/page.tsx`
- `app/components/Family/index.tsx`
- `app/alice/lover/Slide.tsx`
- `app/jon/page.tsx`
- `app/Content.tsx`
- `app/styles/globals.css`

## 注意事项

1. 上传图片到 Vercel Blob 时，确保路径结构与 `public/images` 中的一致
2. 图片文件名和扩展名必须完全匹配（包括大小写）
3. 如果某些图片无法显示，检查 Blob URL 是否正确，以及图片是否已上传
4. 建议先在 Preview 环境测试，确认无误后再部署到 Production

## 回滚方案

如果需要回滚到使用本地图片：

1. 删除或注释掉 `.env.local` 中的 `NEXT_PUBLIC_BLOB_URL`
2. 重新部署项目

代码会自动回退到使用本地 `/images` 路径。
