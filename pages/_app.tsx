import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/GlobalStyle'
import theme from '~/styles/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
