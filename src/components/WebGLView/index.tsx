import * as THREE from 'three'
import InteractiveControls from './InteractiveControls'
import Particles from './Particles'

export default class WebGLView {
  mount: any
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  clock: THREE.Clock
  interactive: InteractiveControls
  particles: Particles
  currSample: any = null
  fovHeight: any
  samples = [
    'images/sample-02.png',
    'images/sample-04.png',
    'images/sample-05.png',
  ]
  constructor() {
    this.initThree()
    this.initParticles()
    this.initControls()

    const rnd = ~~(Math.random() * this.samples.length)
    this.goto(rnd)
  }

  initThree() {
    const witdh = window.innerWidth
    const height = window.innerHeight

    // scene
    this.scene = new THREE.Scene()

    // camera
    this.camera = new THREE.PerspectiveCamera(50, witdh / height, 1, 10000)
    this.camera.position.z = 300

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    // clock
    this.clock = new THREE.Clock(true)
  }

  initControls() {
    this.interactive = new InteractiveControls(this.camera, this.renderer.domElement)
  }

  initParticles() {
    this.particles = new Particles(this)
    this.scene.add(this.particles.container)
  }

  update() {
    const delta = this.clock.getDelta()

    if (this.particles) { this.particles.update(delta) }
  }

  draw() {
    this.renderer.render(this.scene, this.camera)
  }

  goto(index) {
    // init next
    if (this.currSample == null) {
      this.particles.init(this.samples[index])
    }
    // hide curr then init next
    else {
      this.particles.hide(true).then(() => {
        this.particles.init(this.samples[index])
      })
    }

    this.currSample = index
  }

  next() {
    if (this.currSample < this.samples.length - 1) { this.goto(this.currSample + 1) }
    else { this.goto(0) }
  }

  resize() {
    if (!this.renderer) { return }
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()

    this.fovHeight = 2 * Math.tan((this.camera.fov * Math.PI) / 180 / 2) * this.camera.position.z

    this.renderer.setSize(window.innerWidth, window.innerHeight)

    if (this.interactive) { this.interactive.resize() }
    if (this.particles) { this.particles.resize() }
  }
}