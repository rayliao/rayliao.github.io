import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import Subway from './routes/Subway'
import { storage } from './utils'

export interface AppState {
  locale: string
  dark: boolean
  switchTheme: any
  switchLocale: any
}

export const Context = React.createContext<AppState | null>(null)

function App() {
  useEffect(() => {
    initLocale()
    initDark()
  })
  const initLocale = async () => {
    const itemLocale = await localStorage.getItem(storage.locale)
    setLocale(itemLocale ? itemLocale : locale)
  }
  const initDark = async () => {
    const itemDark = await localStorage.getItem(storage.dark)
    setDark(itemDark ? (itemDark === '1' ? true : false) : dark)
  }
  const switchTheme = () => {
    // TODO
  }
  const switchLocale = () => {
    // TODO
  }
  const [dark, setDark] = useState(true)
  const [locale, setLocale] = useState('en')
  return (
    <Context.Provider
      value={{
        locale,
        dark,
        switchTheme,
        switchLocale,
      }}
    >
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/subway" component={Subway} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}

export default App
