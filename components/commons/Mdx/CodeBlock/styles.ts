import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const CodeBlock = styled.span`
  display: block;
  margin: 28px 0;
  border-radius: 12px;
  border: 1px solid ${getThemeColor('line')};
  background-color: ${getThemeColor('panel')};
  overflow: hidden;

  code {
    font-family: ${({ theme }) => theme.fonts.mono} !important;
  }
`

export const CodeBlockLanguage = styled.span`
  display: block;
  padding: 10px 20px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${getThemeColor('muted')};
  border-bottom: 1px solid ${getThemeColor('line')};
`

export const InlineCode = styled.code`
  padding: 2px 6px;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.85em;
  color: ${getThemeColor('paper')};
  border: 1px solid ${getThemeColor('line')};
  background-color: ${getThemeColor('panel')};
`
