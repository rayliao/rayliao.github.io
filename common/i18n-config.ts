export const i18n = {
  defaultLocale: "en",
  locales: ["zh-Hant", "zh-Hans", "en", "jp", "fr", "ko"],
} as const;

export const langs = {
  "zh-Hant": "繁體",
  "zh-Hans": "简体",
  en: "English",
  jp: "日本語",
  fr: "français",
  ko: "한국어",
};

export type Locale = typeof i18n["locales"][number];
