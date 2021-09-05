import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  mode: 'light',
  palette: {
    text: {
      primary: 'hsl(200, 15%, 8%)',
      secondary: ' hsl(0, 0%, 12%)',
    },
    background: {
      default: 'hsl(0, 0%, 98%)',
      card: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
})
