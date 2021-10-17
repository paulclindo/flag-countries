/** @jsx jsx */
import * as React from 'react'
import {Global, jsx} from '@emotion/react'
import CountryCard from './components/CountryCard'
import {globalStyles} from './styles/globalStyles'
// import { ReactComponent as SunIcon } from './assets/icons/sun.svg'
import {ReactComponent as MoonIcon} from './assets/icons/moon.svg'
import {ReactComponent as SearchIcon} from './assets/icons/search.svg'

function Topbar() {
  return (
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
  )
}

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <div css={{}}>
        <Topbar />
        <div
          css={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            marginTop: 40,
            marginBottom: 40,
            justifyContent: 'space-between',
          }}
        >
          <div css={{position: 'relative'}}>
            <SearchIcon css={{position: 'absolute', left: 26, top: 20}} />
            <input
              css={{
                width: 400,
                background: 'white',
                border: 0,
                padding: 20,
                paddingLeft: 60,
                boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05) ',
                fontSize: '0.875rem',
              }}
              type="text"
              placeholder="Search for a country..."
            />
          </div>
          <select
            name="region"
            id="region"
            css={{
              border: 0,
              width: 190,
              background: 'white',
              padding: '15px 23px',
              boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05) ',
            }}
          >
            <option selected disabled value="">
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Europe</option>
          </select>
        </div>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridGap: '60px',
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          {Array.from({length: 10}).map((_, idx) => (
            <CountryCard
              key={idx}
              name="Peru"
              population="81,700,900"
              region="South America"
              capitalCity="Lima"
              imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2016%2F12%2FPeru-Flag-3.png&f=1&nofb=1"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
