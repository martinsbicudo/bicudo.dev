import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledLink = styled('a')`
  color: ${({ theme }) =>
    theme.TYPE === 'LIGHT'
      ? Color(theme.COLORS[theme.COLOR]).darken(0.5)
      : Color(theme.COLORS[theme.COLOR]).lighten(0.1)};
  position: relative;
  cursor: pointer;
  text-decoration: none;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    height: 1px;
    background: currentColor;
    will-change: opacity;
    transition: opacity 0.2s;
  }

  &::before {
    top: 0;
    transform: translate(0, -100%);
    width: 10px;
  }

  &::after {
    bottom: 0;
    transform: translate(0, 100%);
    width: 100%;
  }

  &:focus::before,
  &:visited::before,
  &:hover::after {
    opacity: 1;
  }

  &:not(:focus):not(:visited)::before,
  &:not(:hover)::after {
    opacity: 0;
  }
`;
