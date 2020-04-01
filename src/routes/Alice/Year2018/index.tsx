import React from 'react'
import Helmet from 'react-helmet'
import styles from './index.module.css'

function Alice2018() {
  return (
    <div className={styles.main}>
      <Helmet>
        <title>Alice 2018</title>
      </Helmet>
      <div className={styles.container}>
        <h1>Happy Birthday My Dear</h1>
        <h3>This is for you lah!</h3>
        <div className={styles.card}>
          <p className={styles.name}>iPhone XS</p>
          <p className={styles.tip}>* This is just for Alice</p>
        </div>
      </div>
    </div>
  )
}

export default Alice2018
