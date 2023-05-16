import CONSTANTS from '~/constants'

const HOME = {
  WELCOME: 'WELCOME :)',
  TITLE: `I'm ${CONSTANTS.PERSON.NAME}`,
  ABOUT: [
    `Front-end, passionate about technology, ${CONSTANTS.PERSON.AGE} years old, Brazilian and born in Santos/SP.`,
    'In my free time I like to play games on my cell phone, read manga, and watch anime or sci-fi movies/series.',
  ],
  SCHEDULE: {
    TITLE: 'Want to book a meet with me?',
    BUTTON_TEXT: {
      DESKTOP: 'CLICK HERE',
      MOBILE: 'BOOK A MEET',
    },
  },
  CONTRIBUTIONS: {
    TITLE: (
      <>
        The last <span>{CONSTANTS.GITHUB_CONTRIBUTIONS.RANGE_DAYS}</span> days
        contributions
      </>
    ),
  },
}

export default HOME
