import { Socials } from '@Commons'

import { POST } from '~/constants'

import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <S.FooterContent>
      <S.FooterTop>
        <S.FooterIdentity>
          <S.FooterTitle>{POST.FOOTER.TITLE}</S.FooterTitle>
          <S.FooterSubtitle>{POST.FOOTER.SUBTITLE}</S.FooterSubtitle>
        </S.FooterIdentity>
        <S.FooterAbout>{POST.FOOTER.ABOUT}</S.FooterAbout>
      </S.FooterTop>
      <S.FooterBottom>
        <S.FooterSocialsBox>
          <Socials />
        </S.FooterSocialsBox>
      </S.FooterBottom>
    </S.FooterContent>
  </S.Footer>
)

export default Footer
