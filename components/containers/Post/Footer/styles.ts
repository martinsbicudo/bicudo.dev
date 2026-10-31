import { Container } from '@Commons'
import NextLink from 'next/link'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Footer = styled.footer`
  width: 100%;
  margin-top: 96px;
  border-top: 1px solid ${getThemeColor('line')};
`

export const FooterContent = styled(Container)`
  max-width: 820px;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  padding-top: 28px;
  padding-bottom: 96px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 32px;
  }
`

export const FooterCopyright = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.2rem;
  color: ${getThemeColor('muted')};
`

export const FooterSeparator = styled.span`
  color: ${getThemeColor('lineStrong')};
`

export const FooterMadeBy = styled(NextLink)`
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

export const FooterAuthor = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${getThemeColor('paper')};

  img {
    transition: transform 0.2s;
  }

  ${FooterMadeBy}:hover & img {
    transform: rotate(-8deg);
  }
`
