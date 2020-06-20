import { createStyledComponent as styled } from '@Utils';

export const StyledMain = styled('main')`
  flex: 100%;
  overflow-y: hidden;
  grid-area: main;

  ${({ theme }) =>
    theme.GRID.get()
      .flex({
        columns: true,
        justify: 'flex-end',
      })
      .responsive({
        '>plus': 'padding: 0 4rem;',
        '<plus': 'padding: 1rem 3rem 0;',
      })}
`;

export const StyledMainMessages = styled('div')`
  flex: 1;
  width: calc(100% + 3rem);
  margin: 0 -1.5rem;
`;
