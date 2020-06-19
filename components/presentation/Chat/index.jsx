import React from 'react';

import { Container } from '@Common';
import { useRobot } from '@Hook';

import {
  StyledChat,
  StyledChatContainer,
  StyledChatAside,
  StyledChatMain,
  StyledMessagesBox,
  StyledChatTyping,
} from './styled';

function Chat() {
  const { messages, isTyping } = useRobot();

  return (
    <StyledChat>
      <Container>
        <StyledChatContainer>
          <StyledChatAside>Aside</StyledChatAside>
          <StyledChatMain>
            <StyledMessagesBox>{JSON.stringify(messages)}</StyledMessagesBox>
            <StyledChatTyping>
              {isTyping && 'Robot is typing...'}
            </StyledChatTyping>
          </StyledChatMain>
        </StyledChatContainer>
      </Container>
    </StyledChat>
  );
}

export default Chat;
