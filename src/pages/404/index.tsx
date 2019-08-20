import { Link } from 'gatsby'
import * as React from 'react'
import Common from '../../components/Common'
import * as styles from './index.module.css'

export default class NotFound extends React.Component {
  render() {
    return <Common name='404'>
      <div className={styles.content}>
        <Link to='/'>click me, go home</Link>
      </div>
    </Common>
  }
}