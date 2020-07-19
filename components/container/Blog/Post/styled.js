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
  display: inline-block;
  padding: 1px 3px;
  border-radius: 2px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.COLORS[theme.COLOR]};
  color: ${({ theme }) => theme.COLORS.DARK};
`;

export const StyledPostDate = styled('p')`
  ${getResponsivePadding}
  font-size: 1.2rem;
`;

export const StyledPostTitle = styled('h1')`
  ${getResponsivePadding}
  margin-bottom: 2rem;
`;
