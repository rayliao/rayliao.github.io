import * as React from 'react'
import Helmet from 'react-helmet'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '../../styles/normalize.css'

import { graphql, useStaticQuery } from 'gatsby'

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
  const title = `${data.site.siteMetadata.title}${props.name ? ` - ${props.name}` : ''}`
  return <>
    <Helmet defaultTitle={title}>
      <meta content={data.site.siteMetadata.description} name='description' />
    </Helmet>
    {props.children}
  </>
}