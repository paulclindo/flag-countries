import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  mode: 'dark',
  palette: {
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: ' hsl(0, 0%, 98%)',
    },
    background: {
      default: 'hsl(207, 26%, 17%)',
      card: 'hsl(209, 23%, 22%)',
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
})
