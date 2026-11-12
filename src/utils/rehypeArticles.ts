import { getImageUrl } from "./image";

const isHttp = (value: unknown): value is string =>
  typeof value === "string" && /^https?:\/\//i.test(value);

type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

// 只处理 yar/hakka 文章：外链新窗口打开，相对路径图片走 R2
export default function rehypeArticles() {
  return (tree: HastNode, file: { history?: string[] }) => {
    const source = file.history?.[0] ?? "";
    if (!/\/content\/(yar|hakka)\//.test(source)) return;

    const walk = (node: HastNode) => {
      if (node.type === "element" && node.properties) {
        if (node.tagName === "a" && isHttp(node.properties.href)) {
          node.properties.target = "_blank";
          node.properties.rel = "noreferrer noopener";
        } else if (node.tagName === "img") {
          const src = node.properties.src;
          if (typeof src === "string" && !isHttp(src)) {
            node.properties.src = getImageUrl(src);
          }
          node.properties.loading = "lazy";
          node.properties.className = ["not-prose", "w-full", "rounded-lg"];
        }
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}