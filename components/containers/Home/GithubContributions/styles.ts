import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

import { LoadingWrapper } from './Loading/styles'

export const GithubContributionsWrapper = styled.div`
  flex: 1;
  color: ${getThemeColor('white')};
  padding: 0 10px 20px;
  min-width: 250px;

  & > div:not(${LoadingWrapper}) {
    max-width: 225px;
    padding-top: 20px;
  }
`

export const GithubContributionsTitle = styled.h2`
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: uppercase;

  ${up('md')} {
    font-size: 1.4rem;
  }

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
