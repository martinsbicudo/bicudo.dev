import React from 'react';

import { useRouter } from 'next/router';
import { string } from 'prop-types';

import { Chat as ChatContainer } from '@Container';

import Content from '../Content';
import Layout from '../Layout';

function Chat({ sid }) {
  const router = useRouter();

  return (
    <Content sid={sid}>
      <Layout sid={sid || router.query.sid}>
        <ChatContainer.Main>
          <ChatContainer.Messages />
        </ChatContainer.Main>
        <ChatContainer.Footer>
          <ChatContainer.Choices />
        </ChatContainer.Footer>
      </Layout>
    </Content>
  );
}

Chat.getInitialProps = ({ query }) => query;

Chat.propTypes = {
  sid: string,
};

Chat.defaultProps = {
  sid: undefined,
};

export default Chat;
