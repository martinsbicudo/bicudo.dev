import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledDateContainer = styled('li')`
  margin: 1rem 0 2rem;

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
      })
      .getStyle()}
`;

export const StyledDate = styled('span')`
  padding: 0.2rem 0.75rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  background-color: ${({ theme }) =>
    theme.TYPE === 'LIGHT'
      ? Color(theme.COLORS[theme.COLOR]).fade(0.8)
      : 'rgba(0, 0, 0, 0.2)'};
  color: ${({ theme }) =>
    theme.TYPE === 'LIGHT' ? theme.COLORS.DARK : theme.COLORS[theme.COLOR]};
`;
