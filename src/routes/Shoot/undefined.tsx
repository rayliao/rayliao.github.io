import React from 'react'
import Lazyload from 'react-lazyload'
import Layout from './layout'
import styles from './shoot.module.css'

function Undefined() {
  const list = Array.from(new Array(34).keys())
  return (
    <Layout>
      <div className={styles.phone}>
        {list.map((k) => (
          <Lazyload key={k} height={250}>
            <div>
              <img alt="" src={`../../images/undefined/${k + 1}.jpg`} />
            </div>
          </Lazyload>
        ))}
      </div>
    </Layout>
  )
}

export default Undefined
