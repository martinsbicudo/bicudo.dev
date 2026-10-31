import NextLink from 'next/link'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Copyright = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.2rem;
  color: ${getThemeColor('muted')};
`

export const CopyrightSeparator = styled.span`
  color: ${getThemeColor('lineStrong')};
`

export const CopyrightMadeBy = styled(NextLink)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;

  &:hover {
    color: ${getThemeColor('paper')};
  }
`

export const CopyrightAuthor = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${getThemeColor('paper')};

  img {
    transition: transform 0.2s;
  }

  ${CopyrightMadeBy}:hover & img {
    transform: rotate(-8deg);
  }
`
