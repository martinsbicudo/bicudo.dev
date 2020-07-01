import { createStyledComponent as styled } from '@Utils';

export const StyledMainContent = styled('div')`
  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '<plus': 'padding-top: 4rem;',
        '>plus&<tablet': 'padding-top: 3.5rem;',
        '>tablet&<desktop': 'margin-top: 5rem;',
        '>desktop': 'margin-top: 6rem;',
      })
      .getStyle()}
`;
