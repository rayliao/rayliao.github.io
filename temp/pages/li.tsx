import { NextPage } from "next";
import Head from "next/head";
import Family from "components/Family";

const Li: NextPage = () => {
  const shuffleList = [1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14].reverse();
  return (
    <>
      <Head>
        <title>李 - RayLiao</title>
      </Head>
      <Family data={shuffleList} path="li" />
    </>
  );
};

export default Li;
