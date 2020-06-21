import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledLink = styled('a')`
  color: ${({ theme }) => Color(theme.COLORS[theme.COLOR]).darken(0.5)};
  position: relative;
  cursor: pointer;
  text-decoration: none;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    height: 0.1rem;
    background: currentColor;
    will-change: opacity;
    transition: opacity 0.2s;
  }

  &::before {
    top: 0;
    transform: translate(0, -100%);
    width: 1rem;
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
