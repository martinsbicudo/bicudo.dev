import React from 'react';
import reactToString from 'react-to-string';

import { Choice } from '@Common';
import { useRobot } from '@Hook';

import { StyledChoices } from './styled';

function Choices() {
  const { messages, setMessage } = useRobot();

  function getCurrentChoices() {
    const currentMessages = [...messages];
    const [{ choices = [] } = {}] = currentMessages.reverse();

    return choices;
  }

  async function handleSetMessage(message) {
    await setMessage({
      message,
    });
  }

  function getChoiceKey(choice) {
    return reactToString(choice?.message ?? choice)
      .toLowerCase()
      .replace(/ /g, '-');
  }

  function renderChoices() {
    const choices = getCurrentChoices();

    return (
      Boolean(choices.length) && (
        <StyledChoices>
          {choices.map((choice) => (
            <Choice
              onClick={() => handleSetMessage(choice)}
              key={getChoiceKey(choice)}
            >
              {choice?.message ?? choice}
            </Choice>
          ))}
        </StyledChoices>
      )
    );
  }

  return renderChoices();
}

export default Choices;
