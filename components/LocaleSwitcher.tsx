"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, lang, type Locale } from "../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <>
      {i18n.locales.map((locale) => (
        <li key={locale} className="cursor-pointer">
          <Link href={redirectedPathName(locale)}>{lang[locale]}</Link>
        </li>
      ))}
    </>
  );
}
