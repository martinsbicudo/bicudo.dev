import { Children } from 'react'

export interface LangProviderProps {
  lang: string
  children: Children
}

export type MessagesType = Record<string, MessagesType | string>
