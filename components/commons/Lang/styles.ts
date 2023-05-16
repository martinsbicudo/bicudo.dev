import styled from 'styled-components'

export const LangWrapper = styled.div`
  position: relative;
  z-index: 0;
  padding: 7px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const LangLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};

  svg {
    font-size: 1.6rem;
    margin-left: 3px;
  }
`

export const Lang = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  opacity: 0;
  background-color: transparent;
  cursor: pointer;
`
