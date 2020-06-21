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
        '>plus': 'padding: 0 4rem;',
        '>mobile&<plus': 'padding: 1rem 3rem 0;',
        '<mobile': 'padding: 1rem 2.5rem 0;',
      })
      .getStyle()}
`;
