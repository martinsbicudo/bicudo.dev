import styled from 'styled-components'

import { reveal } from '~/styles/motion'

export const PostsSection = styled.section`
  ${reveal(200)}
`

export const PostsList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
`
