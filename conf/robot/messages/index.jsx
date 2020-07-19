import initialChoices from './initial-choices';

export default [
  <p key="first-message">
    Olá humano, bem-vindo ao <strong>Portfólio do Bicudo</strong>
    <br />
    Meu nome é <strong>Robot</strong> e irei ajuda-lo nessa jornada :)
  </p>,
  {
    message: 'Como posso ajuda-lo?',
    choices: initialChoices,
  },
];
