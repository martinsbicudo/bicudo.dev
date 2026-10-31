import { Container } from '@Commons'
import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  margin-top: 40px;
`

export const FooterContent = styled(Container)`
  max-width: 820px;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  padding-top: 0;
  padding-bottom: 24px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-right: 72px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
