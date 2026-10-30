import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Blockquote = styled.blockquote`
  margin: 28px 0;
  padding: 2px 0 2px 22px;
  border-left: 2px solid ${getThemeColor('paper')};
  font-size: 2rem;
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: ${getThemeColor('paper')};

  p:not(:first-of-type) {
    margin-top: 12px;
  }
`

export default Blockquote
