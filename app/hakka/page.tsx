import type { Metadata } from "next";
import ArticleList from "../common/ArticleList";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hakka - 客家文化",
  description:
    "Ray Liao 的客家文化记录：语言、迁徙、土楼与身份认同的观察与辨析。",
  alternates: {
    canonical: "https://rayliao.com/hakka",
  },
};

export default function Page() {
  return <ArticleList collection="hakka" />;
}
