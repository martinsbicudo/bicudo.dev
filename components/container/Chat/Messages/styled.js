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
        '>plus': 'padding: 15px;',
        '>mobile&<plus': `
          padding: 0 15px;
          margin-top: 2.5rem;
        `,
        '<mobile': `
          padding: 0 10px;
          margin-top: 2.5rem;
        `,
      })
      .getStyle()}
`;

export const StyledMessagesMessage = styled(Message)`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
