import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { PostItemWrapper } from '../PostItem/styles'

export const PostsList = styled.ul`
  width: calc(100% + 10px);
  list-style: none;
  margin: -5px;

  & > ${PostItemWrapper} {
    margin: 5px;
    transition: opacity 0.2s, transform 0.3s;
  }

  &:hover > ${PostItemWrapper}:not(:hover) {
    opacity: 0.3;
  }

  ${up('sm')} {
    display: flex;
    flex-wrap: wrap;

    & > ${PostItemWrapper} {
      flex: calc(50% - 10px);
      max-width: calc(50% - 10px);
    }
  }

  ${up('lg')} {
    & > ${PostItemWrapper}:hover {
      position: relative;
      z-index: 1;
      transform: scale(1.1);
    }
  }
`
