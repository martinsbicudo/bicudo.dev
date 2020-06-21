import Color from 'color';

import { Infos } from '@Common';
import { createStyledComponent as styled } from '@Utils';

export const StyledAside = styled('aside')`
  min-width: 22.5rem;
  grid-area: aside;

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>desktop': 'padding: 4rem 2rem 2rem 3rem;',
        '>tablet&<desktop': `padding: 3rem 2rem 2rem 1rem;`,
        '<tablet': `
        display: none;
      `,
      })
      .getStyle()}
`;

export const StyledAsideInfos = styled(Infos)`
  padding: 2rem 0;
  overflow: hidden;
`;

export const StyledAsideRepository = styled('a')`
  margin-left: 1rem;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  background-color: ${({ theme }) => theme.COLORS[theme.COLOR]};
  color: ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 0.3rem;
  align-self: baseline;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s;
  will-change: background-color;
  transform: rotate(5deg) translate(-3rem, -1rem);
  font-weight: bolder;

  &:not(:hover) {
    background-color: ${({ theme }) =>
      Color(theme.COLORS[theme.COLOR]).lighten(0.2)};
  }
`;

export const StyledAsideLinkItem = styled('a')`
  border: 0.1rem solid transparent;
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
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.6rem;
`;

export const StyledAsideStackItem = styled(StyledAsideLinkItem)`
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  font-size: 1.2rem;
`;
