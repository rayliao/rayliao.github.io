import * as React from 'react'
import Lazyload from 'react-lazyload'
import Layout from './layout'
import * as styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <Layout name="2017">
        <div className={styles.item}>
          <img src="../../images/2017/0101.jpg" />
        </div>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2017/0102.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2017/0402.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2017/0403.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={styles.item}>
            <img src="../../images/2017/1001.jpg" />
          </div>
        </Lazyload>
        <Lazyload height={250}>
          <div className={`${styles.item} ${styles.unite}`}>
            <img src="../../images/2017/1002.jpg" />
          </div>
        </Lazyload>
      </Layout>
    )
  }
}
