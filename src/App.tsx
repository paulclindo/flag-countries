/** @jsx jsx */
import {Global, jsx} from '@emotion/react'
import * as React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
// import { ReactComponent as SunIcon } from './assets/icons/sun.svg'
import {ReactComponent as MoonIcon} from './assets/icons/moon.svg'
import Home from './screens/Home'
import {globalStyles} from './styles/globalStyles'

const queryClient = new QueryClient()

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div
        css={{
          background: 'hsl(0, 0%, 100%)',
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
          <h1 css={{margin: 0, fontSize: '1.25rem'}}>Where in the world?</h1>
          <button
            type="button"
            css={{
              padding: '10px 2px',
              background: 'transparent',
              fontWeight: 600,
              display: 'inline-flex',
              svg: {
                marginRight: 8,
              },
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <MoonIcon />
            Dark Mode
          </button>
        </div>
      </div>
      {children}
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <Layout>
        <Home />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
