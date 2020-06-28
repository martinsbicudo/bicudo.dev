import { createStyledComponent as styled } from '@Utils';

export const StyledMain = styled('main')`
  overflow-y: hidden;
  grid-area: content;

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        columns: true,
      })
      .responsive({
        '>tablet': 'padding: 0 4rem;',
        '>plus&<tablet': 'padding: 0em 2rem;',
        '>mobile&<plus': 'padding: 3.5rem 3rem 0;',
        '<mobile': 'padding: 3.5rem 2.5rem 0;',
      })
      .getStyle()}
`;
