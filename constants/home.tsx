import GITHUB from './github'
import PERSON from './person'

const HOME = {
  WELCOME: 'WELCOME :)',
  TITLE: `I'm ${PERSON.NAME}`,
  ABOUT: [
    `Front-end, passionate about technology, ${PERSON.AGE} years old, Brazilian and born in Santos/SP.`,
    'In my free time I like to play games on my cell phone, read manga, and watch anime or science fiction films/series.',
  ],
  SCHEDULE: {
    TITLE: 'Shall we schedule a meet?',
    BUTTON_TEXT: {
      DESKTOP: 'CLICK HERE',
      MOBILE: 'SCHEDULE A MEET',
    },
  },
  CONTRIBUTIONS: {
    TITLE: (
      <>
        LATEST CONTRIBUTIONS | <span>{GITHUB.CONTRIBUTIONS.RANGE_DAYS}</span>{' '}
        dias
      </>
    ),
  },
}

export default HOME
