import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './shoot.module.css'

function Layout(props: { children: ReactNode }) {
  const now = new Date()
  return (
    <>
      <div className={styles.sidebar}>
        <h1 className={styles.title}>
          copyright© 2011-{now.getFullYear()} RAYLIAO
        </h1>
        <div className="menu">
          <div>
            <Link to="/shoot/2019">2019</Link>
          </div>
          <div>
            <Link to="/shoot/2018">2018</Link>
          </div>
          <div>
            <Link to="/shoot/2017">2017</Link>
          </div>
          <div>
            <Link to="/shoot/2016">2016</Link>
          </div>
          <div>
            <Link to="/shoot/undefined">undefined</Link>
          </div>
          <div>
            <Link to="/shoot/past">past</Link>
          </div>
        </div>
        <div className="nav">
          <div>
            <Link to="/">home</Link>
          </div>
        </div>
      </div>
      <div className={styles.content}>{props.children}</div>
    </>
  )
}

export default Layout
