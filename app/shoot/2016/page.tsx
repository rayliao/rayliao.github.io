import { Metadata } from "next";
import Layout from "../../components/Layout";
import styles from "../shoot.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "2016 Shoot",
};

export default function Page() {
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
                fill
                className="object-cover"
                alt=""
                src={`/images/2016/${item}.jpg`}
              />
            ) : (
              (item as string[]).map((n, i) => (
                <div className={styles.uniteItem} key={i}>
                  <Image
                    fill
                    className="object-cover"
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
  );
}
