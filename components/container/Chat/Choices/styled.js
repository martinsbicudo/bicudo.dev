import { createStyledComponent as styled } from '@Utils';

export const StyledChoices = styled('div')`
  @keyframes choices-fade {
    from {
      transform: translateY(1rem);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: choices-fade 1s;

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        wrap: true,
        align: 'center',
        justify: 'center',
      })
      .getStyle()}
`;
