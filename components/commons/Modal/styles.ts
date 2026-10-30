import styled, { keyframes } from 'styled-components'

import { EASE_OUT } from '~/styles/motion'
import { getThemeColor } from '~/utils'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideDown = keyframes`
  from {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgba(8, 8, 8, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.2s ease-out;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  padding: 28px;
  border-radius: 16px;
  background-color: ${getThemeColor('panel')};
  background-image: linear-gradient(
    180deg,
    rgba(244, 244, 245, 0.04),
    rgba(244, 244, 245, 0) 40%
  );
  border: 1px solid ${getThemeColor('lineStrong')};
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 32px 80px rgba(0, 0, 0, 0.7);
  animation: ${slideDown} 0.45s ${EASE_OUT};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: none;
  color: ${getThemeColor('muted')};
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;

  svg {
    font-size: 1.8rem;
  }

  &:hover {
    color: ${getThemeColor('paper')};
    background-color: ${getThemeColor('panelHover')};
  }
`

export const Eyebrow = styled.p`
  margin-bottom: 14px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${getThemeColor('muted')};
`

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
  color: ${getThemeColor('paper')};
`
