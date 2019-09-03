import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { IntlProvider } from 'react-intl'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { translatedMessages } from '../../lang'
import '../../styles/normalize.css'
import '../../styles/index.css'

interface CommonProps {
  children?: React.ReactNode
  name?: string
}
export interface CommonState {
  locale: string
  dark: boolean
  switchTheme: any
  switchLocale: any
}

export const Context = React.createContext(null)

export const commonQuery = graphql`
  query CommonQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default class Common extends React.Component<CommonProps, CommonState> {
  transition = false
  constructor(props) {
    super(props)
  }
  /**
   * 切换多语言
   * @memberof Common
   */
  switchLocale = locale => {
    this.setState({ locale })
  }
  /**
   * 切换主题
   * @memberof Common
   */
  switchTheme = () => {
    this.transition = true
    this.setState({ dark: !this.state.dark })
    setTimeout(() => (this.transition = false), 1000)
  }
  state = {
    locale: 'en',
    dark: true,
    switchLocale: this.switchLocale,
    switchTheme: this.switchTheme,
  }
  render() {
    const { name } = this.props
    const { locale, dark } = this.state
    return (
      <Context.Provider value={this.state}>
        <IntlProvider locale={locale} messages={translatedMessages[locale]}>
          <StaticQuery
            query={commonQuery}
            render={data => {
              const title = `${data.site.siteMetadata.title}${
                name ? ` - ${name}` : ''
              }`
              return (
                <React.Fragment>
                  <Helmet defaultTitle={title}>
                    <html
                      className={
                        this.transition ? 'color-theme-in-transition' : ''
                      }
                      lang={locale}
                      data-theme={dark ? 'dark' : 'light'}
                    />
                    <meta
                      content={data.site.siteMetadata.description}
                      name="description"
                    />
                  </Helmet>
                  {this.props.children}
                </React.Fragment>
              )
            }}
          />
        </IntlProvider>
      </Context.Provider>
    )
  }
}
