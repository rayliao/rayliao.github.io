"use client";

import { LOCALE_STORAGE } from "../common/config";
import locales from "../common/lang";

export default function LocaleSwitcher() {
  return (
    <>
      {Object.keys(locales).map((key) => (
        <span
          key={key}
          className="cursor-pointer"
          onClick={() => {
            localStorage.setItem(LOCALE_STORAGE.LOCALE, key);
            location.reload();
          }}
        >
          {locales[key].name}
        </span>
      ))}
    </>
  );
}
