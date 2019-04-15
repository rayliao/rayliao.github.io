import * as React from 'react'
import Global from '../components/global'
import GUIView from '../components/gui'
import WelGLView from '../components/webgl'
import './index.css'

export default class Index extends React.Component {
  mount: any
  webgl: WelGLView
  gui: GUIView
  handlerAnimate: any
  raf: any
  componentDidMount() {
    this.initWebGL()
    this.initGUI()
    this.addListeners()
    this.animate()
    this.resize()
  }
  initWebGL() {
    this.webgl = new WelGLView()
    this.mount.appendChild(this.webgl.renderer.domElement)
  }

  initGUI() {
    this.gui = new GUIView(this)
  }

  addListeners() {
    this.handlerAnimate = this.animate.bind(this)

    window.addEventListener('resize', this.resize.bind(this))
    window.addEventListener('keyup', this.keyup.bind(this))

    const el = this.webgl.renderer.domElement
    el.addEventListener('click', this.click.bind(this))
  }
  animate() {
    this.update()
    this.draw()

    this.raf = requestAnimationFrame(this.handlerAnimate)
  }

  update() {
    if (this.gui.stats) { this.gui.stats.begin() }
    if (this.webgl) { this.webgl.update() }
    if (this.gui) { this.gui.update() }
  }

  draw() {
    if (this.webgl) { this.webgl.draw() }
    if (this.gui.stats) { this.gui.stats.end() }
  }

  resize() {
    if (this.webgl) { this.webgl.resize() }
  }

  keyup(e) {
    // g
    if (e.keyCode === 71) { if (this.gui) { this.gui.toggle() } }
  }

  click(e) {
    this.webgl.next()
  }
  render() {
    return <Global>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        color: '#fff'
      }}>Hello world!</div>
      <div
        className="container"
        ref={mount => this.mount = mount}
      />
    </Global>
  }
}