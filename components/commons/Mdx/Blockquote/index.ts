import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Blockquote = styled.blockquote`
  position: relative;
  font-size: 1.8rem;
  margin-bottom: 20px;
  padding: 5px 0 5px 25px;
  color: ${getThemeColor('gray')};
  font-style: italic;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    border-radius: 2px;
    background-color: ${getThemeColor('white')};
  }

  &:not(:first-of-type) {
    margin-top: 20px;
  }
`

export default Blockquote
