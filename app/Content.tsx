"use client";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import lang from "./common/lang";
import { LOCALE_STORAGE } from "./common/config";
import { getImageUrl } from "./common/image";

export default function Content() {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE.LOCALE);
    if (stored) {
      setLocale(stored);
    }
  }, []);

  const content = lang[locale as keyof typeof lang]?.content ?? lang["en"].content;
  const bgImage = getImageUrl("bg.jpg");
  return (
    <>
      <div className="relative top-[-50px]">
        <div className="glitch">
          <div className="glitch-img" style={{ backgroundImage: `url("${bgImage}")` }} />
          <div className="glitch-img" style={{ backgroundImage: `url("${bgImage}")` }} />
          <div className="glitch-img" style={{ backgroundImage: `url("${bgImage}")` }} />
          <div className="glitch-img" style={{ backgroundImage: `url("${bgImage}")` }} />
          <div className="glitch-img" style={{ backgroundImage: `url("${bgImage}")` }} />
        </div>
        <h1 className="font-extralight lg:font-light font-sans leading-none m-0 pt-2 tracking-[14px] lg:tracking-[30px] text-3xl lg:text-5xl uppercase relative text-grass-600">
          WingRay Liao
        </h1>
        <p className="font-medium mt-[2em] text-grass-500 relative">
          {content.frontEnd}
          &nbsp;/&nbsp;
          {content.photography}
          &nbsp;/&nbsp;
          {content.swimfan}
        </p>
      </div>
      <div className="absolute left-[-130px] bottom-[-130px] scale-[0.8]">
        <MapPin
          className="text-gray-800 dark:text-gray-50 absolute top-1/2 left-1/2 mt-[-10px] ml-[-10px] w-6 h-6"
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
    </>
  );
}
