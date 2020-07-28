import { Message } from '@Common';
import { createStyledComponent as styled } from '@Utils';

export const StyledMessages = styled('ul')`
  list-style: none;
  width: 100%;
  padding: 0 10px;

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        column: true,
      })
      .responsive({
        '>plus': 'margin-top: 1rem',
        '>mobile&<plus': 'margin-top: 3rem;',
        '<mobile': 'margin-top: 2.5rem;',
      })
      .getStyle()}
`;

export const StyledMessagesMessage = styled(Message)`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
