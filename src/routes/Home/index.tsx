import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { languages } from '../../lang'
import { AppState, Context as IntlContext } from '../App'
import styles from './index.module.css'

function Home() {
  return (
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
            <Link to="/shoot/2019">
              <FormattedMessage id="home.image" defaultMessage="摄影" />
            </Link>
            <Link to="/about">
              <FormattedMessage id="home.about" defaultMessage="关于我" />
            </Link>
          </nav>
        </div>
        <IntlContext.Consumer>
          {(state: AppState | null) =>
            state ? (
              <div className={styles.headerRight}>
                <div onClick={state.switchTheme} className={styles.theme}>
                  {state.dark ? (
                    <i className="fa fa-sun-o" />
                  ) : (
                    <i className="fa fa-moon-o" />
                  )}
                </div>
                <div className={styles.language}>
                  <i className={`fa fa-language ${styles.languageIcon}`} />
                  <div className={styles.languageList}>
                    {Object.keys(languages).map((key) => (
                      <p
                        onClick={() => state.switchLocale(key)}
                        className={state.locale === key ? 'active' : ''}
                        key={key}
                      >
                        {languages[key]}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : null
          }
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
          <FormattedMessage id="home.photography" defaultMessage="摄影爱好者" />
          &nbsp;/&nbsp;
          <FormattedMessage id="home.swimfan" defaultMessage="游泳爱好者" />
        </p>
      </div>
      <div className={styles.belong}>
        <svg className={styles.belongSvg}>
          <defs>
            <path id="textPath" d="m61,149.99998a89,89 0 1 1 0,0.00004" />
          </defs>
          <text className={styles.circleText}>
            <textPath xlinkHref="#textPath">{`24°01'50.4"N  116°28'40.6"E`}</textPath>
          </text>
        </svg>
        <i className={`fa fa-map-marker ${styles.belongIcon}`} />
      </div>
      <div className={styles.sns}>
        <a
          href="https://github.com/rayliao"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          <i className="fa fa-github" />
        </a>
        <a
          href="https://instagram.com/wingrayliao/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
        >
          <i className="fa fa-instagram" />
        </a>
        <a
          href="https://www.facebook.com/wingrayliao"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook"
        >
          <i className="fa fa-facebook-square" />
        </a>
        <a
          href="http://weibo.com/574954033"
          target="_blank"
          rel="noopener noreferrer"
          title="weibo"
        >
          <i className="fa fa-weibo" />
        </a>
        <span title="rayliao1989@gmail.com">
          <i className="fa fa-envelope" />
        </span>
      </div>
    </div>
  )
}

export default Home
