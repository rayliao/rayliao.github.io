import React from 'react'
import Lazyload from 'react-lazyload'
import ImgWithFallback from '../../components/ImgWithFallback'
import Layout from './layout'
import styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.item}>
          <ImgWithFallback
            src="../../images/2016/0401.webp"
            fallback="../../images/2016/0401.jpg"
            alt="0401"
          />
        </div>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/0402.webp"
              fallback="../../images/2016/0402.jpg"
              alt="0402"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/0403.webp"
              fallback="../../images/2016/0403.jpg"
              alt="0403"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/0405.webp"
              fallback="../../images/2016/0405.jpg"
              alt="0405"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/0406.webp"
              fallback="../../images/2016/0406.jpg"
              alt="0406"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/0407.webp"
              fallback="../../images/2016/0407.jpg"
              alt="0407"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/0801.webp"
              fallback="../../images/2016/0801.jpg"
              alt="0801"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/0802.webp"
              fallback="../../images/2016/0802.jpg"
              alt="0802"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <ImgWithFallback
              src="../../images/2016/0404.webp"
              fallback="../../images/2016/0404.jpg"
              alt="0404"
            />
            <ImgWithFallback
              src="../../images/2016/0901.webp"
              fallback="../../images/2016/0901.jpg"
              alt="0901"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/1000.webp"
              fallback="../../images/2016/1000.jpg"
              alt="1000"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/1001.webp"
              fallback="../../images/2016/1001.jpg"
              alt="1001"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/1002.webp"
              fallback="../../images/2016/1002.jpg"
              alt="1002"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/1004.webp"
              fallback="../../images/2016/1004.jpg"
              alt="1004"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/1005.webp"
              fallback="../../images/2016/1005.jpg"
              alt="1005"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2016/1006.webp"
              fallback="../../images/2016/1006.jpg"
              alt="1006"
            />
          </div>
        </Lazyload>
      </Layout>
    )
  }
}
