import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import Lazyload from 'react-lazyload'
import styles from './index.module.css'

const Family = () => {
  const [shuffleList, setShuffleList] = useState<number[]>([])
  const max = 25
  useEffect(() => {
    const list = Array.from(new Array(max + 1).keys())
    // setShuffleList(list.sort(() => 0.5 - Math.random()))
    setShuffleList(list.reverse())
  }, [])
  return shuffleList ? (
    <div className={styles.container}>
      <Helmet>
        <title>Family</title>
      </Helmet>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          {shuffleList.map((item, index) => (
            <Lazyload key={index} once>
              <a href={`#image-${index}`}>
                <img
                  className={styles.navImg}
                  src={`../../images/family/${item}.jpg`}
                  alt={`img${item}`}
                />
              </a>
            </Lazyload>
          ))}
        </nav>
        <div className={styles.gallery}>
          {shuffleList.map((item, index) => (
            <Lazyload key={index} once>
              <img
                className={styles.galleryImg}
                id={`image-${index}`}
                src={`../../images/family/${item}.jpg`}
                alt={`img${item}`}
              />
            </Lazyload>
          ))}
        </div>
      </div>
    </div>
  ) : null
}

export default Family
