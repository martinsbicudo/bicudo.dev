import { useContext } from 'react'

import { LangContext } from '~/context'

const useLang = () => {
  const lang = useContext(LangContext)
  return lang
}

export default useLang
