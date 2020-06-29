import { createStyledComponent as styled } from '@Utils';

export const StyledLightbox = styled('div')`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme.TYPE === 'LIGHT' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(100, 100, 100, 0.5)'};
`;
