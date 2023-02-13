import { NextPage } from "next";
import Head from "next/head";
import Family from "components/Family";
import { Locale } from "common/i18n-config";

const Li: NextPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <Head>
        <title>李 - RayLiao</title>
      </Head>
      <Family count={9} lang={lang} path="li" />
    </>
  );
};

export default Li;
