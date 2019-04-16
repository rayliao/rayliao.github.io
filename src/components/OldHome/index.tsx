import { Link } from 'gatsby'
import * as React from 'react'
import Global from '../global'
import './index.css'

export default class OldHome extends React.Component {
  render() {
    return <Global>
      <div className="contaomer">
        <div className="deco" aria-hidden="true">Ray</div>
        <nav className="nav">
          <Link to="/blog">BLOG</Link>
          <Link to="/shoot/undefined">PHOTOGRAPHY</Link>
        </nav>
        <h1>WingRay Liao</h1>
      </div>
    </Global>
  }
}