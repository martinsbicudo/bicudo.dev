import React from 'react';

import { string, array, node, oneOfType } from 'prop-types';

import { StyledContainer } from './styled';

function Container({ className, children, ...props }) {
  return (
    <StyledContainer {...props} className={className}>
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  className: string,
  children: oneOfType([string, array, node]).isRequired,
};

Container.defaultProps = {
  className: undefined,
};

export default Container;
