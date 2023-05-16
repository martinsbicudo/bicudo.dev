import styled from 'styled-components'

import { LoadingWrapper } from './Loading/styles'

export const PlaceholderWrapper = styled.div`
  position: relative;
  max-width: 225px;

  & > div:not(${LoadingWrapper}) {
    opacity: 0.1;
  }
`
