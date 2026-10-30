import styled from 'styled-components'

import { getThemeColor } from '~/utils'

const Title3 = styled.h3`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${getThemeColor('paper')};
  margin-top: 36px;
  margin-bottom: 8px;
`

export default Title3
