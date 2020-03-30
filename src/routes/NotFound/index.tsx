import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

function NotFound() {
  return (
    <div className={styles.content}>
      <Link to="/">click me, go home</Link>
    </div>
  )
}

export default NotFound
