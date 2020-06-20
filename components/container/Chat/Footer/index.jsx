import React from 'react';

import { node } from 'prop-types';

import { useRobot } from '@Hook';

import { StyledFooter, StyledFooterTyping } from './styled';

function Footer({ children }) {
  const { isTyping } = useRobot();

  return (
    <StyledFooter>
      <StyledFooterTyping>
        {isTyping && 'Robot is typing...'}
      </StyledFooterTyping>
      {children}
    </StyledFooter>
  );
}

Footer.propTypes = {
  children: node.isRequired,
};

export default Footer;
