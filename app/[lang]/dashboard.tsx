"use client";

import { ThemeProvider } from "next-themes";

export default function Dashboard({ children }) {
  // const { locale } = useRouter();
  // const { set } = useLangStore();
  // useEffect(() => {
  //   if (locale) {
  //     set(locale);
  //   }
  //   return () => {};
  // }, [locale, set]);
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
