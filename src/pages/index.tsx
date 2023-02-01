import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useLang } from "common";
import Cookies from "js-cookie";
import Svg from "../components/Svg";
import languages from "../common/lang";

const Home: NextPage = () => {
  const lang = useLang();
  return (
    <div className="font-mono bg-[#f3f3f2] dark:bg-[#272824] h-screen relative text-center overflow-hidden text-gray-800 dark:text-gray-50 text-sm flex flex-col justify-center">
      <Head>
        <title>RayLiao</title>
      </Head>
      <div className="absolute top-0 z-[3] w-full p-[10px] h-[48px] box-border flex items-center justify-between">
        <nav className="flex gap-3">
          <Link href="/">{lang.home}</Link>
          <a
            href="https://rayliao.github.io/blog/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {lang.blog}
          </a>
          <Link href="/shoot/2021">{lang.image}</Link>
          {/* <Link href="/about">{lang.about}</Link> */}
        </nav>
        <div className="group relative">
          <Svg
            name="language"
            className="fill-gray-800 dark:fill-gray-50 w-5 h-5 cursor-pointer"
          />
          <div className="hidden group-hover:flex flex-col gap-2 pr-1 pt-1 text-right absolute z-50 right-0 border-t border-t-gray-500 border-dotted bg-gray-50/[0.4] dark:bg-gray-800/[0.3] lg:bg-transparent dark:lg:bg-transparent backdrop-blur">
            {Object.keys(languages).map((key) => (
              <Link href="/" className="cursor-pointer" key={key} locale={key}>
                <a onClick={() => Cookies.set("NEXT_LOCALE", key)}>
                  {languages[key].name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative top-[-50px]">
        <div className="glitch">
          <div className="glitch-img" />
          <div className="glitch-img" />
          <div className="glitch-img" />
          <div className="glitch-img" />
          <div className="glitch-img" />
        </div>
        <h1 className="font-extralight lg:font-light font-sans leading-none m-0 pt-2 tracking-[14px] lg:tracking-[30px] text-3xl lg:text-5xl uppercase relative text-grass-600">
          WingRay Liao
        </h1>
        <p className="font-medium mt-[2em] text-grass-500 relative">
          {lang.frontEnd}
          &nbsp;/&nbsp;
          {lang.photography}
          &nbsp;/&nbsp;
          {lang.swimfan}
        </p>
      </div>
      <div className="absolute left-[-130px] bottom-[-130px] scale-[0.8]">
        <Svg
          name="location"
          className="fill-gray-800 dark:fill-gray-50 absolute top-1/2 left-1/2 mt-[-10px] ml-[-10px] w-6 h-6"
        />
        <svg className="animate-[spin_15s_linear_infinite] w-[300px] h-[300px]">
          <defs>
            <path id="textPath" d="m61,149.99998a89,89 0 1 1 0,0.00004" />
          </defs>
          <text className="font-sans font-light text-[20px] fill-gray-800 dark:fill-gray-50 tracking-[11px]">
            <textPath xlinkHref="#textPath">{`24°01'50.4"N  116°28'40.6"E`}</textPath>
          </text>
        </svg>
      </div>
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
          href="https://instagram.com/wingrayliao/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
        >
          Instagram
        </a>
        <span title="rayliao1989@gmail.com">Email</span>
      </div>
    </div>
  );
};

export default Home;
