import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledShortcuts = styled('div')`
  [data-color],
  [data-label] {
    padding: 0 5px;
    border-radius: 3px;
    margin: 0 2px;
    font-size: 1.4rem;
  }

  [data-color] {
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  [data-label] {
    background-color: ${({ theme }) =>
      theme.TYPE === 'DARK'
        ? 'rgba(0, 0, 0, 0.5)'
        : 'rgba(255, 255, 255, 0.75)'};
  }

  & > dl {
    margin-bottom: 3px;

    & > dt,
    & > dd {
      background: transparent;
    }
  }

  ${({ theme }) =>
    Object.entries(theme.COLORS).reduce(
      (currentStyle, [key, color]) =>
        `${currentStyle}[data-color="${key}"]{background-color:${color};}`,
      ''
    )}
`;

export const StyledShortcutsTitle = styled('h1')`
  font-size: 2rem;
  text-align: center;
  padding: 3px 5px;
  max-width: 100%;
  color: ${({ theme }) =>
    theme.TYPE === 'DARK'
      ? theme.COLORS[theme.COLOR]
      : Color(theme.COLORS[theme.COLOR]).darken(0.2)};
  background-color: ${({ theme }) =>
    theme.TYPE === 'DARK'
      ? 'rgba(100, 100, 100, 0.1)'
      : 'rgba(200, 200, 200, 0.1)'};
`;

export const StyledShortcutsInfo = styled('p')`
  text-align: center;
  font-size: 1.4rem;
  margin: 10px 0 20px;
`;

export const StyledShortcutsCommands = styled('dl', ['amount'])`
  ${({ theme, amount }) =>
    theme.GRID.set()
      .responsive({
        '<plus': 'height: 60vh;',
        '>plus': `height: ${3.6 * amount}rem;`,
      })
      .getStyle()}
`;

export const StyledShortcutsItem = styled('dl')`
  font-size: 1.4rem;
  margin: 3px;
  padding: 6px;
  border-radius: 3px;
  text-align: center;
  background-color: ${({ theme }) =>
    theme.TYPE === 'DARK' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(200, 200, 200, 0.1)'};

  ${({ theme }) =>
    theme.GRID.set()
      .flex()
      .responsive({
        '<plus': `
          flex-direction: column;

          &:first-child { display: none; }
        `,
      })
      .getStyle()}
`;

export const StyledShortcutsCommand = styled('dt')`
  min-width: 100px;
  font-weight: bolder;
  padding: 4px;
  border-radius: 3px;
  background-color: ${({ theme }) =>
    theme.TYPE === 'DARK'
      ? 'rgba(50, 50, 50, 0.1)'
      : 'rgba(150, 150, 150, 0.1)'};

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
        align: 'center',
      })
      .responsive({
        '>plus': 'margin-right: 6px;',
        '<plus': 'margin-bottom: 6px;',
      })
      .getStyle()}
`;

export const StyledShortcutsDescription = styled('dd')`
  flex: 1;
  padding: 4px;
  border-radius: 3px;
  background-color: ${({ theme }) =>
    theme.TYPE === 'DARK'
      ? 'rgba(100, 100, 100, 0.1)'
      : 'rgba(200, 200, 200, 0.1)'};
`;
