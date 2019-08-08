import * as React from 'react'
import * as styles from './index.module.css'

export default class Index extends React.Component {
  render() {
    return <div className={styles.main}><iframe
      src='https://m.douban.com/people/52842379/subject_profile?dt_dapp=1'
      width='100%'
      height='100%'
      frameBorder='0' />
    </div>
  }
}