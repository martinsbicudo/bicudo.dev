import { createStyledComponent as styled } from '@Utils';

export const StyledPage = styled('div')`
  height: 100%;
  min-height: 500px;

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>plus': 'padding: 40px 20px;',
        '>mobile&<plus': 'padding: 30px 10px;',
        '<mobile': 'padding: 20px 0;',
      })
      .getStyle()}
`;

export const StyledPageContent = styled('div')`
  display: grid;
  grid-template-areas:
    'aside content'
    'aside footer';
  grid-template-rows: auto max-content;
  position: relative;
  z-index: 0;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(100, 100, 100, 0.1);
  background-color: ${({ theme }) => theme.COLORS[theme.TYPE]};
  box-shadow: 0 0 20px 0
    ${({ theme }) =>
      theme.TYPE === 'LIGHT'
        ? 'rgba(100, 100, 100, 0.4)'
        : 'rgba(0, 0, 0, 0.3)'};

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>tablet': `
          padding: 0 40px;
          grid-template-columns: 30% auto;
        `,
        '<tablet': 'grid-template-columns: 0 100%;',
        '>plus&<tablet': 'padding: 0 20px;',
      })
      .getStyle()}
`;
