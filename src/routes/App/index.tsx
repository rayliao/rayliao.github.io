import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { IntlProvider } from 'react-intl'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { translatedMessages } from '../../lang'
import { storage } from '../../utils'
import Alice2018 from '../Alice/2018'
import Lover from '../Alice/Lover'
import Home from '../Home'
import NotFound from '../NotFound'
import Subway from '../Subway'

export interface AppState {
  locale: string
  dark: boolean
  switchTheme: any
  switchLocale: any
}

export const Context = React.createContext<AppState | null>(null)

function App() {
  let transition = false
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
    transition = true
    setDark(!dark)
    localStorage.setItem(storage.dark, !dark ? '1' : '0')
    setTimeout(() => (transition = false), 1000)
  }
  const switchLocale = (l: string) => {
    setLocale(l)
    localStorage.setItem(storage.locale, l)
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
      <IntlProvider locale={locale} messages={translatedMessages[locale]}>
        <Helmet>
          <html
            className={transition ? 'color-theme-in-transition' : ''}
            lang={locale}
            data-theme={dark ? 'dark' : 'light'}
          />
        </Helmet>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route
              path="/alice"
              render={({ match }) => (
                <Switch>
                  <Route path={`${match.url}/2018`} component={Alice2018} />
                  <Route path={`${match.url}/lover`} component={Lover} />
                </Switch>
              )}
            />
            <Route path="/subway" component={Subway} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </IntlProvider>
    </Context.Provider>
  )
}

export default App
