import { createStyledComponent as styled } from '@Utils';

export const StyledMessageContainer = styled('li', ['robot'])`
  ${({ robot }) => (!robot ? 'justify-content: flex-end;' : '')}
  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        wrap: true,
      })
      .getStyle()}
`;

export const StyledMessage = styled('div', ['robot'])`
  @keyframes message-fade {
    from {
      transform: translateY(10px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  min-width: 120px;
  font-size: 1.4rem;
  max-width: 90%;
  animation: message-fade 1s;
  padding: 15px 20px;
  border: 1px solid rgba(100, 100, 100, 0.1);
  box-shadow: 0 0 15px 0
    ${({ theme }) =>
      theme.TYPE === 'LIGHT'
        ? 'rgba(100, 100, 100, 0.2)'
        : 'rgba(0, 0, 0, 0.1)'};
  background-color: ${({ theme }) =>
    theme.TYPE === 'LIGHT' ? theme.COLOR.WHITE : 'rgba(100, 100, 100, 0.1)'};
  border-radius: 15px 15px ${({ robot }) => (robot ? '15px 0' : '0 15px')};
  text-align: ${({ robot }) => (robot ? 'left' : 'right')};

  ${({ theme, robot }) =>
    theme.GRID.set()
      .flex({
        reverse: !robot,
        align: 'center',
      })
      .getStyle()}
`;

export const StyledMessageTime = styled('p', ['robot'])`
  text-align: ${({ robot }) => (robot ? 'left' : 'right')};
  padding: 5px 10px 0 10px;
  min-width: 100%;
`;

export const StyledIconBox = styled('figure', ['robot'])`
  min-width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  font-size: 1.8rem;
  color: ${({ theme }) =>
    theme.TYPE === 'LIGHT' ? theme.COLOR.DARK : theme.COLORS.LIGHT};
  background-color: ${({ theme }) =>
    theme.TYPE === 'LIGHT' ? 'rgba(100, 100, 100, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border: 1px solid
    ${({ theme }) =>
      theme.TYPE === 'LIGHT' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)'};
  ${({ robot }) => `margin-${robot ? 'right' : 'left'}: 15px;`}

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
        align: 'center',
      })
      .getStyle()}
`;
