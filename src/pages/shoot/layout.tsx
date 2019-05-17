import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import * as styles from './shoot.module.css'

export default ({ children }) => {
  const now = new Date()
  return <div className='name'>
    <Helmet defaultTitle='Photography'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Helmet>
    <div className={styles.sidebar}>
      <h1 className={styles.title}>copyright© 2011-{now.getFullYear()} RAYLIAO</h1>
      <div className='menu'>
        <div><Link to='/shoot/2017'>2017</Link></div>
        <div><Link to='/shoot/2016'>2016</Link></div>
        <div><Link to='/shoot/undefined'>undefined</Link></div>
        <div><Link to='/shoot/past'>past</Link></div>
      </div>
      <div className='nav'>
        <div><Link to='/'>home</Link></div>
      </div>
    </div>
    <div className={styles.content}>
      {children}
    </div>
  </div>
}