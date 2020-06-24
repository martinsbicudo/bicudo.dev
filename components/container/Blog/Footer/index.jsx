import React from 'react';

import { node } from 'prop-types';

import { Footer as FooterCommon } from '@Common';

function Footer({ children }) {
  return <FooterCommon>{children}</FooterCommon>;
}

Footer.propTypes = {
  children: node.isRequired,
};

export default Footer;
