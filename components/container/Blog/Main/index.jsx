import React from 'react';

import { node } from 'prop-types';

import { Main as MainCommon } from '@Common';

import { StyledMainContent } from './styled';

function Main({ children }) {
  return (
    <MainCommon>
      <StyledMainContent>{children}</StyledMainContent>
    </MainCommon>
  );
}

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
