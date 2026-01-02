/**
 * 获取图片的完整 URL
 * 如果配置了 NEXT_PUBLIC_BLOB_URL，则使用 Vercel Blob 存储
 * 否则使用本地图片路径
 * 
 * @param path - 相对于 /images 的路径，例如 '2021/0130.jpg' 或 'albums/201510.jpeg'
 * @returns 完整的图片 URL
 */
export function getImageUrl(path: string): string {
  const blobUrl = process.env.NEXT_PUBLIC_BLOB_URL;
  
  if (blobUrl) {
    // 确保路径不以 / 开头
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // 确保 blob URL 不以 / 结尾
    const cleanBlobUrl = blobUrl.endsWith('/') ? blobUrl.slice(0, -1) : blobUrl;
    return `${cleanBlobUrl}/${cleanPath}`;
  }
  
  // 本地开发时使用相对路径
  return path.startsWith('/images') ? path : `/images/${path}`;
}
