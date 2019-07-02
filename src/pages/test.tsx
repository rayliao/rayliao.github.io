import { graphql } from 'gatsby'
import * as React from 'react'

const Test = ({ data }) => {
  // console.log(data)
  return <div>test</div>
}

export default Test

export const query = graphql`
  query ReposQuery {
    github {
      viewer {
        repositories(
          privacy: PUBLIC
          affiliations: OWNER
          isFork: false
          first: 100
        ) {
          nodes {
            name
            url
          }
        }
      }
    }
  }
`