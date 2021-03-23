import React from 'react'
import Helmet from 'react-helmet'
import Lazyload from 'react-lazyload'
import Layout from './layout'
import styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Helmet title="2020 Shoot" />
        <Layout>
          <div className={styles.item}>
            <img alt="" src="../../images/2020/0113.jpg" />
          </div>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/0112.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/0129.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/0130.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/0318.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/0325.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={`${styles.item} ${styles.unite}`}>
              <img alt="" src="../../images/2020/0401.jpg" />
              <img alt="" src="../../images/2020/0625.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/0801.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/0901.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/0902.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/0903.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/1001.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/1002.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={`${styles.item} ${styles.unite}`}>
              <img alt="" src="../../images/2020/1101.jpg" />
              <img alt="" src="../../images/2020/1102.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2020/1103.jpg" />
            </div>
          </Lazyload>
          <p className={styles.tip}>*有些是他人所影，手机/爱人/不知道哦</p>
        </Layout>
      </>
    )
  }
}
