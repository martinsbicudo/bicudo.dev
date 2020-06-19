import { useContext } from 'react';

import { RobotContext } from '@Context';

export default function useRobot() {
  const { messages, isTyping, setMessage, setIsTyping } = useContext(
    RobotContext
  );

  return { messages, isTyping, setMessage, setIsTyping };
}
