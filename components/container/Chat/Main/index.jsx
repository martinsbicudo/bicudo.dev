import React from 'react';

import { node } from 'prop-types';

import { StyledMain, StyledMainMessages } from './styled';

function Main({ children }) {
  return (
    <StyledMain>
      <StyledMainMessages>{children}</StyledMainMessages>
    </StyledMain>
  );
}

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
