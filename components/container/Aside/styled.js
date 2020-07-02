import Color from 'color';

import { Infos } from '@Common';
import { createStyledComponent as styled } from '@Utils';

export const StyledAside = styled('aside')`
  min-width: 225px;
  grid-area: aside;

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>desktop': 'padding: 30px 20px 20px 15px;',
        '>tablet&<desktop': `padding: 25px 20px 20px 10px;`,
        '<tablet': 'display: none;',
      })
      .getStyle()}
`;

export const StyledAsideInfos = styled(Infos)`
  padding: 20px 0;
  overflow: hidden;
`;

export const StyledAsideRepository = styled('a')`
  margin-left: 10px;
  font-size: 1rem;
  padding: 2px 5px;
  background-color: ${({ theme }) => theme.COLORS[theme.COLOR]};
  color: ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 3px;
  align-self: baseline;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s;
  will-change: background-color;
  transform: rotate(5deg) translate(-30px, -10px);
  font-weight: bolder;

  &:not(:hover) {
    background-color: ${({ theme }) =>
      Color(theme.COLORS[theme.COLOR]).lighten(0.2)};
  }
`;

export const StyledAsideLinkItem = styled('a')`
  border: 1px solid transparent;
  background-color: ${({ theme }) =>
    theme.TYPE === 'LIGHT'
      ? Color(theme.COLORS[theme.COLOR]).fade(0.9)
      : 'rgba(0, 0, 0, 0.2)'};
  color: ${({ theme }) =>
    theme.TYPE === 'LIGHT'
      ? Color(theme.COLORS[theme.COLOR]).darken(0.5)
      : theme.COLORS[theme.COLOR]};
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
  will-change: border-color, color;
  font-weight: 600;

  strong {
    display: none;
  }

  &:hover {
    border-color: ${({ theme }) =>
      theme.TYPE === 'LIGHT'
        ? Color(theme.COLORS[theme.COLOR]).darken(0.5)
        : theme.COLORS[theme.COLOR]};
  }
`;

export const StyledAsideSocialItem = styled(StyledAsideLinkItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.6rem;
`;

export const StyledAsideStackItem = styled(StyledAsideLinkItem)`
  border-radius: 3px;
  padding: 2px 5px;
  font-size: 1.2rem;
`;
