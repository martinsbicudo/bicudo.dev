import { Container } from '@Commons'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

export const Home = styled.main`
  min-height: 100vh;
`

export const HomeContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
  padding-top: 25px;
  padding-bottom: 25px;

  ${up('lg')} {
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

export const HomeTop = styled.div`
  ${up('lg')} {
    position: sticky;
    top: 50px;
    flex: 30%;
    display: flex;
    flex-direction: column;
    padding-right: 50px;
    padding-bottom: 0;
    min-width: 350px;
    max-height: calc(100vh - 100px);
  }
`

export const HomeBottom = styled.div`
  padding-top: 25px;

  ${up('lg')} {
    flex: 70%;
    max-width: 70%;
    padding-top: 0;
  }
`
