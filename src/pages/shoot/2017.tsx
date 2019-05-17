import * as React from 'react'
import Layout from './layout'
import * as styles from './shoot.module.css'

export default class Index extends React.Component {
  render() {
    return <Layout>
      <div><img src='../../images/2017/0101.jpg' /></div>
      <div><img src='../../images/2017/0102.jpg' /></div>
      <div><img src='../../images/2017/0402.jpg' /></div>
      <div><img src='../../images/2017/0403.jpg' /></div>
      <div><img src='../../images/2017/1001.jpg' /></div>
      <div className={styles.unite}><img src='../../images/2017/1002.jpg' /></div>
    </Layout>
  }
}