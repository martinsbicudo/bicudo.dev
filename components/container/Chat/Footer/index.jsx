import React from 'react';

import { useRobot } from '@Hook';

import {
  StyledFooter,
  StyledFooterTyping,
  StyledFooterChoices,
} from './styled';

function Footer() {
  const { isTyping } = useRobot();

  return (
    <StyledFooter>
      <StyledFooterTyping>
        {isTyping && 'Robot is typing...'}
      </StyledFooterTyping>
      <StyledFooterChoices>choices</StyledFooterChoices>
    </StyledFooter>
  );
}

export default Footer;
