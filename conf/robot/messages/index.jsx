import bicudo from './bicudo';
import blog from './blog';
import contato from './contato';

export default [
  <p key="first-message">
    Olá humano, bem-vindo ao <strong>Portfólio do Bicudo</strong>
    <br />
    Meu nome é <strong>Robot</strong> e irei ajuda-lo nessa jornada :)
  </p>,
  {
    message: 'Como posso ajuda-lo?',
    choices: [
      {
        message: (
          <p>
            Quero saber sobre o{' '}
            <strong>
              <i>Blog</i>
            </strong>
          </p>
        ),
        answer: blog,
      },
      {
        message: 'Quero entrar em contato',
        answer: contato,
      },
      {
        message: 'Quero saber mais sobre o Bicudo',
        answer: bicudo,
      },
    ],
  },
];
