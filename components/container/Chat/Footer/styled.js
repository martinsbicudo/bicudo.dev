import { createStyledComponent as styled } from '@Utils';

export const StyledFooter = styled('footer')`
  grid-area: footer;
  padding: 0 4rem 3rem;
`;

export const StyledFooterTyping = styled('p')`
  padding: 1rem 0;
  text-align: right;
  letter-spacing: 0.1rem;
  opacity: 0.5;
  line-height: 1.2rem;
  height: 3.2rem;
  border-bottom: 0.1rem dashed rgba(100, 100, 100, 0.2);
`;

export const StyledFooterChoices = styled('div')`
  padding-top: 2rem;
`;
