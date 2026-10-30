import { Container } from '@Commons'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Footer = styled.footer`
  width: 100%;
  margin-top: 80px;
  border-top: 1px solid ${getThemeColor('line')};
  background-color: rgba(10, 10, 10, 0.6);
`

export const FooterContent = styled(Container)`
  max-width: 820px;
  padding-top: 48px;
`

export const FooterTop = styled.div`
  padding-bottom: 28px;
  border-bottom: 1px solid ${getThemeColor('line')};
`

export const FooterIdentity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`

export const FooterTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${getThemeColor('paper')};
`

export const FooterSubtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.2rem;
  color: ${getThemeColor('muted')};
`

export const FooterAbout = styled.p`
  width: 100%;
  max-width: 560px;
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${getThemeColor('text')};
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0 96px;
`

export const FooterSocialsBox = styled.div`
  max-width: 100%;
`
