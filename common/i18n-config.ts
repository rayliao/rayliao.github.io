export const i18n = {
  defaultLocale: "en",
  locales: ["zh-Hant", "zh-Hans", "en", "jp", "fr", "ko"],
} as const;

export type Locale = typeof i18n["locales"][number];
