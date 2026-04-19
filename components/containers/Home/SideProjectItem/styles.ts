import NextLink from 'next/link'

import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const SideProjectItemWrapper = styled(NextLink)`
  text-decoration: none;
  color: ${getThemeColor('gray')};
  transition: opacity 0.2s;

  &:hover {
    color: ${getThemeColor('white')};
  }
`

export const SideProjectItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 3px 7px;
  border-radius: 5px;
  background-color: ${getThemeColor('gray4')};
`

export const SideProjectItemLogo = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  overflow: hidden;
`

export const SideProjectItemName = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
`
