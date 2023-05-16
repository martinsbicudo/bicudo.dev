import { Logo, Lang } from '@Commons'

import { useLang } from '~/hooks'

import * as S from './styles'

const Header = (): JSX.Element => {
  const lang = useLang()

  return (
    <S.Header>
      <S.HeaderLogoBox>
        <Logo />
        <Lang />
      </S.HeaderLogoBox>
      <S.HeaderWelcome>{lang.HOME.WELCOME}</S.HeaderWelcome>
      <S.HeaderTitle>{lang.HOME.TITLE}</S.HeaderTitle>
      {lang.HOME.ABOUT.map((TEXT, i) => (
        <S.HeaderText key={i}>{TEXT}</S.HeaderText>
      ))}
    </S.Header>
  )
}

export default Header
