import { Message } from '@Common';
import { createStyledComponent as styled } from '@Utils';

export const StyledMessages = styled('ul')`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>plus': 'padding: 1.5rem;',
        '<plus': 'padding: 0 1.5rem;',
      })
      .getStyle()}
`;

export const StyledMessagesMessage = styled(Message)`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
