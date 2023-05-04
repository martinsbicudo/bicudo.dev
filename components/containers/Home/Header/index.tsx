import { Logo } from '@Commons'

import CONSTANTS from '~/constants'

import * as S from './styles'

const Header = (): JSX.Element => {
  return (
    <S.Header>
      <figure>
        <Logo />
      </figure>
      <S.HeaderWelcome>BEM-VINDO :)</S.HeaderWelcome>
      <S.HeaderTitle>Sou o {CONSTANTS.NAME}</S.HeaderTitle>
      <S.HeaderText>
        Atualmente trabalhando como front-end, apaixonado por tecnologia,{' '}
        {CONSTANTS.AGE} anos, brasieiro e nascido em Santos/SP.
      </S.HeaderText>
      <S.HeaderText>
        No meu tempo livre eu gosto de jogar no celular, ler mangás, e assistir
        animes ou filmes/séries de ficção ciêntifica.
      </S.HeaderText>
    </S.Header>
  )
}

export default Header
