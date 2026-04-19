import { Logo } from '@Commons'

import { HOME } from '~/constants'

import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogoBox>
        <Logo />
      </S.HeaderLogoBox>
      <S.HeaderTitle>{HOME.TITLE}</S.HeaderTitle>
      <S.HeaderSkills>
        <S.HeaderSkill>react.js</S.HeaderSkill>
        <S.HeaderSkill>next.js</S.HeaderSkill>
        <S.HeaderSkill>typescript</S.HeaderSkill>
        <S.HeaderSkill>node.js</S.HeaderSkill>
      </S.HeaderSkills>
      {HOME.ABOUT.map((TEXT, i) => (
        <S.HeaderText key={i}>{TEXT}</S.HeaderText>
      ))}
    </S.Header>
  )
}

export default Header
