const moment = require('moment');

function getBicudoAge() {
  const today = moment(new Date());
  const birthday = moment([1991, 6, 31]);

  return today.diff(birthday, 'years');
}

function getTimeExperience() {
  const today = moment(new Date());
  const startDate = moment([2016, 5, 1]);

  return today.diff(startDate, 'years');
}

module.exports = {
  IS_DEV: process.env.NODE_ENV === 'development',
  BICUDO: {
    NAME: 'Victor Martins Bicudo',
    AGE: getBicudoAge(),
    TIME_EXPERIENCE: getTimeExperience(),
    JOB: {
      POSITION: 'Front-End',
      COMPANY: {
        NAME: 'PagSeguro',
        URL: 'http://pagseguro.uol.com.br',
      },
    },
  },
};
