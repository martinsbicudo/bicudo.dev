import React from 'react';

import { node } from 'prop-types';

import { Footer as FooterCommon } from '@Common';
import { useRobot } from '@Hook';

import { StyledFooterTyping } from './styled';

function Footer({ children }) {
  const { isTyping } = useRobot();

  return (
    <FooterCommon>
      <StyledFooterTyping>
        {isTyping && 'Robot is typing...'}
      </StyledFooterTyping>
      {children}
    </FooterCommon>
  );
}

Footer.propTypes = {
  children: node.isRequired,
};

export default Footer;
