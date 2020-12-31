import React, { Fragment } from 'react'
import Lazyload from 'react-lazyload'
import ImgWithFallback from '../../components/ImgWithFallback'
import Layout from './layout'
import styles from './shoot.module.css'

const Index = () => {
  const images = [
    '0203',
    '0204',
    ['0619', '0620'],
    '0621',
    '0622',
    '0623',
    '0624',
    '0625',
    '0626',
    '0627',
    '0628',
    '0629',
    '0630',
    '0802',
    '1003',
    '1101',
    ['1201', '1203'],
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
                  src={`../../images/2018/${item}.webp`}
                  fallback={`../../images/2018/${item}.jpg`}
                  alt={item.toString()}
                />
              ) : (
                (item as string[]).map((n, i) => (
                  <Fragment key={i}>
                    <ImgWithFallback
                      src={`../../images/2018/${n}.webp`}
                      fallback={`../../images/2018/${n}.jpg`}
                      alt={n}
                    />
                  </Fragment>
                ))
              )}
            </div>
          </Lazyload>
        )
      })}
    </Layout>
  )
}

export default Index
