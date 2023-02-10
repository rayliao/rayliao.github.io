import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import haha from "../assets/haha.gif";

const NotFound: NextPage = () => {
  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center font-mono bg-[#f3f3f2] dark:bg-[#272824]">
      <Head>404 - RayLiao</Head>
      <div className="relative w-[200px] h-[200px]">
        <Image alt="haha" src={haha} layout="fill" />
      </div>
      <Link href="/">click me, go home</Link>
    </div>
  );
};

export default NotFound;
