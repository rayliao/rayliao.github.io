import React from 'react'
import Helmet from 'react-helmet'

function About() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Helmet>
        <title>关于我</title>
      </Helmet>
      <iframe
        title="about"
        src="https://m.douban.com/people/52842379/subject_profile?dt_dapp=1"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  )
}

export default About
