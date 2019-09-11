import * as React from 'react'
import Common from '../../../components/Common'
import * as styles from './index.module.css'

export default class Index extends React.Component {
  render() {
    return (
      <Common name="2019">
        <div className={`${styles.container} ${styles.loading}`} />
      </Common>
    )
  }
}
