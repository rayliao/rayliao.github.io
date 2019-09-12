import * as React from 'react'
import Common from '../../../components/Common'
import * as styles from './index.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <Common name="2019">
        <div className={`${styles.container}`}>
          <main>
            <div data-scroll>
              <div className={styles.frame}>
                <div className="frame__title-wrap">
                  <h1 className={styles.frame__title}>
                    Smooth scrolling and inner image animation
                  </h1>
                </div>
                <div className={styles.frame__links}>
                  <a href="https://tympanus.net/Development/DraggableMenu/">
                    Previous Demo
                  </a>
                  <a href="https://tympanus.net/codrops/?p=41030">Article</a>
                  <a href="https://github.com/codrops/SmoothScrollAnimations/">
                    GitHub
                  </a>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.item}>
                  <div className={styles.itemImgWrap}>
                    <div
                      className={`${styles.item__img} ${styles.itemImgT1}`}
                    />
                  </div>
                  <div className={styles.item__caption}>
                    <h2 className={styles.itemCaptionTitle}>Central view</h2>
                    <p className={styles.itemCaptionCopy}>
                      Great turbulent clouds emerged into consciousness
                      citizens.
                    </p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemImgWrap}>
                    <div
                      className={`${styles.item__img} ${styles.itemImgT2}`}
                    />
                  </div>
                  <div className={styles.item__caption}>
                    <h2 className={styles.itemCaptionTitle}>Lost in time</h2>
                    <p className={styles.itemCaptionCopy}>
                      Brain is the seed of intelligence the sky calls to us a
                      very small stage.
                    </p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemImgWrap}>
                    <div
                      className={`${styles.item__img} ${styles.itemImgT3}`}
                    />
                  </div>
                  <div className={styles.item__caption}>
                    <h2 className={styles.itemCaptionTitle}>Ready to land</h2>
                    <p className={styles.itemCaptionCopy}>
                      Cosmos encyclopaedia galactica a billion trillion culture
                      cosmic ocean.
                    </p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemImgWrap}>
                    <div
                      className={`${styles.item__img} ${styles.itemImgT1}`}
                    />
                  </div>
                  <div className={styles.item__caption}>
                    <h2 className={styles.itemCaptionTitle}>All equal</h2>
                    <p className={styles.itemCaptionCopy}>
                      Network of wormholes dream of the mind's eye finite but
                      unbounded concept.
                    </p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemImgWrap}>
                    <div
                      className={`${styles.item__img} ${styles.itemImgT2}`}
                    />
                  </div>
                  <div className={styles.item__caption}>
                    <h2 className={styles.itemCaptionTitle}>Connections</h2>
                    <p className={styles.itemCaptionCopy}>
                      Two ghostly white figures in coveralls and helmets are
                      softly dancing vastness.
                    </p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemImgWrap}>
                    <div
                      className={`${styles.item__img} ${styles.itemImgT3}`}
                    />
                  </div>
                  <div className={styles.item__caption}>
                    <h2 className={styles.itemCaptionTitle}>
                      The state of divergence
                    </h2>
                    <p className={styles.itemCaptionCopy}>
                      Vastness is bearable only through love invent the universe
                      vanquish.
                    </p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemImgWrap}>
                    <div
                      className={`${styles.item__img} ${styles.itemImgT1}`}
                    />
                  </div>
                  <div className={styles.item__caption}>
                    <h2 className={styles.itemCaptionTitle}>
                      Open perspective
                    </h2>
                    <p className={styles.itemCaptionCopy}>
                      The only home we've ever known concept of the number one.
                    </p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemImgWrap}>
                    <div
                      className={`${styles.item__img} ${styles.itemImgT3}`}
                    />
                  </div>
                  <div className={styles.item__caption}>
                    <h2 className={styles.itemCaptionTitle}>
                      Discovery of shapes
                    </h2>
                    <p className={styles.itemCaptionCopy}>
                      Decipherment explorations tesseract as a patch of light.
                    </p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemImgWrap}>
                    <div
                      className={`${styles.item__img} ${styles.itemImgT2}`}
                    />
                  </div>
                  <div className={styles.item__caption}>
                    <h2 className={styles.itemCaptionTitle}>The Observer</h2>
                    <p className={styles.itemCaptionCopy}>
                      Astonishment muse about dispassionate extraterrestrial
                      observer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Common>
    )
  }
}
