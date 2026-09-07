import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const fieldStyles = `
  width: 100%;
  padding: 10px 12px;
  border-radius: 5px;
  font-size: 1.4rem;
  font-family: inherit;
  resize: vertical;
`

export const Field = styled.input`
  ${fieldStyles}
  color: ${getThemeColor('white')};
  background-color: ${getThemeColor('gray3')};

  &::placeholder {
    color: ${getThemeColor('gray')};
  }
`

export const TextArea = styled.textarea`
  ${fieldStyles}
  color: ${getThemeColor('white')};
  background-color: ${getThemeColor('gray3')};

  &::placeholder {
    color: ${getThemeColor('gray')};
  }
`

export const Honeypot = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`

export const SubmitButton = styled.button`
  align-self: flex-start;
  margin-top: 5px;
  padding: 9px 16px;
  border-radius: 5px;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  color: ${getThemeColor('main')};
  background-color: ${getThemeColor('white')};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`

export const SuccessMessage = styled.p`
  font-size: 1.4rem;
  color: ${getThemeColor('gray')};
`

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-top: 5px;
  color: ${getThemeColor('gray')};
`
