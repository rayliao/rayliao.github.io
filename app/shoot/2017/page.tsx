import Layout from "../../components/Layout";
import styles from "../shoot.module.css";
import Image from "next/image";

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
                objectFit="cover"
                layout="fill"
                alt=""
                src={`/images/2017/${item}.jpg`}
              />
            ) : (
              (item as string[]).map((n, i) => (
                <div className={styles.uniteItem} key={i}>
                  <Image
                    objectFit="cover"
                    layout="fill"
                    alt=""
                    src={`/images/2017/${n}.jpg`}
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
