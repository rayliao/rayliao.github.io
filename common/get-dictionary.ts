import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the defalt import for cleaner types
const dictionaries = {
  "zh-Hant": () =>
    import("../dictionaries/zh-Hant.json").then((module) => module.default),
  "zh-Hans": () =>
    import("../dictionaries/zh-Hans.json").then((module) => module.default),
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  jp: () => import("../dictionaries/jp.json").then((module) => module.default),
  fr: () => import("../dictionaries/fr.json").then((module) => module.default),
  ko: () => import("../dictionaries/ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
