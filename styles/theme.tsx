import { createStyledBreakpointsTheme } from 'styled-breakpoints'

const breakpointsTheme = createStyledBreakpointsTheme()

const theme = {
  ...breakpointsTheme,
  colors: {
    main: '#0e0e0e',
    white: '#ffffff',
    text: '#d4d4d4',
    black: '#000000',
    gray: '#c6c6c6',
    gray2: '#515151',
    gray3: '#212121',
    gray4: '#171717',
    gray5: '#090909',
    gradient:
      'linear-gradient(90deg,rgba(255, 255, 255, 1) 25%,rgba(40, 40, 40, 1) 100%)',
    gradient2:
      'linear-gradient(90deg, rgb(14, 14, 14) 0%, rgb(110, 110, 110) 47%, rgb(14, 14, 14) 100%);',
  },
}

export default theme
