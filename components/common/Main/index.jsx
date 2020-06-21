import React from 'react';

import { node } from 'prop-types';

import { StyledMain } from './styled';

function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
