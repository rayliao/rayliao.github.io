import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { getImageUrl } from "../../common/image";

const Family = ({ data, path }: { data: string[]; path: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          {data.map((item, index) => (
            <Link key={index} href={`/${path}#image-${index}`}>
              <div className={styles.navItem}>
                <Image
                  fill
                  className={styles.navImg}
                  src={getImageUrl(`${path}/${item}.jpg`)}
                  alt={`img${item}`}
                />
              </div>
            </Link>
          ))}
        </nav>
        <div className={styles.gallery}>
          {data.map((item, index) => (
            <div key={index} className={styles.galleryImg}>
              <Image
                fill
                className="object-contain"
                id={`image-${index}`}
                src={getImageUrl(`${path}/${item}.jpg`)}
                alt={`img${item}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Family;
