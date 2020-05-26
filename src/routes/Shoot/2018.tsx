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
            src="../../images/2018/0203.webp"
            fallback="../../images/2018/0203.jpg"
            alt="0203"
          />
        </div>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0204.webp"
              fallback="../../images/2018/0204.jpg"
              alt="0204"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <ImgWithFallback
              src="../../images/2018/0619.webp"
              fallback="../../images/2018/0619.jpg"
              alt="0619"
            />
            <ImgWithFallback
              src="../../images/2018/0620.webp"
              fallback="../../images/2018/0620.jpg"
              alt="0620"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0621.webp"
              fallback="../../images/2018/0621.jpg"
              alt="0621"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0622.webp"
              fallback="../../images/2018/0622.jpg"
              alt="0622"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0623.webp"
              fallback="../../images/2018/0623.jpg"
              alt="0623"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/0624.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/0625.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/0626.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/0627.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/0628.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/0629.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/0630.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/0802.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/1003.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/1004.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/1101.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/1201.jpg" />
            <ImgWithFallback
              src="../../images/2018/0801.webp"
              fallback="../../images/2018/0801.jpg"
              alt="0801"
            />
            <img alt="" src="../../images/2018/1203.jpg" />
          </div>
        </Lazyload>
      </Layout>
    )
  }
}
