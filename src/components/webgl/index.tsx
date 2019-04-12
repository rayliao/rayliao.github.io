import * as React from 'react'
import * as THREE from 'three'
import InteractiveControls from './InteractiveControls'
import Particles from './Particles'

class WebGLView extends React.Component {
  mount: any
  frameId: any
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  cube: THREE.Mesh
  clock: THREE.Clock
  interactive: InteractiveControls
  particles: Particles
  samples = [
    'images/sample-01.png',
    'images/sample-02.png',
    'images/sample-03.png',
    'images/sample-04.png',
    'images/sample-05.png',
  ]
  componentDidMount() {
    const witdh = window.innerWidth
    const height = window.innerHeight
    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(50, witdh / height, 1, 10000)
    this.camera.position.z = 300

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setClearColor('#000')
    this.renderer.setSize(witdh, height)
    this.mount.appendChild(this.renderer.domElement)

    const geometry = new THREE.BoxGeometry(10, 10, 10)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)

    this.clock = new THREE.Clock(true)
    this.interactive = new InteractiveControls(this.camera, this.renderer.domElement)
    this.particles = new Particles(this)
    this.start()

    // const rnd = ~~(Math.random() * this.samples.length)
  }
  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  animate = () => {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        ref={mount => this.mount = mount} />
    )
  }
}

export default WebGLView