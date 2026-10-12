import type { Metadata } from "next";
import Link from "next/link";
import { COLLECTION_META } from "../common/collections";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog - 写作入口",
  description:
    "Ray Liao 的写作入口：技术博客、Rayyar爱学习（AI 与创作）与客家文化记录。",
  alternates: {
    canonical: "https://rayliao.com/blog",
  },
};

const ENTRIES = [
  {
    title: "Blog",
    subtitle: "技术博客（blog.rayliao.com）",
    href: "https://blog.rayliao.com",
    external: true,
  },
  {
    title: COLLECTION_META.yar.title,
    subtitle: COLLECTION_META.yar.subtitle,
    href: "/yar",
    external: false,
  },
  {
    title: COLLECTION_META.hakka.title,
    subtitle: COLLECTION_META.hakka.subtitle,
    href: "/hakka",
    external: false,
  },
];

export default function Page() {
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
            Blog
          </h1>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
            写作与记录的三个入口。
          </p>
        </header>

        <ul className="flex flex-col gap-4">
          {ENTRIES.map((entry) => {
            const cardClass =
              "group block rounded-lg border border-gray-200/70 bg-white/50 p-5 transition-colors hover:border-grass-400 dark:border-gray-700/70 dark:bg-gray-800/30 dark:hover:border-grass-500";
            return (
              <li key={entry.href}>
                {entry.external ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    <h2 className="text-lg font-medium text-gray-800 transition-colors group-hover:text-grass-600 dark:text-gray-50 dark:group-hover:text-grass-400">
                      {entry.title}
                      <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">
                        ↗
                      </span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {entry.subtitle}
                    </p>
                  </a>
                ) : (
                  <Link href={entry.href} className={cardClass}>
                    <h2 className="text-lg font-medium text-gray-800 transition-colors group-hover:text-grass-600 dark:text-gray-50 dark:group-hover:text-grass-400">
                      {entry.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {entry.subtitle}
                    </p>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
