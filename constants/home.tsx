import PERSON from './person'

const HOME = {
  TITLE: PERSON.NAME,
  ROLE: PERSON.ROLE,
  ABOUT: [
    `10+ years building web products with React, Next.js and TypeScript, with a focus on fast interfaces and architectures that scale.`,
    <>
      Co-founder of{' '}
      <a href="https://klappay.com" target="_blank" rel="noreferrer">
        Klap
      </a>
      , where we&apos;re reinventing how the world gets paid in crypto:
      non-custodial, developer-first, with every payment settling straight to
      the merchant&apos;s wallet.
    </>,
  ],
  SKILLS: ['react', 'next.js', 'typescript', 'node.js'],
  SCHEDULE: {
    LABEL: 'Open to chat',
    TITLE: 'Have a project or idea in mind?',
    BUTTON_TEXT: 'Book a call',
  },
}

export default HOME
