import * as React from 'react'
import Lazyload from 'react-lazyload'
import Layout from './layout'
import * as styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.item}>
          <img src="../../images/2019/0120.jpg" />
        </div>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2019/0206.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img src="../../images/2019/0210.jpg" />
            <img src="../../images/2019/0225.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img src="../../images/2019/0225.jpg" />
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
      </Layout>
    )
  }
}
