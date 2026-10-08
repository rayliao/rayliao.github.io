import type { Metadata } from "next";
import Layout from "../../components/Layout";
import styles from "../shoot.module.css";
import Image from "next/image";
import { getImageUrl } from "../../common/image";

export const metadata: Metadata = {
  title: "2017 Shoot",
  description: "Photography collection from 2017",
  alternates: {
    canonical: "https://rayliao.com/shoot/2017",
  },
};

export default function Page() {
  const images = ["0101", "0102", "0402", "0403", "1001", ["1002"]];
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
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt={`2017 photo ${item}`}
                src={getImageUrl(`2017/${item}.jpg`)}
              />
            ) : (
              (item as string[]).map((n, i) => (
                <div className={styles.uniteItem} key={i}>
                  <Image
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    alt={`2017 photo ${n}`}
                    src={getImageUrl(`2017/${n}.jpg`)}
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
