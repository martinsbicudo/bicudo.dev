import NextLink from 'next/link'

import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const OpenSourceItemWrapper = styled(NextLink)`
  position: relative;
  text-decoration: none;
  color: ${getThemeColor('white')};
  min-width: 300px;
  flex: calc(50% - 10px);
  transition: opacity 0.2s;

  ${up('md')} {
    min-width: 250px;
  }

  &:hover {
    position: relative;
    z-index: 1;
  }
`

export const OpenSourceItem = styled.li`
  padding: 1px;
  border-radius: 5px;
  background: ${getThemeColor('gradient')};
`

export const OpenSourceItemContent = styled.div`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  background-color: ${getThemeColor('black')};
`

export const OpenSourceItemTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 500;
`

export const OpenSourceItemDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 200;
`
