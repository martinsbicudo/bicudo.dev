import styled, { keyframes } from 'styled-components'

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
    transform: translateY(-40px) scale(0.97);
  }
  to {
    opacity: 1;
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
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  animation: ${fadeIn} 0.2s ease-out;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  padding: 36px 32px;
  border-radius: 20px;
  border: 1px solid ${getThemeColor('gray3')};
  background: linear-gradient(
    165deg,
    ${getThemeColor('gray3')} 0%,
    ${getThemeColor('gray4')} 45%
  );
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
  animation: ${slideDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1);
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
  border-radius: 50%;
  background: none;
  color: ${getThemeColor('gray')};
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;

  svg {
    font-size: 1.8rem;
  }

  &:hover {
    color: ${getThemeColor('white')};
    background-color: ${getThemeColor('gray2')};
  }
`

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${getThemeColor('white')};
`
