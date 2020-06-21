import React from 'react';

import { node } from 'prop-types';

import { Container } from '@Common';

import { StyledPage, StyledPageContent } from './styled';

function Box({ children }) {
  return (
    <StyledPage>
      <Container>
        <StyledPageContent>{children}</StyledPageContent>
      </Container>
    </StyledPage>
  );
}

Box.propTypes = {
  children: node.isRequired,
};

export default Box;
