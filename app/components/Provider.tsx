"use client";

import { ThemeProvider } from "next-themes";
import { PreSvg } from "./Svg";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      {children}
      <PreSvg />
    </ThemeProvider>
  );
}
