import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const GithubContributionsWrapper = styled.div`
  flex: 1;
  color: ${getThemeColor('white')};
  padding: 0 10px 30px;

  & > div {
    max-width: 220px;
    padding-top: 20px;
  }
`

export const GithubContributionsTitle = styled.h2`
  display: inline-block;
  font-size: 1.2rem;
  text-transform: uppercase;

  span {
    display: inline-block;
    padding: 0 3px;
    margin: 0 2px;
    color: ${getThemeColor('main')};
    background-color: ${getThemeColor('white')};
    border-radius: 3px;
  }
`
