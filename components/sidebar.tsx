"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
    x: 0,
    y: 0,
    w: "64px",
  },
  "/about": {
    name: "about",
    x: 64,
    y: 35,
    w: "65px",
  },
  "/blog": {
    name: "blog",
    x: 127,
    y: 69,
    w: "56px",
  },
  "/guestbook": {
    name: "guestbook",
    x: 182,
    y: 104,
    w: "100px",
  },
};

export default function Navbar() {
  let pathname = usePathname();
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start "></div>
      </div>
    </aside>
  );
}
