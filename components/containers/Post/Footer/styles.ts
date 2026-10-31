import { Container } from '@Commons'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Footer = styled.footer`
  width: 100%;
  margin-top: 96px;
  border-top: 1px solid ${getThemeColor('line')};
`

export const FooterContent = styled(Container)`
  max-width: 820px;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  padding-top: 28px;
  padding-bottom: 96px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 32px;
  }
`
