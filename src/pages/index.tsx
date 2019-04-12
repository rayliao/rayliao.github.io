import * as React from 'react'
import Global from '../components/global'
import WelGLView from '../components/webgl'
import './index.css'

const Index = () =>
  <Global>
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      color: '#fff'
    }}>Hello world!</div>
    <div
      className="container"
    >
      <WelGLView />
    </div>
  </Global>

export default Index