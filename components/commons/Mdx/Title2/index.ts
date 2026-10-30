import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Title2 = styled.h2`
  font-size: 2.6rem;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: ${getThemeColor('paper')};
  margin-bottom: 12px;
  text-wrap: balance;

  &:not(:first-child) {
    margin-top: 56px;
  }
`

export default Title2
