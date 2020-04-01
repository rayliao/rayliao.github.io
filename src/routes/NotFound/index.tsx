import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className={styles.content}>
        <Link to="/">click me, go home</Link>
      </div>
    </>
  )
}

export default NotFound
