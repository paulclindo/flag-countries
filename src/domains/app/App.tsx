/** @jsx jsx */
import {Global, jsx} from '@emotion/react'
import * as React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {ReactComponent as SunIcon} from '../countries/assets/icons/sun.svg'
import {ReactComponent as MoonIcon} from '../countries/assets/icons/moon.svg'
import CountryDetails from '../../screens/CountryDetails'
import Home from '../../screens/Home'
import {md} from './styles/breakpoints'
import {globalStyles} from './styles/globalStyles'

const queryClient = new QueryClient()

function Layout({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = React.useState('light')
  const defaultTheme = theme === 'light' ? 'dark' : 'light'

  React.useEffect(() => {
    document.body.setAttribute('class', theme)
  }, [theme])
  return (
    <div>
      <header
        css={{
          background: 'var(--element-color)',
          boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05) ',
        }}
      >
        <div
          css={{
            maxWidth: 1200,
            height: 80,
            padding: '0 30px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link css={{textDecoration: 'none', color: 'inherit'}} to="/">
            <h1
              css={{
                margin: 0,
                fontSize: '1rem',
                [md]: {
                  fontSize: '1.25rem',
                },
              }}
            >
              Where in the world?
            </h1>
          </Link>
          <button
            type="button"
            css={{
              color: 'var(--text-color)',
              padding: '10px 2px',
              background: 'transparent',
              fontWeight: 300,
              letterSpacing: '0.5px',
              fontSize: '1rem',
              display: 'inline-flex',
              svg: {
                marginRight: 8,
              },
              '&:hover': {
                opacity: 0.8,
              },
            }}
            onClick={() => setTheme(defaultTheme)}
          >
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            <span css={{textTransform: 'capitalize'}}>{theme} Mode</span>
          </button>
        </div>
      </header>
      {children}
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/detail/:code">
              <CountryDetails />
            </Route>
          </Switch>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  )
}

export default App
