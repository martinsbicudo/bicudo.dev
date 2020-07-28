import { createStyledComponent as styled } from '@Utils';

function getResponsivePadding({ theme }) {
  return theme.GRID.set()
    .responsive({
      '>plus&<tablet': `margin-left: 2rem;`,
    })
    .getStyle();
}

export const StyledPostReadTime = styled('span')`
  ${getResponsivePadding}
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS[theme.COLOR]};

  svg {
    margin-right: 5px;
    font-size: 1.6em;
  }

  ${({ theme }) => theme.GRID.set().flex({ align: 'center' }).getStyle()}
`;

export const StyledPostDate = styled('p')`
  ${getResponsivePadding}
  font-size: 1.4rem;
`;

export const StyledPostTitle = styled('h1')`
  ${getResponsivePadding}
  margin-bottom: 2rem;
`;
