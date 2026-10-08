import type { Metadata } from "next";
import Header from "./Header";
import Content from "./Content";
import { Github, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "RayLiao - 前端开发 / 摄影 / 客家文化",
  description:
    "Ray Liao，前端开发者、摄影爱好者、客家文化记录者。分享技术文章、摄影作品和客家文化故事。",
  alternates: {
    canonical: "https://rayliao.com",
  },
  openGraph: {
    title: "RayLiao - 前端开发 / 摄影 / 客家文化",
    description:
      "Ray Liao，前端开发者、摄影爱好者、客家文化记录者。",
    url: "https://rayliao.com",
    siteName: "RayLiao",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "RayLiao - 前端开发 / 摄影 / 客家文化",
    description:
      "Ray Liao，前端开发者、摄影爱好者、客家文化记录者。",
  },
};

export default function Page() {
  return (
    <div className="font-mono bg-[#f3f3f2] dark:bg-[#272824] h-screen relative text-center overflow-hidden text-gray-800 dark:text-gray-50 text-sm flex flex-col justify-center">
      <Header />
      <Content />
      <div className="absolute right-4 bottom-4 flex gap-3">
        <a
          href="https://github.com/rayliao"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-800 dark:text-gray-50 hover:opacity-70 transition-opacity"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://instagram.com/ray__liao/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-800 dark:text-gray-50 hover:opacity-70 transition-opacity"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
