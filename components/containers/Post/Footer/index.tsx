import { Socials } from '@Commons'
import NextImage from 'next/image'

import { POST } from '~/constants'

import * as S from './styles'

const YEAR = new Date().getFullYear()

const Footer = () => (
  <S.Footer>
    <S.FooterContent>
      <S.FooterCopyright>
        <span>
          © {YEAR} {POST.FOOTER.COPYRIGHT}
        </span>
        <S.FooterSeparator aria-hidden>·</S.FooterSeparator>
        <S.FooterMadeBy href="/">
          {POST.FOOTER.MADE_BY}
          <S.FooterAuthor>
            {POST.FOOTER.AUTHOR}
            <NextImage src="/images/logo.svg" alt="" width={12} height={12} />
          </S.FooterAuthor>
        </S.FooterMadeBy>
      </S.FooterCopyright>
      <Socials withSchedule={false} />
    </S.FooterContent>
  </S.Footer>
)

export default Footer
