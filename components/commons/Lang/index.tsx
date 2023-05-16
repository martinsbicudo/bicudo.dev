import { TbCaretDown } from 'react-icons/tb'

import { useRouter } from 'next/router'

import * as S from './styles'

const Lang = () => {
  const { pathname, asPath, query, locales, locale, replace } = useRouter()

  const handleChange = (e) => {
    replace({ pathname, query }, asPath, {
      locale: e.target.value,
    })
  }

  return (
    <S.LangWrapper>
      <S.LangLabel>
        {locale}
        <TbCaretDown />
      </S.LangLabel>
      <S.Lang onChange={handleChange} value={locale}>
        {locales.map((locale, i) => (
          <option key={i} value={locale}>
            {locale}
          </option>
        ))}
      </S.Lang>
    </S.LangWrapper>
  )
}

export default Lang
