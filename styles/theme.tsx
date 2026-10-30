import { createStyledBreakpointsTheme } from 'styled-breakpoints'

const breakpointsTheme = createStyledBreakpointsTheme()

const theme = {
  ...breakpointsTheme,
  colors: {
    bg: '#0e0e0e',
    panel: '#141414',
    panelHover: '#191919',
    line: 'rgba(255, 255, 255, 0.08)',
    lineStrong: 'rgba(255, 255, 255, 0.18)',
    paper: '#f4f4f5',
    text: '#d4d4d8',
    muted: '#8f8f96',
    ink: '#0e0e0e',
    success: '#22c55e',
  },
  fonts: {
    sans: 'var(--font-geist)',
    mono: 'var(--font-geist-mono)',
  },
}

export default theme
