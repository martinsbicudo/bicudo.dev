import React from 'react';

import { string, func, node, oneOfType } from 'prop-types';

import { StyledChoice } from './styled';

function Choices({ className, onClick, children }) {
  return (
    <StyledChoice className={className} onClick={onClick}>
      {children}
    </StyledChoice>
  );
}

Choices.propTypes = {
  className: string,
  onClick: func.isRequired,
  children: oneOfType([string, node]).isRequired,
};

Choices.defaultProps = {
  className: undefined,
};

export default Choices;
