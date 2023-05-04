import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Header = styled.header`
  width: 100%;
  padding-bottom: 20px;

  ${up('lg')} {
    max-width: 350px;
  }
`

export const HeaderWelcome = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: bolder;
  padding: 10px 12px;
  margin-top: 15px;
  border-radius: 25px;
  background-color: ${getThemeColor('gray3')};
`

export const HeaderTitle = styled.h1`
  font-size: 5rem;
  line-height: 5rem;
  margin: 15px 0;
`

export const HeaderText = styled.p`
  max-width: 350px;
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin-top: 10px;
  color: ${getThemeColor('gray')};

  ${up('sm')} {
    max-width: 500px;
  }

  ${up('lg')} {
    max-width: 300px;
  }
`
