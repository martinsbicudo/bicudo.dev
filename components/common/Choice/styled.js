import { createStyledComponent as styled } from '@Utils';

export const StyledChoice = styled('button')`
  background-color: ${({ theme }) => theme.COLORS[theme.COLOR]};
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  margin: 1rem;
  font-size: 1.6rem;
  transition: box-shadow 0.2s, transform 0.1s;
  will-change: box-shadow transform;

  &:not(:hover) {
    box-shadow: 0 0 1rem 0.3rem rgba(100, 100, 100, 0.1);
  }

  &:hover {
    transform: scale(1.1);
  }
`;
