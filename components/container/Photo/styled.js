import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledPhoto = styled('figure')`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  transition: transform 0.1s;
  will-change: transform;
  padding: 0.3rem;
  background: ${({ theme }) => `
    linear-gradient(to bottom right, ${Color(theme.COLORS[theme.COLOR]).darken(
      0.3
    )}, ${theme.COLORS[theme.COLOR]});
  `};
  box-shadow: 0 0 2rem 0
    ${({ theme }) =>
      theme.TYPE === 'LIGHT'
        ? 'rgba(100, 100, 100, 0.4)'
        : 'rgba(0, 0, 0, 0.3)'};

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>mobile': `
          width: 6rem;
          height: 6rem;
          left: 0;
          transform: translate(-50%, -50%);
          &:hover { transform: translate(-50%, -50%) scale(0.95); }
        `,
        '<plus': 'left: 50%;',
        '<mobile': `
          width: 5rem;
          height: 5rem;
          transform: translate(-50%, -40%);
          &:hover { transform: translate(-50%, -40%) scale(0.95); }
        `,
      })
      .getStyle()}
`;

export const StyledPhotoImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
