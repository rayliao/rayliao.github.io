export type Collection = "yar" | "hakka";
export type ArchiveCollection = "blog" | Collection;
export type ArchiveFilter = "all" | ArchiveCollection;

export const COLLECTION_META: Record<
  ArchiveCollection,
  { title: string; subtitle: string }
> = {
  blog: {
    title: "Blog",
    subtitle: "技术博客（生活、阅读与年度回顾）",
  },
  yar: {
    title: "Rayyar爱学习",
    subtitle: "AI 与创作的工具笔记",
  },
  hakka: {
    title: "Hakka",
    subtitle: "客家文化记录",
  },
};

export type ArchiveItem = {
  collection: ArchiveCollection;
  title: string;
  href: string;
  date: string | null;
  description: string | null;
  tags: string[];
};