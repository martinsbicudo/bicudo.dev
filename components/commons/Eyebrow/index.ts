import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Eyebrow = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${getThemeColor('muted')};
  margin-bottom: 16px;

  &::before {
    content: '';
    width: 24px;
    height: 1px;
    background-color: ${getThemeColor('lineStrong')};
  }
`

export default Eyebrow
