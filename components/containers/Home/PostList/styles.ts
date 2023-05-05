import styled from 'styled-components'

import { PostItemWrapper } from '../PostItem/styles'

export const PostsList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  &:hover > ${PostItemWrapper}:not(:hover) {
    opacity: 0.3;
  }
`
