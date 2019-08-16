import * as React from 'react'
import Common from '../../components/Common'
import * as styles from './index.module.css'

interface IndexState {
  current: number
}

class Index extends React.Component<any, IndexState> {
  shuffleList
  max = 4
  constructor(props) {
    super(props)
    const list = Array.from(new Array(this.max + 1).keys())
    this.shuffleList = list.sort(() => .5 - Math.random())
  }
  state: IndexState = {
    current: 0
  }
  switch = () => {
    const { current } = this.state
    this.setState({ current: current === this.max ? 0 : current + 1 })
  }
  render() {
    if (!this.shuffleList) {
      return null
    }
    const { current } = this.state
    return <Common name='family'>
      <div className={styles.content}>
        <img className={styles.img} onClick={this.switch} src={`../../images/family/${this.shuffleList[current]}.jpg`} />
      </div>
    </Common>
  }
}

export default Index