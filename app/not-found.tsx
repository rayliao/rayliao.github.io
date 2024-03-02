import Image from "next/image";
import Link from "next/link";
import haha from "./assets/haha.gif";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center font-mono bg-[#f3f3f2] dark:bg-[#272824]">
      <div className="relative w-[200px] h-[200px]">
        <Image alt="haha" src={haha} layout="fill" />
      </div>
      <Link href="/">click me, go home</Link>
    </div>
  );
}
