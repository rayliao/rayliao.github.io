import * as React from 'react'
import Layout from './layout'
import * as styles from './shoot.module.css'

export default class Empty extends React.Component {
  render() {
    return <Layout>
      <div><img src='../../images/2018/0203.jpg' /></div>
      <div><img src='../../images/2018/0204.jpg' /></div>
      <div className={styles.unite}>
        <img src='../../images/2018/0619.jpg' />
        <img src='../../images/2018/0620.jpg' />
      </div>
      <div><img src='../../images/2018/0621.jpg' /></div>
      <div><img src='../../images/2018/0622.jpg' /></div>
      <div><img src='../../images/2018/0623.jpg' /></div>
      <div><img src='../../images/2018/0624.jpg' /></div>
      <div><img src='../../images/2018/0625.jpg' /></div>
      <div><img src='../../images/2018/0626.jpg' /></div>
      <div><img src='../../images/2018/0627.jpg' /></div>
      <div><img src='../../images/2018/0628.jpg' /></div>
      <div><img src='../../images/2018/0629.jpg' /></div>
      <div><img src='../../images/2018/0630.jpg' /></div>
      <div><img src='../../images/2018/0802.jpg' /></div>
      <div><img src='../../images/2018/1003.jpg' /></div>
      <div><img src='../../images/2018/1004.jpg' /></div>
      <div><img src='../../images/2018/1101.jpg' /></div>
      <div className={styles.unite}>
        <img src='../../images/2018/1201.jpg' />
        <img src='../../images/2018/1203.jpg' />
      </div>
    </Layout>
  }
}