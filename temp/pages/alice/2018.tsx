import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import bg from "./bg.jpg";
import apple from "./apple.png";

const Year2018: NextPage = () => {
  return (
    <div className="relative h-screen">
      <Image alt="bg" src={bg} layout="fill" objectFit="cover" />
      <Head>2018 alice - RayLiao</Head>
      <div className="relative z-10 text-center text-white h-full flex flex-col box-border pt-2 items-center justify-start bg-black/70">
        <h1 className="m-0 text-2xl">Happy Birthday My Dear</h1>
        <h3 className="mt-2 mb-12 text-xl">This is for you lah!</h3>
        <div className="relative p-3 w-[320px] h-[201px]">
          <Image src={apple} alt="apple" layout="fill" objectFit="contain" />
          <div className="relative h-full flex justify-between flex-col text-gray-500">
            <p className="text-right font-bold text-base">iPhone XS</p>
            <p className="text-left text-xs italic">* This is just for Alice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Year2018;
