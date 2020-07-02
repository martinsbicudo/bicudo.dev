import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledPhoto = styled('figure')`
  position: absolute;
  z-index: 1;
  top: 0;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  transition: transform 0.1s;
  will-change: transform;
  padding: 3px;
  background: ${({ theme }) => `
    linear-gradient(to bottom right, ${Color(theme.COLORS[theme.COLOR]).darken(
      0.3
    )}, ${theme.COLORS[theme.COLOR]});
  `};
  box-shadow: 0 0 20px 0
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
        `,
        '>mobile&<plus': `
          transform: translate(-50%, -1.75rem);
          &:hover { transform: translate(-50%, -1.75rem) scale(0.95); }
        `,
        '>plus': `
          left: 0;
          transform: translate(-2rem,-40%);
          &:hover { transform: translate(-2rem,-40%) scale(0.95); }
        `,
        '<plus': 'left: 50%;',
        '<mobile': `
          width: 5rem;
          height: 5rem;
          transform: translate(-50%,-1.25rem);
          &:hover { transform: translate(-50%,-1.25rem) scale(0.95); }
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
