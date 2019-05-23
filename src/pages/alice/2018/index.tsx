import * as React from 'react'
import Helmet from 'react-helmet'
import * as styles from './index.module.css'

export default class Index extends React.Component {
  render() {
    return <>
      <Helmet defaultTitle={`Alice's Birthday 2018`}>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
      </Helmet>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>Happy Birthday My Dear</h1>
          <h3>This is for you lah!</h3>
          <div className={styles.card}>
            <p className={styles.name}>iPhone XS</p>
            <p className={styles.tip}>* This is just for Alice</p>
          </div>
        </div>
      </div>
    </>
  }
}