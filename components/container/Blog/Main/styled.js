import { createStyledComponent as styled } from '@Utils';

export const StyledMainContent = styled('div')`
  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '<plus': 'padding: 3.5rem 10px 0;',
        '>plus&<tablet': 'padding-top: 3rem;',
        '>tablet&<desktop': 'margin-top: 50px;',
        '>desktop': 'margin-top: 55px;',
      })
      .getStyle()}
`;
