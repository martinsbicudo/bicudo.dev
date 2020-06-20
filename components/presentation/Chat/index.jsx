import React from 'react';

import { Chat as ChatContainer } from '@Container';

function Chat() {
  return (
    <ChatContainer.Box>
      <ChatContainer.Aside />
      <ChatContainer.Main>
        <ChatContainer.Messages />
      </ChatContainer.Main>
      <ChatContainer.Footer>
        <ChatContainer.Choices />
      </ChatContainer.Footer>
    </ChatContainer.Box>
  );
}

export default Chat;
