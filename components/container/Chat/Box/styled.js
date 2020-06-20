import { createStyledComponent as styled } from '@Utils';

export const StyledBox = styled('div')`
  height: 100%;
  min-height: 50rem;

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>plus': 'padding: 4rem 2rem;',
        '>mobile&<plus': 'padding: 3rem 1rem;',
        '<mobile': 'padding: 2rem 0;',
      })
      .getStyle()}
`;

export const StyledBoxContent = styled('div')`
  display: grid;
  grid-template-areas:
    'aside main'
    'aside footer';
  grid-template-columns: max-content auto;
  grid-template-rows: auto max-content;
  background-color: ${({ theme }) => theme.COLORS[theme.TYPE]};
  position: relative;
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  border: 0.1rem solid rgba(100, 100, 100, 0.1);
  box-shadow: 0 0 2rem 0
    ${({ theme }) =>
      theme.TYPE === 'LIGHT'
        ? 'rgba(100, 100, 100, 0.4)'
        : 'rgba(0, 0, 0, 0.3)'};

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>tablet': 'padding: 0 4rem;',
        '>plus&<tablet': 'padding: 0 2rem;',
      })
      .getStyle()}
`;
