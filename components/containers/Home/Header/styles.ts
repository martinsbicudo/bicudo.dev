import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Header = styled.header`
  width: 100%;
`

export const HeaderLogoBox = styled.div`
  width: 100%;
`

export const HeaderWelcome = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: 10px 12px;
  margin-top: 15px;
  border-radius: 5px;
  background-color: ${getThemeColor('black')};
`

export const HeaderTitle = styled.h1`
  font-size: 5rem;
  font-family: Arial;
  line-height: 5rem;
  margin: 15px 0 10px;
  background: ${getThemeColor('gradient')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const HeaderSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-bottom: 5px;
  list-style: none;
`

export const HeaderSkill = styled.li`
  font-size: 0.9rem;
  text-transform: uppercase;
  border-radius: 10px;
  border: 1px solid ${getThemeColor('gray')};
  color: ${getThemeColor('gray')};
  padding: 2px 7px;
`

export const HeaderText = styled.p`
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: 10px;
  font-weight: 100;
  color: ${getThemeColor('gray')};
`
