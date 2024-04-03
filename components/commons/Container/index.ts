import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  max-width: 1280px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 0 25px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding: 0 50px;
  }
`

export default Container
