/**
 * 获取图片的完整 URL
 * 优先级：
 * 1. Cloudflare R2（NEXT_PUBLIC_R2_URL）
 * 2. Vercel Blob（NEXT_PUBLIC_BLOB_URL）
 * 3. 本地 /public/images/
 *
 * @param path - 相对于 /images 的路径，例如 '2021/0130.jpg' 或 'albums/201510.jpeg'
 * @returns 完整的图片 URL
 */
export function getImageUrl(path: string): string {
  const r2Url = process.env.NEXT_PUBLIC_R2_URL;
  const blobUrl = process.env.NEXT_PUBLIC_BLOB_URL;

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  if (r2Url) {
    const cleanR2Url = r2Url.endsWith("/") ? r2Url.slice(0, -1) : r2Url;
    return `${cleanR2Url}/${cleanPath}`;
  }

  if (blobUrl) {
    const cleanBlobUrl = blobUrl.endsWith("/") ? blobUrl.slice(0, -1) : blobUrl;
    return `${cleanBlobUrl}/${cleanPath}`;
  }

  // 本地开发时使用相对路径
  return path.startsWith("/images") ? path : `/images/${path}`;
}
