import { Jost } from 'next/font/google'

import { createGlobalStyle } from 'styled-components'

import { getThemeColor } from '~/utils'

const jost = Jost({
  weight: ['200', '400', '500'],
  subsets: ['latin'],
})

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
     ${jost.style}
    font-size: 62.5%;
    background-color: ${getThemeColor('main')};
    color: ${getThemeColor('white')};
  }

  html,
  body,
  #__next {
    min-height: 100vh;
    min-width: 320px;
  }

  body::-webkit-scrollbar {
    width: 1.6rem;
  }

  body::-webkit-scrollbar-track {
    background-color: ${getThemeColor('gray3')};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${getThemeColor('gray2')};
  }
`

export default GlobalStyle
