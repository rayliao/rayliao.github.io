import * as React from 'react'
import Lazyload from 'react-lazyload'
import Layout from './layout'
import * as styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <Layout name="2019">
        <div className={styles.item}>
          <img src="../../images/2019/0120.jpg" />
        </div>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img src="../../images/2019/0210.jpg" />
            <img src="../../images/2019/0225.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img src="../../images/2019/0226.jpg" />
            <img src="../../images/2019/0227.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/0228.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/0301.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/0629.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img src="../../images/2019/0630.jpg" />
            <img src="../../images/2019/0910.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/1002.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img src="../../images/2019/1003.jpg" />
            <img src="../../images/2019/1110.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/1122.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/1201.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/1202.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/1203.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/1204.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/1205.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/1206.jpg" />
          </div>
        </Lazyload>
        <p className={styles.tip}>
          *有些是他人所影，科哥/黄劲/夫人/年会酒店服务员/冲浪店店员
        </p>
      </Layout>
    )
  }
}