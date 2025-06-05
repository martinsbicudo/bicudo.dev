import PERSON from './person'

const HOME = {
  WELCOME: (
    <>
      <i>👋</i> WELCOME
    </>
  ),
  TITLE: `I'm ${PERSON.NAME}`,
  ABOUT: [
    `Software Engineer with 9+ years of experience, specialized in React, Next.js and scalable web architectures.`,
    'Committed to building fast, accessible, and maintainable applications.',
  ],
  SCHEDULE: {
    TITLE: 'Shall we schedule a meet?',
    BUTTON_TEXT: {
      DESKTOP: 'CLICK HERE',
      MOBILE: "LET'S TALK",
    },
  },
}

export default HOME
