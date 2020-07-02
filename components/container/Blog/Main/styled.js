import { createStyledComponent as styled } from '@Utils';

export const StyledMainContent = styled('div')`
  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '<plus': 'padding: 2rem 10px 0;',
        '>plus&<tablet': 'padding-top: 2.5rem;',
        '>tablet&<desktop': 'margin-top: 4rem;',
        '>desktop': 'margin-top: 5rem;',
      })
      .getStyle()}
`;
