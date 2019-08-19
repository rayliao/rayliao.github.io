import * as React from 'react'
import Slider from 'react-slick'
import Common from '../../../components/Common'
import * as styles from './index.module.css'

interface IndexState { }

class Index extends React.Component<any, IndexState> {
  title = [
    '2019年，輕度發燒的你，軟弱可憐得像個小孩，平時都是你在照顧我，我不會照顧人，以致於粥都煮糊了。',
    '2019年，所有東西從星河灣搬過來洛濤居，臨近春節，正式入住。',
    '2019年，在洛溪租了房子剛剛搬過去，你像個小孩一樣賴皮地一回到家就癱在地上不肯起來。',
    '2018，花蓮的海，迄今為止和你待過最好看的地方。',
    '2018，太魯閣，只記得那次的行程很熱，但一行人走著棧道還是有趣的，你這怕曬的傢伙，圍了頭巾覺得有趣就摁下了快門。',
    '2018，广州。奶奶生日，相比帮你摆拍美美的照片，我更喜欢记录你各种各样的表情状态。',
    '2018，廣州。',
    '2018，去大夫山的路上。拍個婚紗照真是累，在這個過程中，各自賭氣過，爭吵過，我們一致的共識是都不喜歡此次的拍攝結婚，但我們看中的都是過程，以後回憶起來，我們能記得我們曾去拍攝過婚紗照這就夠了，反正往後你的美麗我都會幫你記錄',
    '2018，廣州',
    '2018，香港。我知道你內心還是希望有個大鑽戒，而我卻只能盡我所能的給你最好的，你卻很體貼的選了足夠小的。望有天我可以暴富，給予你最好的。',
    '2018，白雲山頂。曾與你嘗試不同的事情。',
    '2018，廣州。我生日那天，多謝你那有心的兌換券。',
    '2018，台北夜市。最得意的你。',
    '2018，九份',
    '2018，台灣平溪線',
    '2018，九份',
    '2018，台北跳蚤市場',
    '2018，花蓮',
    '2018，九份。這裡的感覺很特別',
    '2018，台北車站',
    '2018，珠海城軌',
    '2004年，老家韓江',
  ]
  shuffleList
  max = 21
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
    return <Common name='lover'>
      <div className={styles.container} onClick={() => this.slider.slickNext()}>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {
            this.shuffleList.map(index => {
              return <div key={index} className={styles.item}>
                <img className={styles.img} src={`../../../images/lover/${index}.jpg`} />
                <p className={styles.title}>{this.title[index]}</p>
              </div>
            })
          }
        </Slider>
      </div>
    </Common>
  }
}

export default Index