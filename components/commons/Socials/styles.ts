import styled, { css } from 'styled-components'

import { getThemeColor } from '~/utils'

import { StyledSocialsItemScheduleProps } from './interface'

export const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
`

export const SocialsLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 14px;
  list-style: none;
`

export const SocialsLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 0;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: ${getThemeColor('muted')};
  background: none;
  cursor: pointer;
  transition: color 0.2s;

  svg {
    font-size: 1.3rem;
  }

  &:hover {
    color: ${getThemeColor('paper')};
  }
`

export const SocialsSchedule = styled.a<StyledSocialsItemScheduleProps>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 14px;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  color: ${getThemeColor('ink')};
  background-color: ${getThemeColor('paper')};
  transition: transform 0.2s;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    transform: translateY(-1px);
  }

  ${({ $withResponsive, theme }) =>
    $withResponsive &&
    css`
      ${theme.breakpoints.up('md')} {
        display: none;
      }
    `}
`
