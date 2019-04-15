import ControlKit from '@brunoimbrizi/controlkit'
import Stats from 'stats.js'
import WebGLView from '../webgl'

export default class GUIView {
  webgl: WebGLView
  particlesHitArea = false
  particlesRandom = 2
  particlesDepth = 4
  particlesSize = 1.5
  touchRadius = 0.15
  range = [0, 1]
  rangeRandom = [1, 10]
  rangeSize = [0, 3]
  rangeDepth = [1, 10]
  rangeRadius = [0, 0.5]
  controlKit: ControlKit
  touchCanvas: any
  touchCtx: any
  stats: Stats

  constructor(webgl) {
    this.webgl = webgl
    this.initControlKit()
    // this.initStats();

    // this.disable();
  }

  initControlKit() {
    this.controlKit = new ControlKit()
    this.controlKit.addPanel({ width: 300, enable: false })

      .addGroup({ label: 'Touch', enable: true })
      .addCanvas({ label: 'trail', height: 64 })
      .addSlider(this, 'touchRadius', 'rangeRadius', { label: 'radius', onChange: this.onTouchChange.bind(this) })

      .addGroup({ label: 'Particles', enable: true })
      // .addCheckbox(this, 'particlesHitArea', { label: 'hit area', onChange: this.onParticlesChange.bind(this) })
      .addSlider(this, 'particlesRandom', 'rangeRandom', { label: 'random', onChange: this.onParticlesChange.bind(this) })
      .addSlider(this, 'particlesDepth', 'rangeDepth', { label: 'depth', onChange: this.onParticlesChange.bind(this) })
      .addSlider(this, 'particlesSize', 'rangeSize', { label: 'size', onChange: this.onParticlesChange.bind(this) })

    // store reference to canvas
    const component = this.controlKit.getComponentBy({ label: 'trail' })
    if (!component) { return }

    this.touchCanvas = component._canvas
    this.touchCtx = this.touchCanvas.getContext('2d')
  }

  initStats() {
    this.stats = new Stats()

    document.body.appendChild(this.stats.dom)
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update() {
    // draw touch texture
    if (this.touchCanvas) {
      if (!this.webgl) { return }
      if (!this.webgl.particles) { return }
      if (!this.webgl.particles.touch) { return }
      const source = this.webgl.particles.touch.canvas
      const x = Math.floor((this.touchCanvas.width - source.width) * 0.5)
      this.touchCtx.fillRect(0, 0, this.touchCanvas.width, this.touchCanvas.height)
      this.touchCtx.drawImage(source, x, 0)
    }
  }

  enable() {
    this.controlKit.enable()
    if (this.stats) { this.stats.dom.style.display = '' }
  }

  disable() {
    this.controlKit.disable()
    if (this.stats) { this.stats.dom.style.display = 'none' }
  }

  toggle() {
    if (this.controlKit._enabled) { this.disable() }
    else { this.enable() }
  }

  onTouchChange() {
    if (!this.webgl) { return }
    if (!this.webgl.particles) { return }

    this.webgl.particles.touch.radius = this.touchRadius
  }

  onParticlesChange() {
    if (!this.webgl) { return }
    if (!this.webgl.particles) { return }

    this.webgl.particles.object3D.material.uniforms.uRandom.value = this.particlesRandom
    this.webgl.particles.object3D.material.uniforms.uDepth.value = this.particlesDepth
    this.webgl.particles.object3D.material.uniforms.uSize.value = this.particlesSize

    this.webgl.particles.hitArea.material.visible = this.particlesHitArea
  }
}
