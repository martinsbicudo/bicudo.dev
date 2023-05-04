import { up } from 'styled-breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  max-width: 1280px;
  margin: 0 auto;

  ${up('lg')} {
    padding: 0 50px;
  }
`

export default Container
