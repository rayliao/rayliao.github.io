"use client";

import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

export default function Family({ count, path, lang }) {
  const [shuffleList, setShuffleList] = useState<number[]>([]);
  useEffect(() => {
    const list = Array.from(new Array(count + 1).keys());
    setShuffleList(list.reverse());
  }, []);
  console.log(lang);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          {shuffleList.map((item, index) => (
            <Link key={index} href={`/${path}#image-${index}`}>
              <div className={styles.navItem}>
                <Image
                  layout="fill"
                  className={styles.navImg}
                  src={`/images/${path}/${item}.jpg`}
                  alt={`img${item}`}
                />
              </div>
            </Link>
          ))}
        </nav>
        <div className={styles.gallery}>
          {shuffleList.map((item, index) => (
            <div key={index} className={styles.galleryImg}>
              <Image
                layout="fill"
                objectFit="contain"
                id={`image-${index}`}
                src={`/images/${path}/${item}.jpg`}
                alt={`img${item}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
