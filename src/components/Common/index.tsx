import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { IntlProvider } from 'react-intl'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { translatedMessages } from '../../lang'
import '../../styles/normalize.css'

interface CommonProps {
  children?: React.ReactNode
  name?: string
}
export interface CommonState {
  locale: string
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
  constructor(props) {
    super(props)
  }
  /**
   * 切换多语言
   * @memberof Common
   */
  switchLocale = locale => { this.setState({ locale }) }
  state = {
    locale: 'en',
    switchLocale: this.switchLocale
  }
  render() {
    const { name } = this.props
    const { locale } = this.state
    return (
      <Context.Provider value={this.state}>
        <IntlProvider locale={locale} messages={translatedMessages[locale]}>
          <StaticQuery
            query={commonQuery}
            render={data => {
              const title = `${data.site.siteMetadata.title}${
                name ? ` - ${name}` : ''
                }`
              return <React.Fragment>
                <Helmet defaultTitle={title}>
                  <html lang={locale} />
                  <meta content={data.site.siteMetadata.description} name='description' />
                </Helmet>
                {this.props.children}
              </React.Fragment>
            }}
          />
        </IntlProvider>
      </Context.Provider>
    )
  }
}
