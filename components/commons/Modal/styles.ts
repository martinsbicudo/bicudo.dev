import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  padding: 30px;
  border-radius: 10px;
  background-color: ${getThemeColor('gray4')};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  background: none;
  color: ${getThemeColor('gray')};
  cursor: pointer;
  transition: color 0.2s;

  svg {
    font-size: 2rem;
  }

  &:hover {
    color: ${getThemeColor('white')};
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${getThemeColor('white')};
`
