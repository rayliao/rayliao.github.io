// 优先 Cloudflare R2（PUBLIC_R2_URL），未配置时回退本地 /images/
export function getImageUrl(path: string): string {
  const r2Url = import.meta.env.PUBLIC_R2_URL;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  if (r2Url) {
    const cleanR2Url = r2Url.endsWith("/") ? r2Url.slice(0, -1) : r2Url;
    return `${cleanR2Url}/${cleanPath}`;
  }

  return path.startsWith("/images") ? path : `/images/${path}`;
}