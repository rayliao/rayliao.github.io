import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  type CommandData,
  type CommandDataItem,
} from "@ui-sdk/react/command";
import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogTitle,
} from "@ui-sdk/react/dialog";
import { useShortcut, useShortcutHint } from "@ui-sdk/react/shortcuts";
import {
  COLLECTION_META,
  type ArchiveCollection,
  type ArchiveItem,
} from "@utils/collections";

const BADGE: Record<ArchiveCollection, { label: string; className: string }> = {
  blog: {
    label: "Blog",
    className: "bg-grass-100 text-grass-800 dark:bg-grass-900 dark:text-grass-200",
  },
  yar: {
    label: "Rayyar",
    className:
      "bg-[#e3e8f1] text-[#3b5b8c] dark:bg-[#2a3040] dark:text-[#a8c0e8]",
  },
  hakka: {
    label: "Hakka",
    className:
      "bg-[#f1e8da] text-[#8c5b3b] dark:bg-[#332c22] dark:text-[#e8c8a8]",
  },
};

const NAV: { href: string; label: string; keywords: string[] }[] = [
  { href: "/", label: "首页", keywords: ["home", "index", "主页"] },
  { href: "/blog", label: "博客", keywords: ["blog", "writing", "文章", "写作"] },
  { href: "/yar", label: "Rayyar爱学习", keywords: ["yar", "rayyar", "ai", "工具"] },
  { href: "/hakka", label: "Hakka", keywords: ["hakka", "客家", "文化"] },
  { href: "/shoot/2021", label: "摄影", keywords: ["image", "shoot", "photo", "照片"] },
  { href: "/jon", label: "Jon", keywords: ["jon"] },
];

const THEME_VALUE = "action:theme";
const RECENT_COUNT = 6;

const ITEM_CLASS =
  "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition-colors data-[highlighted]:bg-grass-100 data-[highlighted]:text-grass-900 dark:text-gray-200 dark:data-[highlighted]:bg-grass-900 dark:data-[highlighted]:text-grass-100";

const KBD_CLASS =
  "inline-flex h-5 min-w-5 items-center justify-center rounded-sm border border-dotted border-gray-400/60 px-1 text-[10px] leading-none text-gray-500 dark:border-gray-400/50 dark:text-gray-400";

const CSS = `
.palette-backdrop {
  transition: opacity 0.15s ease;
}
.palette-content {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.palette-backdrop[data-starting-style],
.palette-backdrop[data-ending-style] {
  opacity: 0;
}
.palette-content[data-starting-style],
.palette-content[data-ending-style] {
  opacity: 0;
  transform: scale(0.97);
}
.palette-scroll {
  scrollbar-width: thin;
  scrollbar-color: #aaaaaa transparent;
}
.palette-scroll::-webkit-scrollbar {
  width: 8px;
}
.palette-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.palette-scroll::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: #aaaaaa;
}
.palette-scroll::-webkit-scrollbar-thumb:hover {
  background: #888888;
}
html[data-theme="dark"] .palette-scroll {
  scrollbar-color: #999999 transparent;
}
html[data-theme="dark"] .palette-scroll::-webkit-scrollbar-thumb {
  background: #999999;
}
html[data-theme="dark"] .palette-scroll::-webkit-scrollbar-thumb:hover {
  background: #777777;
}
@media (prefers-reduced-motion: reduce) {
  .palette-backdrop,
  .palette-content {
    transition: none;
  }
}
`;

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ThemeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

interface Props {
  items: ArchiveItem[];
}

export default function CommandPalette({ items }: Props) {
  const [open, setOpen] = useState(false);
  const [hasThemeBtn, setHasThemeBtn] = useState(false);
  const hint = useShortcutHint("mod+k");

  useShortcut("mod+k", () => setOpen(true), { description: "打开命令面板" });

  useEffect(() => {
    setHasThemeBtn(Boolean(document.querySelector("#theme-btn")));
    const onOpen = () => setOpen(true);
    const onSwap = () => setOpen(false);
    window.addEventListener("command-palette:open", onOpen);
    document.addEventListener("astro:before-swap", onSwap);
    return () => {
      window.removeEventListener("command-palette:open", onOpen);
      document.removeEventListener("astro:before-swap", onSwap);
    };
  }, []);

  const articleMap = useMemo(() => {
    const map = new Map<string, ArchiveItem>();
    for (const item of items) map.set(item.href, item);
    return map;
  }, [items]);

  const { fullItems, emptyItems } = useMemo(() => {
    const navData: CommandDataItem[] = NAV.map(n => ({
      value: `nav:${n.href}`,
      label: n.label,
      keywords: n.keywords,
    }));
    const articleData: CommandDataItem[] = items.map(item => ({
      value: item.href,
      label: item.title,
      keywords: [
        COLLECTION_META[item.collection].title,
        COLLECTION_META[item.collection].subtitle,
        ...item.tags,
        item.description ?? "",
      ].filter(Boolean),
    }));
    const head: CommandData = [{ type: "group", label: "导航", items: navData }];
    if (hasThemeBtn) {
      head.push(
        { type: "separator" },
        {
          type: "group",
          label: "操作",
          items: [
            {
              value: THEME_VALUE,
              label: "切换深浅色主题",
              keywords: ["theme", "dark", "light", "主题", "深色", "浅色", "夜间"],
            },
          ],
        }
      );
    }
    const full: CommandData = [
      ...head,
      { type: "separator" },
      { type: "group", label: "文章", items: articleData },
    ];
    const empty: CommandData = [
      ...head,
      { type: "separator" },
      {
        type: "group",
        label: "最近文章",
        items: articleData.slice(0, RECENT_COUNT),
      },
    ];
    return { fullItems: full, emptyItems: empty };
  }, [items, hasThemeBtn]);

  const handleAction = useCallback((value: string) => {
    if (value === THEME_VALUE) {
      document.querySelector<HTMLButtonElement>("#theme-btn")?.click();
      return;
    }
    setOpen(false);
  }, []);

  const renderEntries = (data: CommandData) =>
    data.map((entry, index) => {
      if (typeof entry !== "string" && "type" in entry) {
        if (entry.type === "separator") {
          return (
            <CommandSeparator
              key={`sep-${index}`}
              className="my-1 h-px bg-gray-400/40 dark:bg-gray-400/30"
            />
          );
        }
        return (
          <CommandGroup key={entry.label}>
            <CommandGroupLabel className="px-3 pb-1 pt-2 text-xs font-medium text-gray-400 dark:text-gray-500">
              {entry.label}
            </CommandGroupLabel>
            {renderEntries(entry.items)}
          </CommandGroup>
        );
      }
      const cmd: CommandDataItem =
        typeof entry === "string" ? { value: entry, label: entry } : entry;
      const value = String(cmd.value);

      if (value === THEME_VALUE) {
        return (
          <CommandItem
            key={value}
            value={value}
            label={cmd.label}
            keywords={cmd.keywords}
            className={ITEM_CLASS}
          >
            <ThemeIcon />
            <span className="flex-1 truncate">{cmd.label}</span>
          </CommandItem>
        );
      }

      if (value.startsWith("nav:")) {
        const href = value.slice(4);
        return (
          <CommandItem
            key={value}
            value={value}
            label={cmd.label}
            keywords={cmd.keywords}
            render={<a href={href} />}
            className={ITEM_CLASS}
          >
            <ArrowIcon />
            <span className="flex-1 truncate">{cmd.label}</span>
            <span className="shrink-0 text-xs text-gray-400 dark:text-gray-500">
              {href}
            </span>
          </CommandItem>
        );
      }

      const article = articleMap.get(value);
      return (
        <CommandItem
          key={value}
          value={value}
          label={cmd.label}
          keywords={cmd.keywords}
          render={<a href={value} />}
          className={ITEM_CLASS}
        >
          {article && (
            <span
              className={`shrink-0 rounded-sm px-2 py-0.5 text-xs ${BADGE[article.collection].className}`}
            >
              {BADGE[article.collection].label}
            </span>
          )}
          <span className="flex-1 truncate">{cmd.label}</span>
          {article?.date && (
            <time
              dateTime={article.date}
              className="shrink-0 text-xs text-gray-400 dark:text-gray-500"
            >
              {article.date.slice(0, 10)}
            </time>
          )}
        </CommandItem>
      );
    });

  return (
    <>
      <style>{CSS}</style>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogBackdrop className="palette-backdrop fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-sm dark:bg-black/60" />
        <DialogContent className="palette-content fixed inset-x-0 top-[15vh] bottom-auto z-50 my-0 flex max-h-[80vh] w-[calc(100%-2rem)] max-w-xl flex-col gap-0 overflow-hidden rounded-lg border border-dotted border-gray-400/60 bg-[#fafafa] p-0 font-mono shadow-2xl dark:border-gray-400/50 dark:bg-[#1d1f21]">
          <DialogTitle className="sr-only">命令面板</DialogTitle>
          <Command
            items={fullItems}
            emptyItems={emptyItems}
            onAction={handleAction}
            loop
            className="w-full border-0 bg-transparent"
          >
            <div className="flex items-center gap-2.5 border-b border-dotted border-gray-400/60 px-4 dark:border-gray-400/50">
              <SearchIcon />
              <CommandInput
                aria-label="搜索文章、导航或操作"
                placeholder="搜索文章、导航或操作…"
                autoComplete="off"
                className="w-full border-b-0 bg-transparent py-3.5 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none dark:text-[#c9cacc] dark:placeholder:text-gray-400"
              />
              <kbd className={KBD_CLASS}>esc</kbd>
            </div>
            <CommandEmpty className="px-4 py-10 text-center text-sm text-gray-500 dark:text-gray-400">
              没有匹配的结果。
            </CommandEmpty>
            <CommandList className="palette-scroll max-h-[min(24rem,55vh)] overflow-y-auto p-2">
              {state => renderEntries(state.items)}
            </CommandList>
          </Command>
          <div className="flex items-center gap-3 border-t border-dotted border-gray-400/60 px-4 py-2.5 text-xs text-gray-500 dark:border-gray-400/50 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <kbd className={KBD_CLASS}>↑</kbd>
              <kbd className={KBD_CLASS}>↓</kbd>
              选择
            </span>
            <span className="flex items-center gap-1">
              <kbd className={KBD_CLASS}>↵</kbd>
              打开
            </span>
            <span className="ml-auto flex items-center gap-1">
              <kbd className={KBD_CLASS}>{hint.text}</kbd>
              搜索
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}