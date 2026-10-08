import type { Metadata } from "next";
import ArticleView from "../../common/ArticleView";
import { getArticle, getArticleSlugs } from "../../common/articles";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getArticleSlugs("yar").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("yar", slug);
  return {
    title: article?.frontmatter.title ?? slug,
    description: article?.frontmatter.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleView collection="yar" slug={slug} />;
}
