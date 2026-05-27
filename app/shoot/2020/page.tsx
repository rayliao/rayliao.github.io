import Layout from "../../components/Layout";
import styles from "../shoot.module.css";
import Image from "next/image";
import { getImageUrl } from "../../common/image";

export default function Page() {
  return (
    <Layout>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 0113"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/0113.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 0112"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/0112.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 0129"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/0129.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="2020 photo 0130"
          src={getImageUrl("2020/0130.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 0318"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/0318.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 0325"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/0325.jpg")}
        />
      </div>
      <div className={`${styles.item} ${styles.unite}`}>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
          alt="2020 photo 0401"
          sizes="(max-width: 1024px) 100vw, 50vw"
            src={getImageUrl("2020/0401.jpg")}
          />
        </div>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
          alt="2020 photo 0625"
          sizes="(max-width: 1024px) 100vw, 50vw"
            src={getImageUrl("2020/0625.jpg")}
          />
        </div>
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 0801"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/0801.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 0901"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/0901.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 0902"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/0902.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 0903"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/0903.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 1001"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/1001.jpg")}
        />
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 1002"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/1002.jpg")}
        />
      </div>
      <div className={`${styles.item} ${styles.unite}`}>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
          alt="2020 photo 1101"
          sizes="(max-width: 1024px) 100vw, 50vw"
            src={getImageUrl("2020/1101.jpg")}
          />
        </div>
        <div className={styles.uniteItem}>
          <Image
            className="object-cover"
            fill
          alt="2020 photo 1102"
          sizes="(max-width: 1024px) 100vw, 50vw"
            src={getImageUrl("2020/1102.jpg")}
          />
        </div>
      </div>
      <div className={styles.item}>
        <Image
          className="object-cover"
          fill
          alt="2020 photo 1103"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={getImageUrl("2020/1103.jpg")}
        />
      </div>
      <p className={styles.tip}>*有些是他人所影，手机/爱人/不知道哦</p>
    </Layout>
  );
}
