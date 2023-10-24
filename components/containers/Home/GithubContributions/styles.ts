import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const GithubContributionsWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${getThemeColor('white')};
  padding: 30px 0 0 0;
  min-width: 250px;

  ${up('sm')} {
    padding: 10px 0 0 0;
  }

  ${up('lg')} {
    padding: 0 0 50px 0;
  }

  & .rbh-container {
    width: 100%;
    max-width: 401px;
    padding-top: 20px;
  }
`

export const GithubContributionsTitle = styled.h2`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 100;
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
