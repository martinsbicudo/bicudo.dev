import styled from 'styled-components'

import { reveal } from '~/styles/motion'

export const SideProjectList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 24px;
  margin-bottom: 24px;
  gap: 6px;
  ${reveal(80)}
`
