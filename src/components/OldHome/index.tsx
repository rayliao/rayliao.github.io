import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import Common, { CommonState, Context as IntlContext } from '../Common'
import InteractivePaticles from '../InteractivePaticles'
import * as styles from './index.module.css'

export default class OldHome extends React.Component {
  render() {
    return (
      <Common>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"
          />
        </Helmet>
        <div className={styles.container}>
          <InteractivePaticles />
          <nav className={styles.nav}>
            <Link to="/">HOME</Link>
            <a href="/blog">BLOG</a>
            <Link to="/shoot/2018">IMAGE</Link>
            <Link to="/about">ABOUT</Link>
          </nav>
          <div className={styles.main}>
            <FormattedMessage id="oldHome.title" defaultMessage="标题" />
            <IntlContext.Consumer>
              {({ switchLocale }: CommonState) => (
                <button
                  onClick={() => {
                    switchLocale('zh-CN')
                  }}
                >
                  切换多语言
                </button>
              )}
            </IntlContext.Consumer>
            <h1>WingRay Liao</h1>
            <p>Front-end developer / Photography enthusiasts / Swimfan</p>
          </div>
          <div className={styles.sns}>
            <a
              href="https://github.com/rayliao"
              target="_blank"
              rel="noopener"
              title="github"
            >
              <i className="fa fa-github" />
            </a>
            <a
              href="https://instagram.com/wingrayliao/"
              target="_blank"
              rel="noopener"
              title="instagram"
            >
              <i className="fa fa-instagram" />
            </a>
            <a
              href="https://www.facebook.com/wingrayliao"
              target="_blank"
              rel="noopener"
              title="facebook"
            >
              <i className="fa fa-facebook-square" />
            </a>
            <a
              href="http://weibo.com/574954033"
              target="_blank"
              rel="noopener"
              title="weibo"
            >
              <i className="fa fa-weibo" />
            </a>
            <a
              href="http://blog.segmentfault.com/rayliao"
              target="_blank"
              rel="noopener"
              className="segmentfault"
            >
              sf
            </a>
            <a
              href="http://www.douban.com/people/lensliao/"
              target="_blank"
              rel="noopener"
              title="douban"
            >
              豆
            </a>
            <a href="javascript:;" title="QQ: 574954033">
              <i className="fa fa-qq" />
            </a>
            <a href="javascript:;" title="rayliao1989@gmail.com">
              <i className="fa fa-envelope" />
            </a>
          </div>
        </div>
      </Common>
    )
  }
}
