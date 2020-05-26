import React, { Fragment } from 'react'
import Lazyload from 'react-lazyload'
import ImgWithFallback from '../../components/ImgWithFallback'
import Layout from './layout'
import styles from './shoot.module.css'

const Index = () => {
  const images = [
    '0401',
    '0402',
    '0403',
    '0405',
    '0406',
    '0407',
    '0801',
    '0802',
    ['0404', '0901'],
    '1000',
    '1001',
    '1002',
    '1004',
    '1005',
    '1006',
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
                  src={`../../images/2016/${item}.webp`}
                  fallback={`../../images/2016/${item}.jpg`}
                  alt={item.toString()}
                />
              ) : (
                (item as string[]).map((n, i) => (
                  <Fragment key={i}>
                    <ImgWithFallback
                      src={`../../images/2016/${n}.webp`}
                      fallback={`../../images/2016/${n}.jpg`}
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
