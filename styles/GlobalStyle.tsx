import localFont from 'next/font/local'

import { createGlobalStyle } from 'styled-components'

import { getThemeColor } from '~/utils'

const geist = localFont({
  src: './fonts/geist-variable.woff2',
  weight: '100 900',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/geist-mono-variable.woff2',
  weight: '100 900',
  display: 'swap',
})

const GlobalStyle = createGlobalStyle`
  :root {
    --font-geist: ${geist.style.fontFamily};
    --font-geist-mono: ${geistMono.style.fontFamily};
    color-scheme: dark;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-family: var(--font-geist), system-ui, sans-serif;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background-color: ${getThemeColor('bg')};
    color: ${getThemeColor('text')};
  }

  body {
    background-color: ${getThemeColor('bg')};
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(244, 244, 245, 0.06), transparent 70%),
      radial-gradient(rgba(244, 244, 245, 0.06) 1px, transparent 1.2px);
    background-size: 100% 100%, 22px 22px;
    background-attachment: fixed;
  }

  ::selection {
    color: ${getThemeColor('ink')};
    background-color: ${getThemeColor('paper')};
  }

  a {
    color: ${getThemeColor('paper')};
    text-decoration: underline;
    text-decoration-color: ${getThemeColor('lineStrong')};
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
    transition: text-decoration-color 0.2s ease;

    &:hover {
      text-decoration-color: ${getThemeColor('paper')};
    }
  }

  a,
  button {
    -webkit-tap-highlight-color: transparent;

    &:focus-visible {
      outline: 2px solid ${getThemeColor('paper')};
      outline-offset: 3px;
    }
  }

  html,
  body,
  #__next {
    min-height: 100vh;
    min-width: 320px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: #2a2a2a transparent;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-delay: 0ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`

export default GlobalStyle
