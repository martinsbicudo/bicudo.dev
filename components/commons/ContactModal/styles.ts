import styled, { css } from 'styled-components'

import { getThemeColor } from '~/utils'

export const Subtitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  margin-bottom: 24px;
  color: ${getThemeColor('muted')};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const fieldStyles = css`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid ${getThemeColor('line')};
  font-size: 1.4rem;
  font-family: inherit;
  color: ${getThemeColor('paper')};
  background-color: ${getThemeColor('bg')};
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    opacity 0.2s;

  &::placeholder {
    color: ${getThemeColor('muted')};
  }

  &:hover:not(:disabled) {
    border-color: ${getThemeColor('lineStrong')};
  }

  &:focus {
    outline: none;
    border-color: ${getThemeColor('paper')};
    box-shadow: 0 0 0 3px rgba(244, 244, 245, 0.08);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Field = styled.input`
  ${fieldStyles}
`

export const TextArea = styled.textarea`
  ${fieldStyles}
  min-height: 120px;
  line-height: 1.5;
  resize: vertical;
`

export const Honeypot = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`

export const SubmitButton = styled.button<{ $success?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-start;
  height: 40px;
  margin-top: 8px;
  padding: 0 16px;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  color: ${getThemeColor('ink')};
  background-color: ${getThemeColor('paper')};
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    opacity 0.2s,
    background-color 0.2s,
    color 0.2s;

  ${({ $success }) =>
    $success &&
    css`
      color: ${getThemeColor('ink')};
      background-color: ${getThemeColor('success')};
    `}

  svg {
    font-size: 1.5rem;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(244, 244, 245, 0.12);
  }

  &:disabled {
    cursor: default;
    ${({ $success }) =>
      !$success &&
      css`
        opacity: 0.6;
      `}
  }
`

export const SuccessMessage = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${getThemeColor('text')};
`

export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  margin-top: 4px;
  color: ${getThemeColor('muted')};
`
