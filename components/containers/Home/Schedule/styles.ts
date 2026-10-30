import styled, { keyframes } from 'styled-components'

import { reveal } from '~/styles/motion'
import { getThemeColor } from '~/utils'

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`

export const ScheduleWrapper = styled.div`
  width: 100%;
  display: none;
  ${reveal(160)}

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: block;
  }
`

export const Schedule = styled.div`
  width: 100%;
  padding: 18px 20px 20px;
  border-radius: 12px;
  border: 1px solid ${getThemeColor('line')};
  background-color: ${getThemeColor('panel')};
`

export const ScheduleLabel = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${getThemeColor('muted')};
`

export const ScheduleDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${getThemeColor('success')};
  animation: ${pulse} 2.4s ease-out infinite;
`

export const ScheduleTitle = styled.h2`
  margin-top: 10px;
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: -0.015em;
  color: ${getThemeColor('paper')};
`

export const ScheduleLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  padding: 9px 14px;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  color: ${getThemeColor('ink')};
  background-color: ${getThemeColor('paper')};
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  svg {
    font-size: 1.5rem;
    transition: transform 0.2s;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(244, 244, 245, 0.12);

    svg {
      transform: translateX(2px);
    }
  }
`
