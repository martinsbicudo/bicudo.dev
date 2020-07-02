import { createStyledComponent as styled } from '@Utils';

export const StyledContainer = styled('div')`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => `${theme.GRID.CONTAINER * 10}px`};
  padding: 0 10px;
`;
