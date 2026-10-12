import Link from "next/link";
import { listArticles, type Collection } from "./articles";
import { COLLECTION_META } from "./collections";

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export default function ArticleList({ collection }: { collection: Collection }) {
  const articles = listArticles(collection);
  const meta = COLLECTION_META[collection];

  return (
    <main className="min-h-screen bg-[#f3f3f2] text-gray-800 dark:bg-[#272824] dark:text-gray-50">
      <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-gray-500 transition-colors hover:text-grass-600 dark:text-gray-400 dark:hover:text-grass-400"
        >
          ← home
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl font-light tracking-wide text-grass-600 dark:text-grass-400 lg:text-4xl">
            {meta.title}
          </h1>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
            {meta.subtitle}
          </p>
        </header>

        {articles.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">暂无文章。</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/${collection}/${article.slug}`}
                  className="group block rounded-lg border border-gray-200/70 bg-white/50 p-5 transition-colors hover:border-grass-400 dark:border-gray-700/70 dark:bg-gray-800/30 dark:hover:border-grass-500"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-lg font-medium leading-snug text-gray-800 transition-colors group-hover:text-grass-600 dark:text-gray-50 dark:group-hover:text-grass-400">
                      {article.title}
                    </h2>
                    {article.date && (
                      <time
                        dateTime={article.date.toISOString()}
                        className="shrink-0 text-xs text-gray-500 dark:text-gray-400"
                      >
                        {formatDate(article.date)}
                      </time>
                    )}
                  </div>
                  {article.description && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {article.description}
                    </p>
                  )}
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-grass-100 px-2.5 py-0.5 text-xs text-grass-800 dark:bg-grass-900 dark:text-grass-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
