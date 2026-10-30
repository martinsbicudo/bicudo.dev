import NextLink from 'next/link'

import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const SideProjectItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px 7px 8px;
  border-radius: 8px;
  border: 1px solid ${getThemeColor('line')};
  background-color: ${getThemeColor('panel')};
  transition:
    border-color 0.2s,
    background-color 0.2s;

  svg {
    font-size: 1.4rem;
    color: ${getThemeColor('muted')};
    transition:
      color 0.2s,
      transform 0.2s;
  }
`

export const SideProjectItemWrapper = styled(NextLink)`
  text-decoration: none;
  color: ${getThemeColor('paper')};

  &:hover ${SideProjectItem} {
    border-color: ${getThemeColor('lineStrong')};
    background-color: ${getThemeColor('panelHover')};

    svg {
      color: ${getThemeColor('paper')};
      transform: translate(1px, -1px);
    }
  }
`

export const SideProjectItemLogo = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
`

export const SideProjectItemName = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
`
