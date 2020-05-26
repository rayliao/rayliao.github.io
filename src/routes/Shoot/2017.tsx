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
            src="../../images/2017/0101.webp"
            fallback="../../images/2017/0101.jpg"
            alt="0101"
          />
        </div>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2017/0102.webp"
              fallback="../../images/2017/0102.jpg"
              alt="0102"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2017/0402.webp"
              fallback="../../images/2017/0402.jpg"
              alt="0402"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2017/0403.webp"
              fallback="../../images/2017/0403.jpg"
              alt="0403"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <ImgWithFallback
              src="../../images/2017/1001.webp"
              fallback="../../images/2017/1001.jpg"
              alt="1001"
            />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <ImgWithFallback
              src="../../images/2017/1002.webp"
              fallback="../../images/2017/1002.jpg"
              alt="1002"
            />
          </div>
        </Lazyload>
      </Layout>
    )
  }
}
