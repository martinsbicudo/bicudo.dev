import styled from 'styled-components'

import { PostItemWrapper } from '../PostItem/styles'

export const PostsList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;

  &:hover > ${PostItemWrapper}:not(:hover) {
    opacity: 0.3;
  }
`

export const PostsListTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 10px;
`
