import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const GithubContributionsWrapper = styled.div`
  flex: 1;
  color: ${getThemeColor('white')};
  padding: 0 10px 20px;

  & > div {
    max-width: 220px;
    padding-top: 20px;
  }
`

export const GithubContributionsTitle = styled.h2`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;

  span {
    display: inline-block;
    font-weight: bolder;
    margin: 0 2px;
    padding: 0 3px;
    color: ${getThemeColor('main')};
    background-color: ${getThemeColor('white')};
    border-radius: 3px;
  }
`
