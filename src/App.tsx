import * as React from 'react'
import CountryCard from './components/CountryCard'
import { lightTheme, darkTheme } from './theme'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/system'
import { CssBaseline, useMediaQuery } from '@mui/material'

function App(): React.FC {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box minHeight="100vh" bgcolor="background.default">
        <CountryCard
          name="Peru"
          population="81,700,900"
          region="South America"
          capitalCity="Lima"
          imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2016%2F12%2FPeru-Flag-3.png&f=1&nofb=1"
        />
      </Box>
    </ThemeProvider>
  )
}

export default App
