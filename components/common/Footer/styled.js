import { createStyledComponent as styled } from '@Utils';

export const StyledFooter = styled('footer')`
  grid-area: footer;

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        columns: true,
        justify: 'flex-end',
      })
      .responsive({
        '>plus': 'padding: 0 40px 30px;',
        '>mobile&<plus': 'padding: 0 30px 20px;',
        '<mobile': 'padding: 0 25px 20px;',
      })
      .getStyle()}
`;
