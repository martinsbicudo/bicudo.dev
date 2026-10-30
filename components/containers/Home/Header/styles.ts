import styled from 'styled-components'

import { reveal } from '~/styles/motion'
import { getThemeColor } from '~/utils'

export const Header = styled.header`
  width: 100%;
  ${reveal(0)}
`

export const HeaderLogoBox = styled.div`
  width: 100%;
  margin-bottom: 28px;
`

export const HeaderTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.05;
  font-weight: 600;
  letter-spacing: -0.035em;
  color: ${getThemeColor('paper')};
`

export const HeaderRole = styled.p`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${getThemeColor('muted')};
`

export const HeaderText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  margin-top: 16px;
  color: ${getThemeColor('text')};
`

export const HeaderSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
  margin-bottom: 4px;
  list-style: none;
`

export const HeaderSkill = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  line-height: 1;
  padding: 6px 9px;
  border-radius: 6px;
  border: 1px solid ${getThemeColor('line')};
  color: ${getThemeColor('muted')};
  background-color: ${getThemeColor('panel')};
`
