import NextImage from 'next/image'

import { SITE } from '~/constants'

import * as S from './styles'

const YEAR = new Date().getFullYear()

const Copyright = () => (
  <S.Copyright>
    <span>
      © {YEAR} {SITE.COPYRIGHT.OWNER}
    </span>
    <S.CopyrightSeparator aria-hidden>·</S.CopyrightSeparator>
    <S.CopyrightMadeBy href="/">
      {SITE.COPYRIGHT.MADE_BY}
      <S.CopyrightAuthor>
        {SITE.COPYRIGHT.AUTHOR}
        <NextImage src="/images/logo.svg" alt="" width={12} height={12} />
      </S.CopyrightAuthor>
    </S.CopyrightMadeBy>
  </S.Copyright>
)

export default Copyright
