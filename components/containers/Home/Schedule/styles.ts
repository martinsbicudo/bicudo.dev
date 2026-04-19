import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const ScheduleWrapper = styled.div`
  width: 100%;
  display: none;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: initial;
  }
`

export const Schedule = styled.div`
  width: 100%;
  padding: 1px;
  border-radius: 5px;
`

export const ScheduleContent = styled.div`
  width: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  color: ${getThemeColor('gray')};
  background-color: ${getThemeColor('gray4')};
`

export const ScheduleTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 200;
  color: ${getThemeColor('gray')};
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
  font-weight: 500;
  cursor: pointer;
`
