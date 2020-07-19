import bicudo from './bicudo';
import blog from './blog';
import contato from './contato';

function getInitialChoices() {
  return [
    {
      message: (
        <p>
          Quero saber sobre o <strong>Blog</strong>
        </p>
      ),
      answer: blog(getInitialChoices),
    },
    {
      message: (
        <p>
          Quero entrar em{' '}
          <u>
            <i>contato</i>
          </u>
        </p>
      ),
      answer: contato(getInitialChoices),
    },
    {
      message: (
        <p>
          Quero saber mais sobre o <strong>Bicudo</strong>
        </p>
      ),
      answer: bicudo(getInitialChoices),
    },
  ];
}

export default getInitialChoices();
