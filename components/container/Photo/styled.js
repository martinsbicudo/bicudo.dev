import { createStyledComponent as styled } from '@Utils';

export const StyledPhoto = styled('figure')`
  position: absolute;
  z-index: 2;
  top: 0;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  border: 0.3rem solid ${({ theme }) => theme.COLORS[theme.COLOR]};
  overflow: hidden;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS[theme.TYPE]};
  transition: transform 0.1s;
  will-change: transform;
  box-shadow: 0 0 2rem 0
    ${({ theme }) =>
      theme.TYPE === 'LIGHT'
        ? 'rgba(100, 100, 100, 0.4)'
        : 'rgba(0, 0, 0, 0.3)'};

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>plus': `
          left: 0;
          transform: translate(-50%, -50%);
          &:hover { transform: translate(-50%, -50%) scale(0.95); }
        `,
        '>mobile': `
          width: 6rem;
          height: 6rem;
        `,
        '>mobile&<plus': `
          transform: translate(-50%, -40%);
          &:hover { transform: translate(-50%, -40%) scale(0.95); }
        `,
        '<plus': 'left: 50%;',
        '<mobile': `
          width: 5rem;
          height: 5rem;
          transform: translate(-50%, -30%);
          &:hover { transform: translate(-50%, -30%) scale(0.95); }
        `,
      })
      .getStyle()}
`;

export const StyledPhotoImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
