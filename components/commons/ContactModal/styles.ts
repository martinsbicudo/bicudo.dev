import styled, { css } from 'styled-components'

import { getThemeColor } from '~/utils'

const SUCCESS_COLOR = '#22c55e'

export const Subtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 24px;
  color: ${getThemeColor('gray')};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const fieldStyles = `
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 1.4rem;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s, background-color 0.2s, opacity 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Field = styled.input`
  ${fieldStyles}
  border: 1px solid transparent;
  color: ${getThemeColor('white')};
  background-color: ${getThemeColor('gray4')};

  &::placeholder {
    color: ${getThemeColor('gray')};
  }

  &:focus {
    outline: none;
    border-color: ${getThemeColor('gray3')};
  }
`

export const TextArea = styled.textarea`
  ${fieldStyles}
  min-height: 110px;
  border: 1px solid transparent;
  color: ${getThemeColor('white')};
  background-color: ${getThemeColor('gray4')};

  &::placeholder {
    color: ${getThemeColor('gray')};
  }

  &:focus {
    outline: none;
    border-color: ${getThemeColor('gray3')};
  }
`

export const Honeypot = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`

export const SubmitButton = styled.button<{ $success?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-start;
  margin-top: 6px;
  padding: 11px 20px;
  border-radius: 10px;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 500;
  cursor: pointer;
  transition:
    transform 0.15s,
    box-shadow 0.15s,
    opacity 0.15s,
    background-color 0.2s,
    color 0.2s;

  color: ${getThemeColor('main')};
  background-color: ${getThemeColor('white')};

  ${({ $success }) =>
    $success &&
    css`
      color: ${getThemeColor('white')};
      background-color: ${SUCCESS_COLOR};
    `}

  svg {
    font-size: 1.6rem;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.12);
  }

  &:disabled {
    cursor: default;
    ${({ $success }) => !$success && css`opacity: 0.6;`}
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
