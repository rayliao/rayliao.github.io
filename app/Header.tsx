"use client";

import LocaleSwitcher from "./components/LocaleSwitcher";
import Link from "next/link";
import Svg from "./components/Svg";
import lang from "./common/lang";
import { LOCALE_STORAGE } from "./common/config";

export default function Header() {
  console.log(localStorage.getItem(LOCALE_STORAGE.LOCALE));
  const locale = localStorage.getItem(LOCALE_STORAGE.LOCALE) ?? "en";
  const content = lang[locale].content;
  return (
    <div className="absolute top-0 z-[3] w-full p-[10px] h-[48px] box-border flex items-center justify-between">
      <nav className="flex gap-3">
        <Link href="/">{content.home}</Link>
        <a
          href="https://blog.rayliao.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          {content.blog}
        </a>
        <Link href="/shoot/2021">{content.image}</Link>
      </nav>
      <div className="group relative">
        <Svg
          name="language"
          className="fill-gray-800 dark:fill-gray-50 w-5 h-5 cursor-pointer"
        />
        <div className="hidden group-hover:flex flex-col gap-2 pr-1 pt-1 text-right absolute z-50 right-0 border-t border-t-gray-500 border-dotted bg-gray-50/[0.4] dark:bg-gray-800/[0.3] lg:bg-transparent dark:lg:bg-transparent backdrop-blur">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
}
