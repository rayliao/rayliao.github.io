import Head from "next/head";
import Layout from "components/Layout";
import Image from "next/image";

const Index = () => {
  const list = Array.from(new Array(34).keys());
  return (
    <>
      <Head>
        <title>Undefined Shoot - RayLiao</title>
      </Head>
      <Layout>
        <div className="flex flex-col gap-2">
          {list.map((k) => (
            <div className="relative w-[600px] h-[600px]" key={k}>
              <Image
                objectFit="cover"
                layout="fill"
                alt=""
                src={`/images/undefined/${k + 1}.jpg`}
              />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Index;
