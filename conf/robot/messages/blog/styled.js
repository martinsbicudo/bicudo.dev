import { createStyledComponent as styled } from '@Utils';

export const StyledPostsList = styled('ul')`
  list-style: none;
`;

export const StyledPostsPost = styled('li')`
  padding: 10px 25px;
  border-radius: 20px;
  cursor: pointer;
  transition: opacity 0.2s, border-color 0.3s;
  border: 1px dashed transparent;
  text-align: center;
  margin-top: 1rem;

  ${({ theme }) =>
    theme.TYPE === 'LIGHT'
      ? 'background-color: rgba(150, 150, 150, 0.1);'
      : 'background-color: rgba(100, 100, 100, 0.1);'}

  &:not(:hover) {
    opacity: 0.6;
  }

  &:hover {
    border-color: ${({ theme }) => theme.COLORS[theme.COLOR]};
  }
`;
