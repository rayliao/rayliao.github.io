import Header from "./Header";
import Content from "./Content";
import { Github, Instagram } from "lucide-react";

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
