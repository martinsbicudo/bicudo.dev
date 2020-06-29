import { createStyledComponent as styled } from '@Utils';

export const StyledChoice = styled('button')`
  background-color: ${({ theme }) => theme.COLORS[theme.COLOR]};
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  margin: 10px;
  font-size: 1.6rem;
  transition: box-shadow 0.2s, transform 0.1s;
  will-change: box-shadow transform;

  &:not(:hover) {
    box-shadow: 0 0 10px 3px rgba(100, 100, 100, 0.1);
  }

  &:hover {
    transform: scale(1.1);
  }
`;
