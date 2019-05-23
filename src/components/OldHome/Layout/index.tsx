import * as React from 'react'
import Helmet from 'react-helmet'

import './index.css'

interface LayoutProps {
  children?: React.ReactNode
}

export default class Layout extends React.Component<LayoutProps, any> {
  render() {
    return <>
      <Helmet defaultTitle='RayLiao'>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css' />
      </Helmet>
      {this.props.children}
    </>
  }
}