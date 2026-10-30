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
      <S.HeaderRole>{HOME.ROLE}</S.HeaderRole>
      <S.HeaderSkills>
        {HOME.SKILLS.map((skill) => (
          <S.HeaderSkill key={skill}>{skill}</S.HeaderSkill>
        ))}
      </S.HeaderSkills>
      {HOME.ABOUT.map((TEXT, i) => (
        <S.HeaderText key={i}>{TEXT}</S.HeaderText>
      ))}
    </S.Header>
  )
}

export default Header
