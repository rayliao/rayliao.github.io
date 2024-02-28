import Head from "next/head";
import Layout from "../../../app/components/Layout";
import styles from "./shoot.module.css";
import Image from "next/image";

const Index = () => {
  const images = [
    "0401",
    "0402",
    "0403",
    "0405",
    "0406",
    "0407",
    "0801",
    "0802",
    ["0404", "0901"],
    "1000",
    "1001",
    "1002",
    "1004",
    "1005",
    "1006",
  ];
  return (
    <>
      <Head>
        <title>2016 Shoot - RayLiao</title>
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
                  src={`/images/2016/${item}.jpg`}
                />
              ) : (
                (item as string[]).map((n, i) => (
                  <div className={styles.uniteItem} key={i}>
                    <Image
                      objectFit="cover"
                      layout="fill"
                      alt=""
                      src={`/images/2016/${n}.jpg`}
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
