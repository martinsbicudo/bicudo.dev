import 'styled-components'

import theme from './styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors
    breakpoints: typeof theme.breakpoints
  }
}
