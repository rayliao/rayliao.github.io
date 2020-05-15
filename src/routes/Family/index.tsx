import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
// import Slider from 'react-slick'
import styles from './index.module.css'

const Family = () => {
  const [shuffleList, setShuffleList] = useState<number[]>([])
  const max = 9
  useEffect(() => {
    const list = Array.from(new Array(max + 1).keys())
    setShuffleList(list.sort(() => 0.5 - Math.random()))
  }, [])
  // let slider: Slider | null
  return shuffleList ? (
    <div
      className={styles.container}
      // onClick={() => slider && slider.slickNext()}
    >
      <Helmet>
        <title>家族</title>
      </Helmet>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          {shuffleList.map((item, index) => (
            <a href={`#image-${index}`} key={index}>
              <img
                className={styles.navImg}
                src={`../../images/family/${item}.jpg`}
                alt={`img${item}`}
              />
            </a>
          ))}
        </nav>
        <div className={styles.gallery}>
          {shuffleList.map((item, index) => (
            <img
              className={styles.galleryImg}
              key={index}
              id={`image-${index}`}
              src={`../../images/family/${item}.jpg`}
              alt={`img${item}`}
            />
          ))}
        </div>
      </div>
      {/* <Slider
        ref={(s) => (slider = s)}
        infinite={true}
        speed={500}
        lazyLoad="progressive"
        slidesToShow={1}
        slidesToScroll={1}
        fade={true}
      >
        {shuffleList.map((index) => {
          return (
            <div key={index} className={styles.item}>
              <img
                alt=""
                className={styles.img}
                src={`../../images/family/${index}.jpg`}
              />
            </div>
          )
        })}
      </Slider> */}
    </div>
  ) : null
}

export default Family
