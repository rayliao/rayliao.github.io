import Content from "./Content";
import Header from "./Header";

export default async function Page() {
  return (
    <div className="font-mono bg-[#f3f3f2] dark:bg-[#272824] h-screen relative text-center overflow-hidden text-gray-800 dark:text-gray-50 text-sm flex flex-col justify-center">
      <Header />
      <Content />
      <div className="absolute right-4 bottom-4 flex gap-2">
        <a
          href="https://github.com/rayliao"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          Github
        </a>
        <a
          href="https://instagram.com/ray__liao/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
        >
          Instagram
        </a>
        <a
          href="https://bento.me/rayliao"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
        >
          Bento
        </a>
        <span title="rayliao89@outlook.com">Email</span>
      </div>
    </div>
  );
}
