import NextLink from 'next/link'

import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const OpenSourceItem = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid ${getThemeColor('line')};
  background-color: ${getThemeColor('panel')};
  transition:
    border-color 0.2s,
    background-color 0.2s;
`

export const OpenSourceItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  svg {
    font-size: 1.6rem;
    color: ${getThemeColor('muted')};
    transition:
      color 0.2s,
      transform 0.2s;
  }
`

export const OpenSourceItemWrapper = styled(NextLink)`
  text-decoration: none;
  color: ${getThemeColor('paper')};
  min-width: 260px;
  flex: calc(50% - 10px);

  &:hover ${OpenSourceItem} {
    border-color: ${getThemeColor('lineStrong')};
    background-color: ${getThemeColor('panelHover')};
  }

  &:hover ${OpenSourceItemHeader} svg {
    color: ${getThemeColor('paper')};
    transform: translate(1px, -1px);
  }
`

export const OpenSourceItemTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.3rem;
  font-weight: 600;
`

export const OpenSourceItemDescription = styled.p`
  flex: 1;
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${getThemeColor('muted')};
`
