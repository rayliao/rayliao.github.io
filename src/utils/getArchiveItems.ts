import { getCollection } from "astro:content";
import slugify from "@utils/slugify";
import type { ArchiveItem } from "@utils/collections";

export default async function getArchiveItems(): Promise<ArchiveItem[]> {
  const [blog, yar, hakka] = await Promise.all([
    getCollection("blog", ({ data }) => !data.draft),
    getCollection("yar", ({ data }) => !data.draft),
    getCollection("hakka", ({ data }) => !data.draft),
  ]);

  const items: ArchiveItem[] = [
    ...blog.map(post => ({
      collection: "blog" as const,
      title: post.data.title,
      href: `/posts/${slugify(post.data)}`,
      date: post.data.pubDatetime.toISOString(),
      description: post.data.description,
      tags: post.data.tags,
    })),
    ...yar.map(entry => ({
      collection: "yar" as const,
      title: entry.data.title,
      href: `/yar/${entry.id}`,
      date: entry.data.date?.toISOString() ?? null,
      description: entry.data.description ?? null,
      tags: entry.data.tags ?? [],
    })),
    ...hakka.map(entry => ({
      collection: "hakka" as const,
      title: entry.data.title,
      href: `/hakka/${entry.id}`,
      date: entry.data.date?.toISOString() ?? null,
      description: entry.data.description ?? null,
      tags: entry.data.tags ?? [],
    })),
  ];

  return items.sort((a, b) => {
    if (!a.date && !b.date) return a.title.localeCompare(b.title);
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
}