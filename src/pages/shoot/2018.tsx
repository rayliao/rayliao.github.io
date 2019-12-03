import * as React from 'react'
import Lazyload from 'react-lazyload'
import Layout from './layout'
import * as styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.item}>
          <img src="../../images/2018/0203.jpg" />
        </div>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0204.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img src="../../images/2018/0619.jpg" />
            <img src="../../images/2018/0620.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0621.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0622.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0623.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0624.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0625.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0626.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0627.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0628.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0629.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0630.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/0802.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/1003.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/1004.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2018/1101.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img src="../../images/2018/1201.jpg" />
            <img src="../../images/2018/1203.jpg" />
          </div>
        </Lazyload>
      </Layout>
    )
  }
}
