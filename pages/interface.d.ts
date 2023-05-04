import type { AppProps } from 'next/app'

import { ThemeType } from '~/context/ThemeProvider/interface'

type AppCustomProps = {
  props: {
    initialTheme: ThemeType
  }
} & AppProps
