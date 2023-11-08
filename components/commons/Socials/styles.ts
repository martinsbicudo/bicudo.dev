import { up } from 'styled-breakpoints'
import styled, { css } from 'styled-components'

import { getThemeColor } from '~/utils'

import { StyledSocialsItemScheduleProps } from './interface'

export const Socials = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const SocialsImageBox = styled.figure`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
`

export const SocialsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-decoration: none;
  padding: 12px;
  border-radius: 50px;
  color: ${getThemeColor('gray')};
  background-color: ${getThemeColor('black')};
  will-change: color;
  transition: color 0.2s;
  cursor: pointer;

  span {
    margin-right: 5px;
  }

  svg {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }

  &:hover {
    color: ${getThemeColor('white')};
  }
`

export const SocialsItemSchedule = styled.li<StyledSocialsItemScheduleProps>`
  padding: 1px;
  border-radius: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
  background: ${getThemeColor('gradient')};

  ${SocialsLink} {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${({ withResponsive }) =>
    withResponsive &&
    css`
      ${up('md')} {
        &:last-child {
          display: none;
        }
      }
    `}
`

export const SocialsItem = styled.li`
  margin-top: 5px;
  margin-bottom: 5px;

  &:last-child ${SocialsLink} {
    color: ${getThemeColor('white')};
    background-color: ${getThemeColor('black')};
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`
