import Head from "next/head";
import Layout from "../../../app/components/Layout";
import styles from "./shoot.module.css";
import Image from "next/image";

const Index = () => {
  const images = [
    "0120",
    "0206",
    ["0210", "0225"],
    ["0226", "0227"],
    "0228",
    "0301",
    "0316",
    "0629",
    ["0630", "0910"],
    "1002",
    ["1003", "1110"],
    "1122",
    "1201",
    "1202",
    "1203",
    "1204",
    "1205",
    "1206",
  ];
  return (
    <>
      <Head>
        <title>2019 Shoot - RayLiao</title>
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
                  src={`/images/2019/${item}.jpg`}
                />
              ) : (
                (item as string[]).map((n, i) => (
                  <div className={styles.uniteItem} key={i}>
                    <Image
                      objectFit="cover"
                      layout="fill"
                      alt=""
                      src={`/images/2019/${n}.jpg`}
                    />
                  </div>
                ))
              )}
            </div>
          );
        })}
        <p className={styles.tip}>
          *有些是他人所影，科哥/黄劲/夫人/年会酒店服务员/冲浪店店员
        </p>
      </Layout>
    </>
  );
};

export default Index;
