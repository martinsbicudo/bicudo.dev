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
        '>tablet': 'padding: 0 40px;',
        '>plus&<tablet': 'padding: 0 20px;',
        '>mobile&<plus': 'padding: 10px 30px 0;',
        '<mobile': 'padding: 10px 25px 0;',
      })
      .getStyle()}
`;
