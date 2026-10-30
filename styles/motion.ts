import { css, keyframes } from 'styled-components'

const rise = keyframes`
  from {
    opacity: 0;
    filter: blur(6px);
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
`

export const EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)'

export const reveal = (delayMs = 0) => css`
  animation: ${rise} 0.7s ${EASE_OUT} ${delayMs}ms both;
`
