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
        '>plus': 'padding: 0 4rem 3rem;',
        '>mobile&<plus': 'padding: 0 3rem 2rem;',
        '<mobile': 'padding: 0 2.5rem 2rem;',
      })
      .getStyle()}
`;
