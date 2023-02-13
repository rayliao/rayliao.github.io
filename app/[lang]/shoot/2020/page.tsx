import Head from "next/head";
import Layout from "components/Layout";
import styles from "../shoot.module.css";
import Image from "next/legacy/image";

const Index = () => {
  return (
    <>
      <Head>
        <title>2020 Shoot - RayLiao</title>
      </Head>
      <Layout>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/0113.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/0112.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/0129.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="responsive"
            width={1024}
            height={1024}
            alt=""
            src="/images/2020/0130.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/0318.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/0325.jpg"
          />
        </div>
        <div className={`${styles.item} ${styles.unite}`}>
          <div className={styles.uniteItem}>
            <Image
              objectFit="cover"
              layout="fill"
              alt=""
              src="/images/2020/0401.jpg"
            />
          </div>
          <div className={styles.uniteItem}>
            <Image
              objectFit="cover"
              layout="fill"
              alt=""
              src="/images/2020/0625.jpg"
            />
          </div>
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/0801.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/0901.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/0902.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/0903.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/1001.jpg"
          />
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/1002.jpg"
          />
        </div>
        <div className={`${styles.item} ${styles.unite}`}>
          <div className={styles.uniteItem}>
            <Image
              objectFit="cover"
              layout="fill"
              alt=""
              src="/images/2020/1101.jpg"
            />
          </div>
          <div className={styles.uniteItem}>
            <Image
              objectFit="cover"
              layout="fill"
              alt=""
              src="/images/2020/1102.jpg"
            />
          </div>
        </div>
        <div className={styles.item}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src="/images/2020/1103.jpg"
          />
        </div>
        <p className={styles.tip}>*有些是他人所影，手机/爱人/不知道哦</p>
      </Layout>
    </>
  );
};

export default Index;
