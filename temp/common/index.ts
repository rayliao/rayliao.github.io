import lang from "./lang";
import create from "zustand";

const defaultLangs = lang["zh-Hans"].content;
interface LangState {
  lang: typeof defaultLangs;
  set: (locale: string) => void;
}

export const useLangStore = create<LangState>()((set) => ({
  lang: defaultLangs,
  set: (locale: string) => set({ lang: lang[locale].content }),
}));

export const useLang = () => useLangStore((s) => s.lang);
