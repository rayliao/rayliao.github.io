import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import * as styles from './past.module.css'

export default class Past extends React.Component {
  render() {
    return <div>
      <Helmet defaultTitle='Photography' />
      <div className={styles.main}>
        <div className={styles.header}>
          <h2><Link to='/'>copyright© 2011-2016 WINGRAY LIAO, all rights reserved.</Link></h2>
          <div className={styles.line}>/</div>
          <div className={styles.right}>
            <h1><Link to='/shoot/2016'>WingRay Liao Photopraphy</Link></h1>
            <div className={styles.nav}>
              <Link to='/'>home</Link><span>/</span>
              <a href='/blog' target='_blank' rel='noopener'>blog</a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.entry}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>October 2015<br />Sihanoukville Cambodia</h3>
              <p>与同事，在Sokha酒店的沙滩</p>
              <p>天气很好，人少海水很清澈，我们在玩沙，戏水，游泳，乐此不彼</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201510.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>October 2015<br />Sihanoukville Cambodia</h3>
                  <p>与同事，在Sokha酒店的沙滩</p>
                  <p>天气很好，人少海水很清澈，我们在玩沙，戏水，游泳，乐此不彼</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.entry} ${styles.rev}`}>
            <div className={styles.pic}>
              <img src='../../images/albums/201507.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>July 2015<br />Yangshuo Guilin Guangxi</h3>
              <p>与同事，在桂林和阳朔旅游</p>
              <p>旧地重游，一别四年，别有一番思绪</p>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.pic}>
              <img src='../../images/albums/201506.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>June 2015<br />Shenzhen Guangdong</h3>
              <p>在深圳参加莲姐的婚礼</p>
              <p>幸福，且特别的婚礼，见了一些同学，聊了一下往事</p>
            </div>
          </div>
          <div className={`${styles.entry} ${styles.rev}`}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>March 2015<br />Zengcheng Guangzhou</h3>
              <p>与同事，在增城白水寨游玩</p>
              <p>爬了好多阶梯，烧烤和偷摘木瓜都很兴奋，第二天开车上山下山绕公园</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201503.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>March 2015<br />Zengcheng Guangzhou</h3>
                  <p>与同事，在增城白水寨游玩</p>
                  <p>爬了好多阶梯，烧烤和偷摘木瓜都很兴奋，第二天开车上山下山绕公园</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>October 2014<br />Zoo Guangzhou Guangdong</h3>
              <p>在动物园散步才是正经事</p>
              <p>第一次去动物园，以一个孩童心</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201411.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>October 2014<br />Zoo Guangzhou Guangdong</h3>
                  <p>在动物园散步才是正经事</p>
                  <p>第一次去动物园，以一个孩童心</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.entry} ${styles.rev}`}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>October 2014<br />Huizhou Guangdong</h3>
              <p>参加郝鹏的婚礼</p>
              <p>应该是来到这个公司第一次与同事外出游玩，于乡野间嬉戏，泡了温泉，玩了大喇叭</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201410.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>October 2014<br />Huizhou Guangdong</h3>
                  <p>参加郝鹏的婚礼</p>
                  <p>应该是来到这个公司第一次与同事外出游玩，于乡野间嬉戏，泡了温泉，玩了大喇叭</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.pic}>
              <img src='../../images/albums/201408.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>August 2014<br />Wuchuan Zanjiang Guangdong</h3>
              <p>参加冠勇的婚礼</p>
              <p>看了海，体验了粤东的婚俗</p>
            </div>
          </div>
          <div className={`${styles.entry} ${styles.rev}`}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>July 2014<br />Wudang Mountains Hubei</h3>
              <p>与研究所的同事出差且游玩</p>
              <p>第一次越过秦岭线，进入北方的中原地带，逛了古时兵家之争的襄阳，上了一回武当山</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201407.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>July 2014<br />Wudang Mountains Hubei</h3>
                  <p>与研究所的同事出差且游玩</p>
                  <p>第一次越过秦岭线，进入北方的中原地带，逛了古时兵家之争的襄阳，上了一回武当山</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.pic}>
              <img src='../../images/albums/201405.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>May 2014<br />Macau China</h3>
              <p>和黄欢，以及刘莉的同学逛澳门景点</p>
              <p>在大三巴周围走了好多路，到过十月初五街的南屏雅叙，感受了西洋坟场的寂静</p>
            </div>
          </div>
          <div className={`${styles.entry} ${styles.rev}`}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>May 2014<br />Zhuhai Guangdong</h3>
              <p>与李愿同学会晤</p>
              <p>首次来到珠海，在李愿同学的热切招待下，吃了海鲜寿司，进了“圆明园”，在板障山上远眺澳门</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/20140501.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>May 2014<br />Zhuhai Guangdong</h3>
                  <p>与李愿同学会晤</p>
                  <p>首次来到珠海，在李愿同学的热切招待下，吃了海鲜寿司，进了“圆明园”，在板障山上远眺澳门</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.pic}>
              <img src='../../images/albums/201404.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>April 2015<br />HongKong China</h3>
              <p>香港是个大商场</p>
              <p>在沙田，油尖旺，中环和铜锣湾，熙熙攘攘的人群中穿梭</p>
            </div>
          </div>
          <div className={`${styles.entry} ${styles.rev}`}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>January 2014<br />Shantou Guangdong</h3>
              <p>参加红叶同学的婚礼</p>
              <p>上次来，应该是少年时期，汕头的美食让人来几次都不嫌多</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201401.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>January 2014<br />Shantou Guangdong</h3>
                  <p>参加红叶同学的婚礼</p>
                  <p>上次来，应该是少年时期，汕头的美食让人来几次都不嫌多</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>August 2013<br />Dinghu Mountain Zhaoqing</h3>
              <p>山清水秀，空气宜人</p>
              <p>PS里面的取色器都取不出来这各种不同的绿，溪水清澈见底，光着脚丫踩进去，一解爬山的闷热</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201308.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>August 2013<br />Dinghu Mountain Zhaoqing</h3>
                  <p>山清水秀，空气宜人</p>
                  <p>PS里面的取色器都取不出来这各种不同的绿，溪水清澈见底，光着脚丫踩进去，一解爬山的闷热</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.entry} ${styles.rev}`}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>May 2013<br />Yuexiu&Liwan Guangzhou</h3>
              <p>拍照爱好者广州一日游</p>
              <p>和小伙伴说说笑笑，拍下广州的街头和欢乐瞬间，最是快乐</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201305.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>May 2013<br />Yuexiu&Liwan Guangzhou</h3>
                  <p>拍照爱好者广州一日游</p>
                  <p>和小伙伴说说笑笑，拍下广州的街头和欢乐瞬间，最是快乐</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.pic}>
              <img src='../../images/albums/201302.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>February 2013<br />Guangzhou</h3>
              <p>人像摄影练习日</p>
              <p>在东湖公园，丹妮是一个很好的拍照练习对象</p>
            </div>
          </div>
          <div className={`${styles.entry} ${styles.rev}`}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>January 2013<br />Meizhou Guangdong</h3>
              <p>带表弟表妹去沙滩玩</p>
              <p>过年在家，正天气晴朗，闲来无事，跑去沙滩玩，拍照</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201301.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>January 2013<br />Meizhou Guangdong</h3>
                  <p>带表弟表妹去沙滩玩</p>
                  <p>过年在家，正天气晴朗，闲来无事，跑去沙滩玩，拍照</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.pic}>
              <img src='../../images/albums/201212.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>December 2012<br />Guangzhou</h3>
              <p>跟老刘，小彬和关羽聚餐</p>
              <p>然后在珠江边上闲逛，那天初识的情侣如今也各自各顾各的努力生活着</p>
            </div>
          </div>
          <div className={`${styles.entry} ${styles.rev}`}>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>November 2012<br />Chancheng Foshan</h3>
              <p>在印象城吃寿司，田兴琅要回江苏</p>
              <p>胖子后来也回了江苏，我也离开了佛山，分离了就不知道什么时候能再见上，或许余生再也见不上</p>
            </div>
            <div className={styles.pic}>
              <img src='../../images/albums/201211.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoWhite}`}>
              <div className={styles.infoClip}>
                <div className={styles.infoInr}>
                  <h3>November 2012<br />Chancheng Foshan</h3>
                  <p>在印象城吃寿司，田兴琅要回江苏</p>
                  <p>胖子后来也回了江苏，我也离开了佛山，分离了就不知道什么时候能再见上，或许余生再也见不上</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.pic}>
              <img src='../../images/albums/201210.jpeg' />
            </div>
            <div className={`${styles.info} ${styles.infoBlack}`}>
              <h3>October 2012<br />Ikea Guangzhou</h3>
              <p>和俊宙，丹妮逛宜家</p>
              <p>逛了一次宜家，就喜欢上了宜家，有些我就会喜欢上，像拍照，像你</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}