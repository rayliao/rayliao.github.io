import Fuse from "fuse.js";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { SITE } from "@config";
import {
  COLLECTION_META,
  type ArchiveCollection,
  type ArchiveFilter,
  type ArchiveItem,
} from "@utils/collections";

const PAGE_SIZE = SITE.postPerPage;

const TAG_TOGGLE_SIZE = 20;
const TAG_GAP = 8;
const TAG_RESERVE = TAG_TOGGLE_SIZE + TAG_GAP;

const FILTERS: { key: ArchiveFilter; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "blog", label: COLLECTION_META.blog.title },
  { key: "yar", label: COLLECTION_META.yar.title },
  { key: "hakka", label: COLLECTION_META.hakka.title },
];

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

function pageNumbers(current: number, total: number): (number | "gap")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const wanted = [...new Set([1, total, current - 1, current, current + 1])]
    .filter(n => n >= 1 && n <= total)
    .sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  let prev = 0;
  for (const n of wanted) {
    if (prev && n - prev > 1) out.push("gap");
    out.push(n);
    prev = n;
  }
  return out;
}

interface Props {
  items: ArchiveItem[];
  initialCollection?: ArchiveFilter;
  initialPage?: number;
}

export default function Archive({
  items,
  initialCollection = "all",
  initialPage = 1,
}: Props) {
  const [collection, setCollection] = useState<ArchiveFilter>(initialCollection);
  const [page, setPage] = useState(initialPage);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const [tagMetrics, setTagMetrics] = useState<{
    rows: number;
    collapsed: number;
    full: number;
    hiddenStart: number;
    rowHeight: number;
    rowTops: number[];
  } | null>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const prevQuery = useRef("");
  const tagOverflow = (tagMetrics?.rows ?? 0) > 2;

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (prevQuery.current !== debouncedQuery) {
      prevQuery.current = debouncedQuery;
      setPage(1);
    }
  }, [debouncedQuery]);

  const counts = useMemo(() => {
    const result: Record<ArchiveFilter, number> = {
      all: items.length,
      blog: 0,
      yar: 0,
      hakka: 0,
    };
    for (const item of items) result[item.collection] += 1;
    return result;
  }, [items]);

  const collectionItems = useMemo(
    () =>
      collection === "all"
        ? items
        : items.filter(item => item.collection === collection),
    [items, collection]
  );

  const tagOptions = useMemo(() => {
    const freq = new Map<string, number>();
    for (const item of collectionItems) {
      for (const tag of item.tags) freq.set(tag, (freq.get(tag) ?? 0) + 1);
    }
    return [...freq.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag]) => tag);
  }, [collectionItems]);

  const measureTags = useCallback(() => {
    const el = tagsRef.current;
    if (!el) return;
    const chips = Array.from(
      el.querySelectorAll<HTMLElement>("[data-tag-chip]")
    );
    if (chips.length === 0) {
      setTagMetrics(prev => (prev === null ? prev : null));
      return;
    }
    const elTop = el.getBoundingClientRect().top;
    const rowTops = chips.map(c =>
      Math.round(c.getBoundingClientRect().top - elTop)
    );
    const tops = [...new Set(rowTops)].sort((a, b) => a - b);
    const rowHeight = Math.ceil(chips[0].getBoundingClientRect().height);
    const collapsed = tops.length > 1 ? tops[1] + rowHeight : rowHeight;
    const hiddenStart =
      tops.length > 2 ? rowTops.indexOf(tops[2]) : chips.length;
    const next = {
      rows: tops.length,
      collapsed,
      full: el.scrollHeight,
      hiddenStart,
      rowHeight,
      rowTops: tops,
    };
    setTagMetrics(prev =>
      prev &&
      prev.rows === next.rows &&
      prev.collapsed === next.collapsed &&
      prev.full === next.full &&
      prev.hiddenStart === next.hiddenStart &&
      prev.rowHeight === next.rowHeight &&
      prev.rowTops.join() === next.rowTops.join()
        ? prev
        : next
    );
  }, []);

  useLayoutEffect(() => {
    measureTags();
    const el = tagsRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => measureTags());
    observer.observe(el);
    return () => observer.disconnect();
  }, [tagOptions, tagOverflow, measureTags]);

  const fuse = useMemo(
    () =>
      new Fuse(collectionItems, {
        keys: ["title", "description", "tags"],
        threshold: 0.4,
        ignoreLocation: true,
        minMatchCharLength: 1,
      }),
    [collectionItems]
  );

  const filtered = useMemo(() => {
    const searched = debouncedQuery
      ? fuse.search(debouncedQuery).map(result => result.item)
      : collectionItems;
    return activeTag
      ? searched.filter(item => item.tags.includes(activeTag))
      : searched;
  }, [collectionItems, fuse, debouncedQuery, activeTag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const selectCollection = (key: ArchiveFilter) => {
    setCollection(key);
    setActiveTag(null);
    setTagsExpanded(false);
    setPage(1);
  };

  const toggleTag = (tag: string) => {
    setActiveTag(prev => (prev === tag ? null : tag));
    setPage(1);
  };

  const gotoPage = (n: number) => {
    setPage(n);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const listKey = `${collection}|${debouncedQuery}|${activeTag ?? ""}|${currentPage}`;
  const navBtnClass =
    "flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-grass-100 hover:text-grass-800 disabled:pointer-events-none disabled:opacity-40 dark:text-gray-300 dark:hover:bg-grass-900 dark:hover:text-grass-200";
  const tagMaxHeight =
    tagMetrics && tagOverflow
      ? tagsExpanded
        ? tagMetrics.full
        : tagMetrics.collapsed
      : undefined;
  const toggleTop = tagMetrics
    ? (tagsExpanded
        ? tagMetrics.rowTops[tagMetrics.rowTops.length - 1]
        : tagMetrics.rowTops[1]) +
      (tagMetrics.rowHeight - TAG_TOGGLE_SIZE) / 2
    : 0;

  return (
    <div ref={topRef} className="scroll-mt-6">
      <label className="relative mt-8 block">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="text"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.currentTarget.value)
          }
          placeholder="搜索标题、描述或标签…"
          autoComplete="off"
          aria-label="搜索文章"
          className="block w-full rounded-lg border border-dotted border-gray-400/60 bg-transparent py-2.5 pl-9 pr-3 text-sm text-gray-800 transition-colors placeholder:text-gray-500 focus:border-grass-500 focus:outline-none focus:ring-1 focus:ring-grass-500 dark:border-gray-400/50 dark:text-gray-100 dark:placeholder:text-gray-400"
        />
      </label>

      <div
        className="mt-5 flex flex-wrap gap-2"
        role="group"
        aria-label="按集合筛选"
      >
        {FILTERS.map(({ key, label }) => {
          const selected = collection === key;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={selected}
              onClick={() => selectCollection(key)}
              className={`rounded-lg border border-dotted px-3.5 py-1.5 text-sm transition-colors ${
                selected
                  ? "border-grass-500 bg-grass-100 font-medium text-grass-800 dark:bg-grass-900 dark:text-grass-200"
                  : "border-gray-400/60 text-gray-600 hover:border-grass-500 hover:text-grass-700 dark:border-gray-400/50 dark:text-gray-300 dark:hover:text-grass-300"
              }`}
            >
              {label}
              <span
                className={`ml-1.5 text-xs ${selected ? "opacity-80" : "opacity-60"}`}
              >
                {counts[key]}
              </span>
            </button>
          );
        })}
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          tagOptions.length > 0 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-3">
            <div
              ref={tagsRef}
              id="tag-filter"
              className="relative flex flex-wrap gap-2 overflow-hidden transition-[max-height] duration-300 ease-out"
              style={{
                maxHeight: tagMaxHeight,
                paddingRight: tagOverflow ? TAG_RESERVE : undefined,
              }}
              role="group"
              aria-label="按标签筛选"
            >
              {tagOptions.map((tag, i) => {
                const selected = activeTag === tag;
                const clipped =
                  tagOverflow &&
                  !tagsExpanded &&
                  tagMetrics !== null &&
                  i >= tagMetrics.hiddenStart;
                return (
                  <button
                    key={tag}
                    type="button"
                    data-tag-chip=""
                    aria-pressed={selected}
                    aria-hidden={clipped || undefined}
                    tabIndex={clipped ? -1 : undefined}
                    onClick={() => toggleTag(tag)}
                    className={`rounded-sm px-2.5 py-0.5 text-xs transition-colors ${
                      selected
                        ? "bg-grass-800 text-grass-50 dark:bg-grass-300 dark:text-grass-900"
                        : "bg-grass-100 text-grass-800 hover:bg-grass-200 dark:bg-grass-900 dark:text-grass-200 dark:hover:bg-grass-800"
                    }`}
                  >
                    #{tag}
                  </button>
                );
              })}
              {tagOverflow && (
                <button
                  type="button"
                  aria-expanded={tagsExpanded}
                  aria-controls="tag-filter"
                  aria-label={tagsExpanded ? "收起标签" : "展开全部标签"}
                  title={tagsExpanded ? "收起标签" : "展开全部标签"}
                  onClick={() => setTagsExpanded(prev => !prev)}
                  style={{ top: toggleTop }}
                  className="absolute right-0 flex h-5 w-5 items-center justify-center rounded-md text-gray-500 transition-all duration-300 ease-out hover:bg-grass-100 hover:text-grass-800 dark:text-gray-400 dark:hover:bg-grass-900 dark:hover:text-grass-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      tagsExpanded ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <p
        className="mt-5 text-xs text-gray-500 dark:text-gray-400"
        aria-live="polite"
      >
        {debouncedQuery
          ? `找到 ${filtered.length} 篇「${debouncedQuery}」`
          : `共 ${filtered.length} 篇`}
        {activeTag ? ` · #${activeTag}` : ""}
      </p>

      {pageItems.length === 0 ? (
        <div className="archive-fade py-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            没有匹配的文章。
          </p>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            换个关键词，或切回「全部」看看。
          </p>
        </div>
      ) : (
        <ul key={listKey} className="mt-4 flex flex-col gap-4">
          {pageItems.map((item, i) => (
            <li
              key={item.href}
              className="archive-row"
              style={{ animationDelay: `${Math.min(i, 8) * 30}ms` }}
            >
              <a
                href={item.href}
                className="group block rounded-lg border border-dotted border-gray-400/60 p-5 transition-colors hover:border-grass-500 dark:border-gray-400/50"
              >
                {(collection === "all" || item.date) && (
                  <div className="flex items-center gap-4">
                    {collection === "all" && (
                      <span
                        className={`rounded-sm px-2.5 py-0.5 text-xs ${BADGE[item.collection].className}`}
                      >
                        {BADGE[item.collection].label}
                      </span>
                    )}
                    {item.date && (
                      <time
                        dateTime={item.date}
                        className="ml-auto shrink-0 text-xs text-gray-500 dark:text-gray-400"
                      >
                        {item.date.slice(0, 10)}
                      </time>
                    )}
                  </div>
                )}
                <h2 className="mt-2.5 text-lg font-medium leading-snug text-gray-800 transition-colors group-hover:text-grass-600 dark:text-[#c9cacc] dark:group-hover:text-grass-400">
                  {item.title}
                </h2>
                {item.description && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                )}
                {item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-sm bg-grass-100 px-2.5 py-0.5 text-xs text-grass-800 dark:bg-grass-900 dark:text-grass-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <nav
          className="mt-10 flex items-center justify-center gap-1.5"
          aria-label="分页"
        >
          <button
            type="button"
            className={navBtnClass}
            disabled={currentPage === 1}
            onClick={() => gotoPage(currentPage - 1)}
            aria-label="上一页"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          {pageNumbers(currentPage, totalPages).map((n, i) =>
            n === "gap" ? (
              <span
                key={`gap-${i}`}
                className="px-1 text-xs text-gray-400 dark:text-gray-500"
              >
                …
              </span>
            ) : (
              <button
                key={n}
                type="button"
                aria-current={n === currentPage ? "page" : undefined}
                onClick={() => gotoPage(n)}
                className={`h-8 min-w-8 rounded-lg px-2 text-sm transition-colors ${
                  n === currentPage
                    ? "bg-grass-800 font-medium text-grass-50 dark:bg-grass-300 dark:text-grass-900"
                    : "text-gray-600 hover:bg-grass-100 hover:text-grass-800 dark:text-gray-300 dark:hover:bg-grass-900 dark:hover:text-grass-200"
                }`}
              >
                {n}
              </button>
            )
          )}
          <button
            type="button"
            className={navBtnClass}
            disabled={currentPage === totalPages}
            onClick={() => gotoPage(currentPage + 1)}
            aria-label="下一页"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </nav>
      )}
    </div>
  );
}