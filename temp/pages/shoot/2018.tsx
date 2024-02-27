import Head from "next/head";
import Layout from "../../../components/Layout";
import styles from "./shoot.module.css";
import Image from "next/image";

const Index = () => {
  const images = [
    "0203",
    "0204",
    ["0619", "0620"],
    "0621",
    "0622",
    "0623",
    "0624",
    "0625",
    "0626",
    "0627",
    "0628",
    "0629",
    "0630",
    "0802",
    "1003",
    "1101",
    ["1201", "1203"],
  ];
  return (
    <>
      <Head>
        <title>2018 Shoot - RayLiao</title>
      </Head>
      <Layout>
        {images.map((item, index) => {
          const single = typeof item === "string";
          return (
            <div
              key={index}
              className={`${styles.item} ${single ? "" : styles.unite}}`}
            >
              {single ? (
                <Image
                  objectFit="cover"
                  layout="fill"
                  alt=""
                  src={`/images/2018/${item}.jpg`}
                />
              ) : (
                (item as string[]).map((n, i) => (
                  <div className={styles.uniteItem} key={i}>
                    <Image
                      objectFit="cover"
                      layout="fill"
                      alt=""
                      src={`/images/2018/${n}.jpg`}
                    />
                  </div>
                ))
              )}
            </div>
          );
        })}
      </Layout>
    </>
  );
};

export default Index;
