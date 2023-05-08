import { createGlobalStyle } from 'styled-components'

import { getThemeColor } from '~/utils'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Jost', sans-serif;
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
