import React from 'react';

import { useRobot } from '@Hook';

import { StyledMain, StyledMainMessages } from './styled';

function Main() {
  const { messages } = useRobot();

  return (
    <StyledMain>
      <StyledMainMessages>{JSON.stringify(messages)}</StyledMainMessages>
    </StyledMain>
  );
}

export default Main;
