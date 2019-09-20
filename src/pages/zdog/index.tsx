import * as React from 'react'
import Common from '../../components/Common'
import * as zdog from 'zdog'

export default class Index extends React.Component {
  componentDidMount() {
    const illo = new zdog.Illustration({
      element: '.main',
    })

    new zdog.Ellipse({
      addTo: illo,
      diameter: 80,
      stroke: 20,
      color: '#636',
    })

    illo.updateRenderGraph()
  }
  render() {
    return (
      <Common name="zdog">
        <canvas className="main" width="240" height="240" />
      </Common>
    )
  }
}
