import React from 'react'
import Helmet from 'react-helmet'
import Lazyload from 'react-lazyload'
import { Link } from 'react-router-dom'
import { canUseWebp } from '../../utils'
import styles from './index.module.css'

const Li = () => {
  const fm = canUseWebp() ? 'webp' : 'jpg'
  window.location.hash = window.decodeURIComponent(window.location.hash)
  const scrollToAnchor = () => {
    const hashParts = window.location.hash.split('#')
    if (hashParts.length > 2) {
      const hash = hashParts.slice(-1)[0]
      const idEle = document.querySelector(`#${hash}`)
      if (idEle) {
        idEle.scrollIntoView()
      }
    }
  }
  scrollToAnchor()
  window.onhashchange = scrollToAnchor
  const shuffleList = [1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14].reverse()
  // const [shuffleList, setShuffleList] = useState<number[]>([])
  // const max = 25
  // useEffect(() => {
  //   const list = Array.from(new Array(max + 1).keys())
  //   // setShuffleList(list.sort(() => 0.5 - Math.random()))
  //   setShuffleList(list.reverse())
  // }, [])
  return shuffleList ? (
    <div className={styles.container}>
      <Helmet title="Li" />
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          {shuffleList.map((item, index) => (
            <Lazyload key={index} once>
              <Link to={`/li#image-${index}`}>
                <img
                  className={styles.navImg}
                  src={`../../images/li/${item}.${fm}`}
                  alt={`img${item}`}
                />
              </Link>
            </Lazyload>
          ))}
        </nav>
        <div className={styles.gallery}>
          {shuffleList.map((item, index) => (
            <Lazyload key={index} once>
              <img
                className={styles.galleryImg}
                id={`image-${index}`}
                src={`../../images/li/${item}.${fm}`}
                alt={`img${item}`}
              />
            </Lazyload>
          ))}
        </div>
      </div>
    </div>
  ) : null
}

export default Li
