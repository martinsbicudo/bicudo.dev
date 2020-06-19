import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';

import moment from 'moment';
import { useRouter } from 'next/router';
import { node } from 'prop-types';

import { messages as initialMessages, config } from '@Conf/robot';

import RobotContext from '.';

const {
  INITIAL_MESSAGES_DELAY,
  TYPING_DELAY,
  ANSWER_DELAY,
  ACTION_DELAY,
} = config;

function RobotProvider({ children }) {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  function getTimeAlreadyExist(time, currentMessages) {
    const getFormatDate = (t) => t.format('MM-DD-YYYY');
    const date = getFormatDate(time);

    return currentMessages.some(
      (m) => m instanceof moment && date === getFormatDate(m)
    );
  }

  function addMessage(message) {
    setMessages((currentMessages) => {
      const time = moment();
      const timeAlreadyExist = getTimeAlreadyExist(time, currentMessages);

      return [
        ...currentMessages,
        ...(timeAlreadyExist ? [] : [time]),
        {
          ...(message.message ? message : { message }),
          robot: message?.robot ?? false,
          time,
        },
      ];
    });
  }

  function setAsyncMessage(message, delay = INITIAL_MESSAGES_DELAY) {
    setIsTyping(true);
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
        addMessage({
          ...(message.message ? message : { message }),
          robot: true,
        });
        setIsTyping(false);
      }, delay)
    );
  }

  async function setDelay(delay) {
    await new Promise((resolve) => setTimeout(() => resolve(), delay));
  }

  async function setMessage(message) {
    addMessage(message?.message ?? message);

    if (message?.message?.answer) {
      const { answer } = message.message;
      await setDelay(TYPING_DELAY);
      await setAsyncMessage(answer, ANSWER_DELAY);

      if (answer?.action) {
        await setDelay(ACTION_DELAY);
        answer.action({ router });
      }
    }
  }

  useEffectOnce(() => {
    (async () => {
      for await (const message of initialMessages) {
        await setAsyncMessage(message);
      }
    })();
  });

  return (
    <RobotContext.Provider
      value={{ messages, isTyping, setMessage, setIsTyping }}
    >
      {children}
    </RobotContext.Provider>
  );
}

RobotProvider.propTypes = {
  children: node.isRequired,
};

export default RobotProvider;
