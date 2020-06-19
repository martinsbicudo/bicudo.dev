import React from 'react';

import { string, array, node, oneOfType } from 'prop-types';

import { StyledContainer } from './styled';

function Container({ children, ...props }) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}

Container.propTypes = {
  children: oneOfType([string, array, node]).isRequired,
};

export default Container;
