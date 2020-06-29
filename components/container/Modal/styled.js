import { createStyledComponent as styled } from '@Utils';

export const StyledModal = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  height: initial;
  max-width: ${({ theme }) => `${(theme.GRID.CONTAINER - 5) * 10}px`};

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
        align: 'center',
      })
      .responsive({
        '<plus': 'width: calc(100% - 100px);',
      })
      .getStyle()}
`;

export const StyledModalContent = styled('section')`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  min-width: 275px;
  position: relative;
  border: 1px solid rgba(100, 100, 100, 0.1);
  background-color: ${({ theme }) => theme.COLORS[theme.TYPE]};
  box-shadow: 0 0 20px 0
    ${({ theme }) =>
      theme.TYPE === 'LIGHT' ? 'rgba(50, 50, 50, 0.3)' : 'rgba(0, 0, 0, 0.2)'};

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>tablet': 'min-width: 500px;',
        '>plus&<tablet': 'min-width: 450px;',
        '<plus': 'width: 100%',
      })
      .getStyle()}
`;

export const StyledModalClose = styled('button')`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 40px;
  width: 30px;
  height: 30px;
  background: inherit;
  color: inherit;
  box-shadow: inherit;
  border: inherit;
  cursor: pointer;
  transition: transform 0.1s;
  will-change: transform;

  &:hover {
    transform: translate(50%, -50%) scale(0.95);
  }

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
        align: 'center',
      })
      .getStyle()};
`;
