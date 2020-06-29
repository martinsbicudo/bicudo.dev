import { createStyledComponent as styled } from '@Utils';

export const StyledFooterTyping = styled('p')`
  padding: 10px 0;
  text-align: right;
  letter-spacing: 1px;
  opacity: 0.5;
  line-height: 1.2rem;
  height: 32px;
  border-bottom: 1px dashed rgba(100, 100, 100, 0.2);

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>plus': 'margin-bottom: 20px;',
        '<plus': 'margin-bottom: 10px;',
      })
      .getStyle()}
`;
