import React from 'react';

import { node } from 'prop-types';

import { StyledFooter } from './styled';

function Footer({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}

Footer.propTypes = {
  children: node.isRequired,
};

export default Footer;
