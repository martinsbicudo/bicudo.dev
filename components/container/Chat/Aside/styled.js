import { createStyledComponent as styled } from '@Utils';

export const StyledAside = styled('aside')`
  min-width: 22.5rem;
  grid-area: aside;

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>desktop': 'padding: 7rem 2rem 3rem 3rem;',
        '>tablet&<desktop': `padding: 6rem 2rem 3rem;`,
        '<tablet': `
        display: none;
      `,
      })
      .getStyle()}
`;
