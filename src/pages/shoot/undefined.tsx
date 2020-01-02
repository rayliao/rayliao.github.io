import * as React from 'react'
import Lazyload from 'react-lazyload'
import Layout from './layout'
import * as styles from './shoot.module.css'

export default class Undefined extends React.Component {
  render() {
    const list = Array.from(new Array(34).keys())
    return (
      <Layout name="undefined">
        <div className={styles.phone}>
          {list.map(k => (
            <Lazyload key={k} height={250}>
              <div>
                <img src={`../../images/undefined/${k + 1}.jpg`} />
              </div>
            </Lazyload>
          ))}
        </div>
      </Layout>
    )
  }
}
