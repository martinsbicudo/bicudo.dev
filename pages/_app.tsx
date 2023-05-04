import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/GlobalStyle'
import theme from '~/styles/theme'

import { AppCustomProps } from './interface'

function App({ Component, pageProps }: AppCustomProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
