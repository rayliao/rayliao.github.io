import * as React from 'react'
import '../styles/global.css'
import '../styles/normalize.css'
import Seo from './seo'

export default ({ children }: any) => <>
    <Seo />
    {children}
</>