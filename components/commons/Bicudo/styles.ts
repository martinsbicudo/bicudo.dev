import styled, { css } from 'styled-components'

import { StyledBicudoWrapperProps } from './interface'

export const BicudoWrapper = styled.div<StyledBicudoWrapperProps>`
  border-radius: 50%;
  overflow: hidden;

  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`
