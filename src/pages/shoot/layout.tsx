import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from "react-helmet"

import '../../styles/normalize.css'
import './index.css'

export default ({ children }) => {
  return <>
    <Helmet defaultTitle="Photography">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <div className="sidebar">
      <h1 className="title">copyright© 2011-2018 RAYLIAO</h1>
      <div className="menu">
        <div><Link to="/2017">2017</Link></div>
        <div><Link to="/2016">2016</Link></div>
        <div><Link to="/undefined">undefined</Link></div>
        <div><Link to="/past">past</Link></div>
      </div>
      <div className="nav">
        <div><Link to="/">home</Link></div>
      </div>
    </div>
    <div className="content">
      {children}
    </div>
  </>
}