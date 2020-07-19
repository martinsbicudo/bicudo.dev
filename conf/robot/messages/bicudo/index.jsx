import constants from '@Conf/constants';

import Router from 'next/router';

import { Link } from '@Common';

const { BICUDO } = constants;

export default (getInitialChoices) => ({
  message: (
    <div>
      <p>
        <i>
          - Olar, me chamo <strong>{BICUDO.NAME}</strong>, {BICUDO.AGE} anos,{' '}
          {BICUDO.JOB.POSITION} na{' '}
          <Link target="_blank" href={BICUDO.JOB.COMPANY.URL}>
            {BICUDO.JOB.COMPANY.NAME}
          </Link>
          . Apaixonado por técnologia e sempre em busca de novos conhecimentos.
          Trabalho na área há {BICUDO.TIME_EXPERIENCE} anos e atualmente não me
          vejo trabalhando com outra coisa - By <strong>Bicudo</strong>
        </i>
      </p>
      <br />
      <p>Quer saber mais?</p>
    </div>
  ),
  choices: [
    {
      message: 'Sim',
      answer: {
        message: 'Perfeito, aguarde um momento...',
        action() {
          return Router.push('/blog/[pid]', '/blog/o-bicudo');
        },
      },
    },
    {
      message: 'Não',
      answer: {
        message: 'Posso ajuda-lo com algo mais?',
        choices: getInitialChoices,
      },
    },
  ],
});
