import React, { Fragment } from 'react'
import Lazyload from 'react-lazyload'
import ImgWithFallback from '../../components/ImgWithFallback'
import Layout from './layout'
import styles from './shoot.module.css'

const Index = () => {
  const images = [
    '0120',
    ['0210', '0225'],
    ['0226', '0227'],
    '0228',
    '0301',
    '0629',
    ['0630', '0910'],
    '1002',
    ['1003', '1110'],
    '1122',
    '1201',
    '1202',
    '1203',
    '1204',
    '1205',
    '1206',
  ]
  return (
    <Layout>
      {images.map((item, index) => {
        const single = typeof item === 'string'
        return (
          <Lazyload key={index} height={250}>
            <div className={`${styles.item} ${single ? '' : styles.unite}`}>
              {single ? (
                <ImgWithFallback
                  src={`../../images/2019/${item}.webp`}
                  fallback={`../../images/2019/${item}.jpg`}
                  alt={item.toString()}
                />
              ) : (
                (item as string[]).map((n, i) => (
                  <Fragment key={i}>
                    <ImgWithFallback
                      src={`../../images/2019/${n}.webp`}
                      fallback={`../../images/2019/${n}.jpg`}
                      alt={n}
                    />
                  </Fragment>
                ))
              )}
            </div>
          </Lazyload>
        )
      })}
      <p className={styles.tip}>
        *有些是他人所影，科哥/黄劲/夫人/年会酒店服务员/冲浪店店员
      </p>
    </Layout>
  )
}

export default Index
