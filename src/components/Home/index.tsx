import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import Common, { CommonState, Context as IntlContext } from '../Common'
import * as styles from './index.module.css'
import { languages } from '../../lang'

export default class Home extends React.Component {
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
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <nav className={styles.nav}>
                <Link to="/">
                  <FormattedMessage id="home.home" defaultMessage="首页" />
                </Link>
                <a href="/blog">
                  <FormattedMessage id="home.blog" defaultMessage="博客" />
                </a>
                <Link to="/shoot/2018">
                  <FormattedMessage id="home.image" defaultMessage="摄影" />
                </Link>
                <Link to="/about">
                  <FormattedMessage id="home.about" defaultMessage="关于我" />
                </Link>
              </nav>
            </div>
            <IntlContext.Consumer>
              {({ locale, dark, switchLocale, switchTheme }: CommonState) => (
                <div className={styles.headerRight}>
                  <div onClick={switchTheme} className={styles.theme}>
                    {dark ? (
                      <i className="fa fa-sun-o" />
                    ) : (
                      <i className="fa fa-moon-o" />
                    )}
                  </div>
                  <div className={styles.language}>
                    <i className={`fa fa-language ${styles.languageIcon}`} />
                    <div className={styles.languageList}>
                      {Object.keys(languages).map(key => (
                        <p
                          onClick={() => switchLocale(key)}
                          className={locale === key ? 'active' : ''}
                          key={key}
                        >
                          {languages[key]}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </IntlContext.Consumer>
          </div>
          <div className={styles.main}>
            <div className={styles.glitch}>
              <div className={styles.glitchImg} />
              <div className={styles.glitchImg} />
              <div className={styles.glitchImg} />
              <div className={styles.glitchImg} />
              <div className={styles.glitchImg} />
            </div>
            <h1>WingRay Liao</h1>
            <p>
              <FormattedMessage id="home.frontEnd" defaultMessage="前端渣滓" />
              &nbsp;/&nbsp;
              <FormattedMessage
                id="home.photography"
                defaultMessage="摄影爱好者"
              />
              &nbsp;/&nbsp;
              <FormattedMessage id="home.swimfan" defaultMessage="游泳爱好者" />
            </p>
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
            <a href="javascript:;" title="rayliao1989@gmail.com">
              <i className="fa fa-envelope" />
            </a>
          </div>
        </div>
      </Common>
    )
  }
}
