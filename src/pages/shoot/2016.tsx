import * as React from 'react'
import Layout from './layout'
import * as styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return <Layout>
      <div><img src='../../images/2016/0401.jpg' /></div>
      <div><img src='../../images/2016/0402.jpg' /></div>
      <div><img src='../../images/2016/0403.jpg' /></div>
      <div><img src='../../images/2016/0405.jpg' /></div>
      <div><img src='../../images/2016/0406.jpg' /></div>
      <div><img src='../../images/2016/0407.jpg' /></div>
      <div><img src='../../images/2016/0801.jpg' /></div>
      <div><img src='../../images/2016/0802.jpg' /></div>
      <div className={styles.unite}>
        <img src='../../images/2016/0404.jpg' />
        <img src='../../images/2016/0901.jpg' />
      </div>
      <div><img src='../../images/2016/1001.jpg' /></div>
      <div><img src='../../images/2016/1002.jpg' /></div>
      <div><img src='../../images/2016/1003.jpg' /></div>
      <div><img src='../../images/2016/1004.jpg' /></div>
      <div><img src='../../images/2016/1005.jpg' /></div>
      <div><img src='../../images/2016/1006.jpg' /></div>
    </Layout>
  }
}