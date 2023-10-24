import { Container } from '@Commons'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Footer = styled.footer`
  width: 100%;
  margin-top: 50px;
  background-color: ${getThemeColor('gray5')};
  border-top: 1px solid ${getThemeColor('gray3')};
`

export const FooterContent = styled(Container)`
  padding-top: 50px;
`

export const FooterTop = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid ${getThemeColor('gray3')};
`

export const FooterImageBox = styled.figure`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const FooterImageInfos = styled.div`
  padding-left: 15px;
`

export const FooterImageTitle = styled.figcaption`
  font-size: 2.4rem;
  font-weight: 500;
`

export const FooterImageSubtitle = styled.span`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 200;
  color: ${getThemeColor('gray')};
`

export const FooterAbout = styled.p`
  width: 100%;
  max-width: 500px;
  font-size: 1.6rem;
  font-weight: 200;
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`

export const FooterSocialsBox = styled.div`
  max-width: 250px;

  ${up('sm')} {
    max-width: 100%;
  }
`
