import type { Collection } from "./articles";

export const COLLECTION_META: Record<
  Collection,
  { title: string; subtitle: string }
> = {
  yar: {
    title: "Rayyar爱学习",
    subtitle: "AI 与创作的工具笔记",
  },
  hakka: {
    title: "Hakka",
    subtitle: "客家文化记录",
  },
};
