import styled from 'styled-components'

import { PostItemWrapper } from '../PostItem/styles'

export const PostsList = styled.ul`
  width: calc(100% + 10px);
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -5px;

  &:hover > ${PostItemWrapper}:not(:hover) {
    opacity: 0.3;
  }
`
