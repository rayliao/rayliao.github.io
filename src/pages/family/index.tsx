import * as React from 'react'

interface IndexState {
  num: number
}

class Index extends React.Component<any, IndexState> {
  state: {
    num: 1
  }
  switch = () => {
    this.setState({ num: 2 })
  }
  render() {
    const { num } = this.state
    return <div><img style={{ width: 500 }} src={`../../images/family/${num}.jpg`} /></div>
  }
}

export default Index