import type { Metadata } from "next";
import ArticleList from "../common/ArticleList";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rayyar爱学习 - AI 与创作",
  description:
    "Ray Liao 关于 AI、电商与创作的工具笔记和实践拆解。",
  alternates: {
    canonical: "https://rayliao.com/yar",
  },
};

export default function Page() {
  return <ArticleList collection="yar" />;
}
