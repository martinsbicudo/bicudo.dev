import { Container } from '@Common';
import { createStyledComponent as styled } from '@Utils';

export const StyledModal = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  height: initial;

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
        align: 'center',
      })
      .getStyle()}
`;

export const StyledModalContent = styled('section')`
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 60rem;
  min-width: 27.5rem;
  position: relative;
  border: 0.1rem solid rgba(100, 100, 100, 0.1);
  background-color: ${({ theme }) => theme.COLORS[theme.TYPE]};
  box-shadow: 0 0 2rem 0
    ${({ theme }) =>
      theme.TYPE === 'LIGHT' ? 'rgba(50, 50, 50, 0.3)' : 'rgba(0, 0, 0, 0.2)'};
`;

export const StyledModalClose = styled('button')`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 4rem;
  width: 3rem;
  height: 3rem;
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
