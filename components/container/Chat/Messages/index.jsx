import React, { useRef } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { useUpdateEffect } from 'react-use';

import moment from 'moment';

import { Date } from '@Common';
import { useRobot } from '@Hook';

import { StyledMessages, StyledMessagesMessage } from './styled';

function Messages() {
  const scrollbarRef = useRef();
  const { messages } = useRobot();

  function scrollBottom() {
    const { scrollToBottom } = scrollbarRef.current;

    return scrollToBottom();
  }

  function renderMessage(value) {
    const isMoment = value instanceof moment;

    if (isMoment) {
      return <Date key={value.format('HH:mm:ss:SSSS')} time={value} />;
    }

    const { message, robot, time } = value;

    return (
      <StyledMessagesMessage
        robot={robot}
        time={time.format('HH:mm')}
        key={`message-${time.format('HH:mm:ss:SSSS')}`}
      >
        {message}
      </StyledMessagesMessage>
    );
  }

  useUpdateEffect(() => {
    scrollBottom();
  }, [messages]);

  return (
    <Scrollbar ref={scrollbarRef}>
      <StyledMessages>{messages.map(renderMessage)}</StyledMessages>
    </Scrollbar>
  );
}

export default Messages;
