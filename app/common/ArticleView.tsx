import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { getArticle, type Collection } from "./articles";
import { getImageUrl } from "./image";

const isHttp = (value?: string) => !!value && /^https?:\/\//i.test(value);

const components: MDXRemoteProps["components"] = {
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" && !isHttp(src) ? getImageUrl(src) : src}
      alt={alt ?? ""}
      loading="lazy"
      className="not-prose w-full rounded-lg"
    />
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a
      href={href}
      {...(isHttp(href) ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  ),
};

function toDate(value?: string | Date): Date | null {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export default function ArticleView({
  collection,
  slug,
}: {
  collection: Collection;
  slug: string;
}) {
  const article = getArticle(collection, slug);
  if (!article) notFound();

  const { frontmatter, content, format } = article;
  const date = toDate(frontmatter.date);
  const articleUrl = `https://rayliao.com/${collection}/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description ?? "",
    datePublished: date?.toISOString(),
    author: { "@id": "https://rayliao.com/#person" },
    url: articleUrl,
    ...(frontmatter.cover
      ? { image: getImageUrl(frontmatter.cover) }
      : {}),
    keywords: frontmatter.tags?.join(", ") ?? "",
  };

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Link
        href="/"
        className="mb-10 inline-block text-sm text-gray-500 transition-colors hover:text-grass-600 dark:text-gray-400 dark:hover:text-grass-400"
      >
        ← home
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-light tracking-wide text-grass-600 dark:text-grass-400 lg:text-4xl">
            {frontmatter.title}
          </h1>
          {date && (
            <time
              dateTime={date.toISOString()}
              className="mt-3 block text-sm text-gray-500 dark:text-gray-400"
            >
              {date.toISOString().slice(0, 10)}
            </time>
          )}
          {frontmatter.description && (
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
              {frontmatter.description}
            </p>
          )}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-grass-100 px-3 py-1 text-xs text-grass-800 dark:bg-grass-900 dark:text-grass-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {frontmatter.cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getImageUrl(frontmatter.cover)}
            alt={frontmatter.title}
            className="mb-10 w-full rounded-lg"
          />
        )}

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-light prose-a:text-grass-600 dark:prose-a:text-grass-400">
          <MDXRemote
            source={content}
            components={components}
            options={{ mdxOptions: { format } }}
          />
        </div>
      </article>
    </main>
  );
}
