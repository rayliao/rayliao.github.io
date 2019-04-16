import * as React from 'react'
import Helmet from "react-helmet"

export default ({ children }) => {
  return <>
    <Helmet defaultTitle="Photography">
      <meta name="viewport" content="" />
    </Helmet>
    {children}
  </>
}