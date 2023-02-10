"use client";

import { langs } from "common/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <>
      {Object.keys(langs).map((k) => (
        <Link href={redirectedPathName(k)} key={k}>
          {langs[k]}
        </Link>
      ))}
    </>
  );
}
