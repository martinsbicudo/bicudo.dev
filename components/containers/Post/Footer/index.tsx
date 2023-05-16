import { Bicudo, Socials } from '@Commons'

import { useLang } from '~/hooks'

import * as S from './styles'

const Footer = () => {
  const lang = useLang()

  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterTop>
          <S.FooterImageBox>
            <Bicudo size={64} />
            <S.FooterImageInfos>
              <S.FooterImageTitle>{lang.POST.FOOTER.TITLE}</S.FooterImageTitle>
              <S.FooterImageSubtitle>
                {lang.POST.FOOTER.SUBTITLE}
              </S.FooterImageSubtitle>
            </S.FooterImageInfos>
          </S.FooterImageBox>
          <S.FooterAbout>{lang.POST.FOOTER.ABOUT}</S.FooterAbout>
        </S.FooterTop>
        <S.FooterBottom>
          <S.FooterSocialsBox>
            <Socials />
          </S.FooterSocialsBox>
        </S.FooterBottom>
      </S.FooterContent>
    </S.Footer>
  )
}

export default Footer
