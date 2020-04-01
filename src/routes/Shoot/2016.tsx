import React from 'react'
import Lazyload from 'react-lazyload'
import Layout from './layout'
import styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.item}>
          <img alt="" src="../../images/2016/0401.jpg" />
        </div>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/0402.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/0403.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/0405.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/0406.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/0407.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/0801.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/0802.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img alt="" src="../../images/2016/0404.jpg" />
            <img alt="" src="../../images/2016/0901.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/1000.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/1001.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/1002.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/1004.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/1005.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img alt="" src="../../images/2016/1006.jpg" />
          </div>
        </Lazyload>
      </Layout>
    )
  }
}
