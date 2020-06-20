import { createStyledComponent as styled } from '@Utils';

export const StyledMessageContainer = styled('li', ['robot'])`
  ${({ robot }) => (robot ? 'justify-content: flex-end;' : '')}
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
      transform: translateY(1rem);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  min-width: 12rem;
  font-size: 1.4rem;
  max-width: 90%;
  animation: message-fade 1s;
  padding: 1.5rem 2rem;
  border: 0.1rem solid rgba(100, 100, 100, 0.1);
  box-shadow: 0 0 1.5rem 0
    ${({ theme }) =>
      theme.TYPE === 'LIGHT'
        ? 'rgba(100, 100, 100, 0.2)'
        : 'rgba(0, 0, 0, 0.1)'};
  background-color: ${({ theme }) =>
    theme.TYPE === 'LIGHT' ? theme.COLOR.WHITE : 'rgba(100, 100, 100, .1)'};
  border-radius: 1.5rem 1.5rem
    ${({ robot }) => (robot ? '0 1.5rem' : '1.5rem 0')};
  text-align: ${({ robot }) => (robot ? 'right' : 'left')};

  ${({ theme, robot }) =>
    theme.GRID.set()
      .flex({
        reverse: robot,
        align: 'center',
      })
      .getStyle()}
`;

export const StyledMessageTime = styled('p', ['robot'])`
  text-align: ${({ robot }) => (robot ? 'right' : 'left')};
  padding: 0.5rem 1rem 0 1rem;
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
    theme.TYPE === 'LIGHT' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(0, 0, 0, .1)'};
  border: 0.1rem solid
    ${({ theme }) =>
      theme.TYPE === 'LIGHT' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)'};
  ${({ robot }) => `margin-${robot ? 'left' : 'right'}: 1.5rem;`}

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
        align: 'center',
      })
      .getStyle()}
`;
