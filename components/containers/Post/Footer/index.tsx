import { Bicudo, Socials } from '@Commons'

import { POST } from '~/constants'

import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <S.FooterContent>
      <S.FooterTop>
        <S.FooterImageBox>
          <Bicudo size={64} />
          <S.FooterImageInfos>
            <S.FooterImageTitle>{POST.FOOTER.TITLE}</S.FooterImageTitle>
            <S.FooterImageSubtitle>
              {POST.FOOTER.SUBTITLE}
            </S.FooterImageSubtitle>
          </S.FooterImageInfos>
        </S.FooterImageBox>
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
