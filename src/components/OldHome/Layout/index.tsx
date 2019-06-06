import * as React from 'react'
import Helmet from 'react-helmet'

import { graphql, useStaticQuery } from 'gatsby'
import './index.css'

export default ({ children }) => {
  const data = useStaticQuery(graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `)
  return <>
    <Helmet defaultTitle={data.site.siteMetadata.title}>
      <meta content={data.site.siteMetadata.description} name='description' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css' />
    </Helmet>
    {children}
  </>
}