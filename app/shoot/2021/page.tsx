import { Metadata } from "next";
import Layout from "../../components/Layout";
import styles from "../shoot.module.css";
import Image from "next/image";
import { getImageUrl } from "../../common/image";
export const metadata: Metadata = {
  title: "2021 Shoot",
};
export default function Page() {
  return (
    <Layout>
      <div className={`${styles.item} ${styles.unite}`}>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            alt="2021 photo 0130"
            src={getImageUrl("2021/0130.jpg")}
          />
        </div>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            alt="2021 photo 0131"
            src={getImageUrl("2021/0131.jpg")}
          />
        </div>
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0213"
          src={getImageUrl("2021/0213.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0214"
          src={getImageUrl("2021/0214.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0215"
          src={getImageUrl("2021/0215.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0318"
          src={getImageUrl("2021/0318.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0319"
          src={getImageUrl("2021/0319.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0328"
          src={getImageUrl("2021/0328.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0329"
          src={getImageUrl("2021/0329.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0411"
          src={getImageUrl("2021/0411.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0412"
          src={getImageUrl("2021/0412.jpg")}
        />
      </div>
      <div className={`${styles.item} ${styles.unite}`}>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            alt="2021 photo 0413"
            src={getImageUrl("2021/0413.jpg")}
          />
        </div>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            alt="2021 photo 0415"
            src={getImageUrl("2021/0415.jpg")}
          />
        </div>
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0505"
          src={getImageUrl("2021/0505.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 0929"
          src={getImageUrl("2021/0929.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 1001"
          src={getImageUrl("2021/1001.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2021 photo 1002"
          src={getImageUrl("2021/1002.jpg")}
        />
      </div>
      <div className={`${styles.item} ${styles.unite}`}>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            alt="2021 photo 1017"
            src={getImageUrl("2021/1017.jpg")}
          />
        </div>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            alt="2021 photo 1018"
            src={getImageUrl("2021/1018.jpg")}
          />
        </div>
      </div>
    </Layout>
  );
}
