import * as React from 'react'
import Layout from './layout'
import * as styles from './shoot.module.css'

export default class Empty extends React.Component {
  render() {
    return <Layout>
      <div><img src='../../images/2018/0203.jpg' /></div>
      <div><img src='../../images/2018/0204.jpg' /></div>
      <div className={styles.unite}>
        <img src='../../images/2018/0601.jpg' />
        <img src='../../images/2018/0602.jpg' />
      </div>
      <div><img src='../../images/2018/0603.jpg' /></div>
      <div><img src='../../images/2018/0604.jpg' /></div>
      <div><img src='../../images/2018/0605.jpg' /></div>
      <div><img src='../../images/2018/0607.jpg' /></div>
      <div><img src='../../images/2018/0608.jpg' /></div>
      <div><img src='../../images/2018/0609.jpg' /></div>
      <div><img src='../../images/2018/0610.jpg' /></div>
      <div><img src='../../images/2018/0611.jpg' /></div>
      <div><img src='../../images/2018/0614.jpg' /></div>
      <div><img src='../../images/2018/0615.jpg' /></div>
      <div><img src='../../images/2018/0801.jpg' /></div>
      <div><img src='../../images/2018/1001.jpg' /></div>
      <div><img src='../../images/2018/1002.jpg' /></div>
      <div><img src='../../images/2018/1102.jpg' /></div>
      <div className={styles.unite}>
        <img src='../../images/2018/1201.jpg' />
        <img src='../../images/2018/1202.jpg' />
      </div>
    </Layout>
  }
}