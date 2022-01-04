import React from 'react'
import Helmet from 'react-helmet'
import Lazyload from 'react-lazyload'
import Layout from './layout'
import styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Helmet title="2021 Shoot" />
        <Layout>
          <div className={`${styles.item} ${styles.unite}`}>
            <img alt="" src="../../images/2021/0130.jpg" />
            <img alt="" src="../../images/2021/0131.jpg" />
          </div>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0213.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0214.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0215.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0318.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0319.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0328.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0329.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0411.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0412.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={`${styles.item} ${styles.unite}`}>
              <img alt="" src="../../images/2021/0413.jpg" />
              <img alt="" src="../../images/2021/0415.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0505.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/0929.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/1001.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={styles.item}>
              <img alt="" src="../../images/2021/1002.jpg" />
            </div>
          </Lazyload>
          <Lazyload height={250}>
            <div className={`${styles.item} ${styles.unite}`}>
              <img alt="" src="../../images/2021/1017.jpg" />
              <img alt="" src="../../images/2021/1018.jpg" />
            </div>
          </Lazyload>
        </Layout>
      </>
    )
  }
}
