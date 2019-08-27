import { graphql, useStaticQuery } from 'gatsby'
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

export default (props: CommonProps) => {
  const data = useStaticQuery(graphql`
    query CommonQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const title = `${data.site.siteMetadata.title}${
    props.name ? ` - ${props.name}` : ''
    }`
  const lang = 'en'
  return (
    <IntlProvider locale={lang} messages={translatedMessages[lang]}>
      <Helmet defaultTitle={title}>
        <html lang={lang} />
        <meta content={data.site.siteMetadata.description} name='description' />
      </Helmet>
      {props.children}
    </IntlProvider>
  )
}
