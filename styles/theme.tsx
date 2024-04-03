import { createStyledBreakpointsTheme } from 'styled-breakpoints'

const breakpointsTheme = createStyledBreakpointsTheme()

const theme = {
  ...breakpointsTheme,
  colors: {
    main: '#121212',
    white: '#ffffff',
    black: '#000000',
    gray: '#cccccc',
    gray2: '#626262',
    gray3: '#212121',
    gray4: '#1b1b1b',
    gray5: '#090909',
    gradient:
      'linear-gradient(90deg,rgba(255, 255, 255, 1) 25%,rgba(40, 40, 40, 1) 100%)',
    gradient2:
      'linear-gradient(90deg, rgba(200,200,200,1) 0%, rgba(100,100,100,1) 47%, rgba(200,200,200,1) 100%);',
    gradient3:
      'linear-gradient(90deg, rgba(255,164,0,1) 0%, rgba(255,74,0,1) 47%, rgba(200,200,200,1) 100%);',
    gradient4:
      'linear-gradient(90deg, rgba(181,0,255,1) 0%, rgba(139,0,255,1) 47%, rgba(200,200,200,1) 100%);',
  },
}

export default theme
