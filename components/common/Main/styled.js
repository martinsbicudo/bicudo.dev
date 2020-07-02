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
        '>mobile&<plus': 'padding: 15px 10px 0;',
        '<mobile': 'padding: 10px 5px 0;',
      })
      .getStyle()}
`;
