import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const ScheduleWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  display: none;

  ${up('lg')} {
    display: initial;
  }
`

export const Schedule = styled.div`
  width: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  color: ${getThemeColor('white')};
  background-color: ${getThemeColor('gray3')};
`

export const ScheduleTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 200;
`

export const ScheduleLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  margin-top: 10px;
  padding: 7px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${getThemeColor('main')};
  background-color: ${getThemeColor('white')};
  cursor: pointer;
`
