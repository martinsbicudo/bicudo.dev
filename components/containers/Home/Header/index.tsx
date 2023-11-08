import { Logo } from '@Commons'

import { HOME } from '~/constants'

import * as S from './styles'

const Header = (): JSX.Element => {
  return (
    <S.Header>
      <S.HeaderLogoBox>
        <Logo />
      </S.HeaderLogoBox>
      <S.HeaderWelcome>{HOME.WELCOME}</S.HeaderWelcome>
      <S.HeaderTitle>{HOME.TITLE}</S.HeaderTitle>
      <S.HeaderSkills>
        <S.HeaderSkill>react.js</S.HeaderSkill>
        <S.HeaderSkill>next.js</S.HeaderSkill>
        <S.HeaderSkill>javascript</S.HeaderSkill>
        <S.HeaderSkill>typescript</S.HeaderSkill>
      </S.HeaderSkills>
      {HOME.ABOUT.map((TEXT, i) => (
        <S.HeaderText key={i}>{TEXT}</S.HeaderText>
      ))}
    </S.Header>
  )
}

export default Header
