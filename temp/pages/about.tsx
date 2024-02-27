import { useLang } from "../common";
import { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  const lang = useLang();
  return (
    <div className="h-screen">
      <Head>
        <title>{lang.about} - RayLiao</title>
      </Head>
      <iframe
        src="https://m.douban.com/people/52842379/subject_profile?dt_dapp=1"
        title="about"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  );
};

export default About;
