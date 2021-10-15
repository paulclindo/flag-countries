/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as React from 'react'
import CountryCard from './components/CountryCard'

function App(): React.FC {
  return (
      <div css={{ minHeight: '100vh' }}>
        <CountryCard
          name="Peru"
          population="81,700,900"
          region="South America"
          capitalCity="Lima"
          imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2016%2F12%2FPeru-Flag-3.png&f=1&nofb=1"
        />
      </div>
  )
}

export default App
