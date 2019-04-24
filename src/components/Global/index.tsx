import * as React from 'react'
import '../../styles/normalize.css'
import Seo from '../seo'

import './index.css'

interface GlobalProps {
  children?: React.ReactNode
}

export default class Global extends React.Component<GlobalProps, any> {
  render() {
    return <>
      <Seo />
      {this.props.children}
    </>
  }
}