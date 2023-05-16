import styled from 'styled-components'

import animations from './animations'

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  transform: translate(-35%, -75%);
`

export const Loading = styled.div`
  ${animations}

  width: 40px;
  height: 7px;
  display: inline-block;
  position: relative;

  & > div {
    position: absolute;
    top: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & > div:nth-child(1) {
    left: 4px;
    animation: lds-ellipsis-first 0.6s infinite;
  }

  & > div:nth-child(2) {
    left: 4px;
    animation: lds-ellipsis-second 0.6s infinite;
  }

  & > div:nth-child(3) {
    left: 16px;
    animation: lds-ellipsis-second 0.6s infinite;
  }

  & > div:nth-child(4) {
    left: 28px;
    animation: lds-ellipsis-third 0.6s infinite;
  }
`
