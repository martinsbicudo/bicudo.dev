import CONSTANTS from '~/constants'

const HOME = {
  WELCOME: 'BEM-VINDO :)',
  TITLE: `Sou o ${CONSTANTS.PERSON.NAME}`,
  ABOUT: [
    `Front-end, apaixonado por tecnologia, ${CONSTANTS.PERSON.AGE} anos, brasileiro e nascido em Santos/SP.`,
    'No meu tempo livre eu gosto de jogar no celular, ler mangás, e assistir animes ou filmes/séries de ficção ciêntifica.',
  ],
  SCHEDULE: {
    TITLE: 'Quer marcar um papo comigo?',
    BUTTON_TEXT: {
      DESKTOP: 'CLIQUE AQUI',
      MOBILE: 'MARCAR UM PAPO',
    },
  },
  CONTRIBUTIONS: {
    TITLE: (
      <>
        Últimas contribuições |{' '}
        <span>{CONSTANTS.GITHUB_CONTRIBUTIONS.RANGE_DAYS}</span> dias
      </>
    ),
  },
}

export default HOME
