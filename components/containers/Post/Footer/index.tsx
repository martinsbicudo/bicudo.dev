import { Bicudo, Socials } from '@Commons'

import CONSTANTS from '~/constants'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterTop>
          <S.FooterImageBox>
            <Bicudo size={64} />
            <S.FooterImageInfos>
              <S.FooterImageTitle>{CONSTANTS.NAME}</S.FooterImageTitle>
              <S.FooterImageSubtitle>Front-End Developer</S.FooterImageSubtitle>
            </S.FooterImageInfos>
          </S.FooterImageBox>
          <S.FooterAbout>
            Desenvolvedor front-end por mais de 5 anos, trabalhando
            principalmente com react.js, apaixonado por tecnologia,{' '}
            {CONSTANTS.AGE} anos, brasileiro e nascido em Santos/SP.
          </S.FooterAbout>
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
