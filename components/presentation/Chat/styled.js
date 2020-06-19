import { createStyledComponent as styled } from '@Utils';

export const StyledChat = styled('div')`
  height: 100%;
  min-height: 50rem;

  ${({ theme }) =>
    theme.GRID.HELPERS.setResponsive({
      '>plus': 'padding: 4rem 2rem;',
      '>mobile&<plus': 'padding: 3rem 1rem;',
      '<mobile': 'padding: 2rem 0;',
    })}
`;

export const StyledChatContainer = styled('div')`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS[theme.TYPE]};
  position: relative;
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 2rem 0
    ${({ theme }) =>
      theme.TYPE === 'LIGHT'
        ? 'rgba(100, 100, 100, 0.4)'
        : 'rgba(0, 0, 0, 0.3)'};
  border: 0.1rem solid rgba(100, 100, 100, 0.1);

  ${({ theme }) =>
    theme.GRID.HELPERS.setResponsive({
      '>tablet': 'padding: 0 4rem;',
      '>plus&<tablet': 'padding: 0 2rem;',
    })}
`;

export const StyledChatAside = styled('aside')`
  flex: 1 0 30%;
  min-width: 22.5rem;

  ${({ theme }) =>
    theme.GRID.HELPERS.setResponsive({
      '>desktop': 'padding: 7rem 2rem 3rem 3rem;',
      '>tablet&<desktop': `padding: 6rem 2rem 3rem;`,
      '<tablet': `
        display: none;
      `,
    })}
`;

export const StyledChatMain = styled('main')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 100%;
  overflow-y: hidden;

  ${({ theme }) =>
    theme.GRID.HELPERS.setResponsive({
      '>plus': 'padding: 0 4rem 3rem;',
      '<plus': 'padding: 1rem 3rem 2rem;',
    })}
`;

export const StyledMessagesBox = styled('div')`
  flex: 1;
  width: calc(100% + 3rem);
  margin: 0 -1.5rem;
`;

export const StyledChatTyping = styled('p')`
  padding: 1rem 0;
  text-align: right;
  letter-spacing: 0.1rem;
  opacity: 0.5;
  line-height: 1.2rem;
  height: 3.2rem;
  border-bottom: 0.1rem dashed rgba(100, 100, 100, 0.2);
`;

export const StyledChatChoices = styled('ul')`
  padding-top: 2rem;
`;
