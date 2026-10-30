import styled from 'styled-components'

import { reveal } from '~/styles/motion'

export const OpenSourceSection = styled.section`
  margin-bottom: 40px;
  ${reveal(120)}
`

export const OpenSourceList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
`
