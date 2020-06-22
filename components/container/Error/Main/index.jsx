import React from 'react';

import { node } from 'prop-types';

import { Main as MainCommon } from '@Common';

function Main({ children }) {
  return <MainCommon>{children}</MainCommon>;
}

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
