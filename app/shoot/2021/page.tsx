import { Metadata } from "next";
import Layout from "../../components/Layout";
import styles from "../shoot.module.css";
import Image from "next/image";
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
            alt=""
            src="/images/2021/0130.jpg"
          />
        </div>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            alt=""
            src="/images/2021/0131.jpg"
          />
        </div>
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0213.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0214.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0215.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0318.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0319.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0328.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0329.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0411.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0412.jpg"
        />
      </div>
      <div className={`${styles.item} ${styles.unite}`}>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            alt=""
            src="/images/2021/0413.jpg"
          />
        </div>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            alt=""
            src="/images/2021/0415.jpg"
          />
        </div>
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0505.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/0929.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/1001.jpg"
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt=""
          src="/images/2021/1002.jpg"
        />
      </div>
      <div className={`${styles.item} ${styles.unite}`}>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            alt=""
            src="/images/2021/1017.jpg"
          />
        </div>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
            alt=""
            src="/images/2021/1018.jpg"
          />
        </div>
      </div>
    </Layout>
  );
}
