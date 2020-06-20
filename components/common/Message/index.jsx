import React from 'react';
import { AiOutlineUser, AiOutlineRobot } from 'react-icons/ai';

import { node, string, oneOfType, bool } from 'prop-types';

import {
  StyledMessageContainer,
  StyledMessage,
  StyledMessageTime,
  StyledIconBox,
} from './styled';

const Message = ({ className, children, robot, time }) => {
  function Icon() {
    return robot ? <AiOutlineRobot /> : <AiOutlineUser />;
  }

  return (
    <StyledMessageContainer robot={robot} className={className}>
      <StyledMessage robot={robot}>
        <StyledIconBox robot={robot}>
          <Icon />
        </StyledIconBox>
        {children}
      </StyledMessage>
      <StyledMessageTime robot={robot}>{time}</StyledMessageTime>
    </StyledMessageContainer>
  );
};

Message.propTypes = {
  className: string,
  children: oneOfType([node, string]).isRequired,
  robot: bool,
  time: string.isRequired,
};

Message.defaultProps = {
  className: undefined,
  robot: false,
};

export default Message;
