import { Link } from 'gatsby'
import * as React from 'react'
import '../../styles/normalize.css'
import InteractivePaticles from '../InteractivePaticles'
import * as styles from './index.module.css'
import Layout from './Layout'

export default class OldHome extends React.Component {
  render() {
    return <Layout>
      <div className={styles.container}>
        <InteractivePaticles />
        <nav className={styles.nav}>
          <Link to='/'>HOME</Link>
          <Link to='/blog'>BLOG</Link>
          <Link to='/shoot/2018'>PHOTOGRAPHY</Link>
        </nav>
        <div className={styles.main}>
          <h1>WingRay Liao</h1>
          <p>Front-end developer, photography enthusiasts</p>
        </div>
        <div className={styles.sns}>
          <a href='https://github.com/rayliao' target='_blank' title='github'><i className='fa fa-github' /></a>
          <a href='https://instagram.com/wingrayliao/' target='_blank' title='instagram'><i className='fa fa-instagram' /></a>
          <a href='https://www.facebook.com/wingrayliao' target='_blank' title='facebook'><i className='fa fa-facebook-square' /></a>
          <a href='https://www.linkedin.com/in/wingrayliao' target='_blank' title='linkedin'><i className='fa fa-linkedin' /></a>
          <a href='http://weibo.com/574954033' target='_blank' title='weibo'><i className='fa fa-weibo' /></a>
          <a href='https://500px.com/wingrayliao' target='_blank' title='500px'><i className='fa fa-500px' /></a>
          <a href='https://www.flickr.com/photos/ray1989/' target='_blank' title='flickr'><i className='fa fa-flickr' /></a>
          <a href='http://rayliao.lofter.com/' target='_blank' title='lofter'>lofter</a>
          <a href='http://blog.segmentfault.com/rayliao' target='_blank' className='segmentfault'>sf</a>
          <a href='http://www.douban.com/people/lensliao/' target='_blank' title='douban'>豆</a>
          <a href='javascript:;' title='QQ: 574954033'><i className='fa fa-qq' /></a>
          <a href='javascript:;' title='rayliao1989@gmail.com'><i className='fa fa-envelope' /></a>
        </div>
      </div>
    </Layout>
  }
}