import React from 'react';

import moment from 'moment';
import { instanceOf, string } from 'prop-types';

import { StyledDateContainer, StyledDate } from './styled';

function Date({ className, time }) {
  function getFormatDate(t) {
    return t.format('MM-DD-YYYY');
  }

  function isToday(t) {
    const today = getFormatDate(moment());
    const date = getFormatDate(t);
    return today === date ? 'hoje' : false;
  }

  function isYesterday(t) {
    const yesteday = getFormatDate(moment().subtract(1, 'day'));
    const date = getFormatDate(t);
    return yesteday === date ? 'ontem' : false;
  }

  function getDate(t) {
    const [date] = [isToday, isYesterday, getFormatDate]
      .map((method) => method(t))
      .filter((value) => value);
    return date;
  }

  return (
    <StyledDateContainer className={className}>
      <StyledDate>{getDate(time)}</StyledDate>
    </StyledDateContainer>
  );
}

Date.propTypes = {
  className: string,
  time: instanceOf(moment).isRequired,
};

Date.defaultProps = {
  className: undefined,
};

export default Date;
