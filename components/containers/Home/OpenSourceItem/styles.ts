import NextLink from 'next/link'

import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const OpenSourceItem = styled.li`
  padding: 1px;
  border-radius: 5px;
  height: 100%;
`

export const OpenSourceItemWrapper = styled(NextLink)`
  position: relative;
  text-decoration: none;
  color: ${getThemeColor('white')};
  min-width: 300px;
  flex: calc(50% - 10px);
  transition: opacity 0.2s;

  &:nth-child(1) {
    ${OpenSourceItem} {
      background: ${getThemeColor('gradient3')};
    }
  }

  &:nth-child(2) {
    ${OpenSourceItem} {
      background: ${getThemeColor('gradient4')};
    }
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    min-width: 250px;
  }

  &:hover {
    position: relative;
    z-index: 1;
  }
`

export const OpenSourceItemContent = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  background-color: ${getThemeColor('black')};
`

export const OpenSourceItemTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
  padding-bottom: 3px;
  font-weight: 500;
`

export const OpenSourceItemDescription = styled.p`
  flex: 1;
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 200;
`

export const OpenSourceItemURL = styled.span`
  font-size: 1.4rem;
  text-decoration: underline;
`
