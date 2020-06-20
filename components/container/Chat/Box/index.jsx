import React from 'react';

import { node } from 'prop-types';

import { Container } from '@Common';

import { StyledBox, StyledBoxContent } from './styled';

function Box({ children }) {
  return (
    <StyledBox>
      <Container>
        <StyledBoxContent>{children}</StyledBoxContent>
      </Container>
    </StyledBox>
  );
}

Box.propTypes = {
  children: node.isRequired,
};

export default Box;
