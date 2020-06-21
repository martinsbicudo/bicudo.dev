import React from 'react';

import { Chat as ChatContainer } from '@Container';

function Chat() {
  return (
    <>
      <ChatContainer.Main>
        <ChatContainer.Messages />
      </ChatContainer.Main>
      <ChatContainer.Footer>
        <ChatContainer.Choices />
      </ChatContainer.Footer>
    </>
  );
}

export default Chat;
