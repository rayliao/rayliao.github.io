import { graphql } from 'gatsby'
import * as React from 'react'

const NoData = ({ data }) => {
  return (
    <section>
      <h1>This Page Was Created Programmatically</h1>
      <p>
        No data was required to create this page — it’s just a React component!
    </p>
    </section>
  )
}

export const query = graphql`
  query noData {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default NoData