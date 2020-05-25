import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { IntlProvider } from 'react-intl'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { translatedMessages } from '../../lang'
import { canUseWebp, storage } from '../../utils'
import About from '../About'
import Lover from '../Alice/Lover'
import Alice2018 from '../Alice/Year2018'
import Family from '../Family'
import Home from '../Home'
import NotFound from '../NotFound'
import Shoot2016 from '../Shoot/2016'
import Shoot2017 from '../Shoot/2017'
import Shoot2018 from '../Shoot/2018'
import Shoot2019 from '../Shoot/2019'
import Past from '../Shoot/past'
import Undefined from '../Shoot/undefined'
import Subway from '../Subway'

export interface AppState {
  locale: string
  dark: boolean
  switchTheme: () => void
  switchLocale: (l: string) => void
}

export const Context = React.createContext<AppState | null>(null)

function App() {
  let transition = false
  const [dark, setDark] = useState(true)
  const [locale, setLocale] = useState('en')
  const initLocale = async () => {
    const itemLocale = await localStorage.getItem(storage.locale)
    setLocale(itemLocale ? itemLocale : locale)
  }
  const initDark = async () => {
    const itemDark = await localStorage.getItem(storage.dark)
    setDark(itemDark ? (itemDark === '1' ? true : false) : dark)
  }
  useEffect(() => {
    initLocale()
    initDark()
  })
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
  const clsName = canUseWebp() ? 'use-webp' : 'no-webp'
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
        <Helmet defaultTitle="RayLiao" titleTemplate="%s | RayLiao">
          <html
            className={
              transition ? `${clsName} color-theme-in-transition` : clsName
            }
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
            <Route path="/family" component={Family} />
            <Route
              path="/shoot"
              render={({ match }) => (
                <Switch>
                  <Route path={`${match.url}/2016`} component={Shoot2016} />
                  <Route path={`${match.url}/2017`} component={Shoot2017} />
                  <Route path={`${match.url}/2018`} component={Shoot2018} />
                  <Route path={`${match.url}/2019`} component={Shoot2019} />
                  <Route path={`${match.url}/past`} component={Past} />
                  <Route
                    path={`${match.url}/undefined`}
                    component={Undefined}
                  />
                </Switch>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/subway" component={Subway} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </IntlProvider>
    </Context.Provider>
  )
}

export default App
