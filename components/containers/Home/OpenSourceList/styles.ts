import styled from 'styled-components'

import { PostItemWrapper } from '../PostItem/styles'

export const OpenSourceList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  list-style: none;
  margin-bottom: 30px;
  gap: 10px;

  &:hover > ${PostItemWrapper}:not(:hover) {
    opacity: 0.3;
  }
`

export const OpenSourceListTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 10px;
`
