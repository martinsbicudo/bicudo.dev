import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledDateContainer = styled('li')`
  margin: 10px 0 20px;

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
      })
      .getStyle()}
`;

export const StyledDate = styled('span')`
  padding: 3px 7.5px;
  border-radius: 3px;
  font-size: 1.2rem;
  background-color: ${({ theme }) =>
    theme.TYPE === 'LIGHT'
      ? Color(theme.COLORS[theme.COLOR]).fade(0.8)
      : 'rgba(0, 0, 0, 0.2)'};
  color: ${({ theme }) =>
    theme.TYPE === 'LIGHT' ? theme.COLORS.DARK : theme.COLORS[theme.COLOR]};
`;
