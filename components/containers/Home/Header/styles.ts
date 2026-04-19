import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Header = styled.header`
  width: 100%;
`

export const HeaderLogoBox = styled.div`
  width: 100%;
`

export const HeaderTitle = styled.h1`
  font-size: 5rem;
  font-family: Arial;
  line-height: 5rem;
  margin: 10px 0;
  background: ${getThemeColor('gradient')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const HeaderSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding-bottom: 5px;
  list-style: none;
`

export const HeaderSkill = styled.li`
  font-size: 1.2rem;
  border-radius: 5px;
  color: ${getThemeColor('gray')};
  background-color: ${getThemeColor('gray4')};
  padding: 2px 7px;
`

export const HeaderText = styled.p`
  font-size: 1.8rem;
  line-height: 2.2rem;
  margin-top: 10px;
  font-weight: 100;
  color: ${getThemeColor('gray')};
`
