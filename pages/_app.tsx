import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { LangProvider } from '~/context'
import GlobalStyle from '~/styles/GlobalStyle'
import theme from '~/styles/theme'

const App = ({ Component, pageProps, router }: AppProps) => (
  <ThemeProvider theme={theme}>
    <LangProvider lang={router.locale}>
      <GlobalStyle />
      <Component {...pageProps} />
    </LangProvider>
  </ThemeProvider>
)

export default App
