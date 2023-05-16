import { createContext } from 'react'

import langs from '~/langs'

import { LangProviderProps, MessagesType } from './interface'

export const LangContext = createContext<MessagesType>({})

const LangProvider = ({ lang, children }: LangProviderProps): JSX.Element => (
  <LangContext.Provider value={langs[lang]}>{children}</LangContext.Provider>
)

export default LangProvider
