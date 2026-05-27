import lang from "./lang";
import { create } from "zustand";

const defaultLangs = lang["zh-Hans"].content;
type LangKey = keyof typeof lang;
interface LangState {
  lang: typeof defaultLangs;
  set: (locale: LangKey) => void;
}

export const useLangStore = create<LangState>()((set) => ({
  lang: defaultLangs,
  set: (locale: LangKey) => set({ lang: lang[locale].content }),
}));

export const useLang = () => useLangStore((s) => s.lang);

// Export image utility
export { getImageUrl } from "./image";
