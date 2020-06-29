import React from 'react';

import { string } from 'prop-types';

import { Chat as ChatContainer, Layout } from '@Container';
import { withError } from '@Hoc';

function Chat({ sid }) {
  return (
    <Layout sid={sid}>
      <ChatContainer.Main>
        <ChatContainer.Messages />
      </ChatContainer.Main>
      <ChatContainer.Footer>
        <ChatContainer.Choices />
      </ChatContainer.Footer>
    </Layout>
  );
}

Chat.propTypes = {
  sid: string,
};

Chat.defaultProps = {
  sid: undefined,
};

export default withError(Chat);
