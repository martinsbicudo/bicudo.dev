import Color from 'color';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
  }

  ::selection {
    color: ${({ theme }) => Color(theme.COLORS[theme.COLOR]).darken(0.2)};
    background: ${({ theme }) => Color(theme.COLORS[theme.COLOR]).fade(0.8)};
  }

  html {
    font-size: ${({ theme }) => `${theme.FONT_SIZE * 10}px`};
    color: ${({ theme }) =>
      theme.TYPE === 'LIGHT' ? theme.COLORS.DARK : theme.COLORS.LIGHT};
    background: ${({ theme }) => {
      const themeColor =
        theme.TYPE === 'LIGHT' ? theme.COLORS[theme.COLOR] : theme.COLORS.DARK;
      const backgroundColor = Color(themeColor);

      return `linear-gradient(to bottom, ${themeColor} 0%, ${backgroundColor.lighten(
        0.05
      )} 10% 90%, ${themeColor} 100%);`;
    }};
  }

  body {
    display: flex;
    flex-direction: column;
    min-width: ${({ theme }) => `${theme.GRID.MINIMUM}rem`};
  }

  body, #__next {
    width: 100%;
    height: 100vh;
    ${({ getMaxHeight }) => getMaxHeight()};
  }
`;
