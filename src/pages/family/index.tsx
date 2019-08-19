import * as React from 'react'
import Slider from 'react-slick'
import Common from '../../components/Common'
import * as styles from './index.module.css'

interface IndexState { }

class Index extends React.Component<any, IndexState> {
  shuffleList
  max = 4
  constructor(props) {
    super(props)
    const list = Array.from(new Array(this.max + 1).keys())
    this.shuffleList = list.sort(() => .5 - Math.random())
  }
  slider: Slider
  render() {
    if (!this.shuffleList) {
      return null
    }
    const settings = {
      infinite: true,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    }
    return <Common name='family'>
      <div className={styles.container} onClick={() => this.slider.slickNext()}>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {
            this.shuffleList.map(index => {
              return <div key={index} className={styles.item}>
                <img className={styles.img} src={`../../images/family/${index}.jpg`} />
              </div>
            })
          }
        </Slider>
      </div>
    </Common>
  }
}

export default Index