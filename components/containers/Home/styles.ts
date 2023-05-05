import { Container } from '@Commons'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

export const Home = styled.main`
  min-height: 100vh;
`

export const HomeContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  min-height: 100vh;
  padding-top: 25px;

  ${up('md')} {
    flex-wrap: nowrap;
  }
`

export const HomeTop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 25px;

  ${up('sm')} {
    max-height: 100vh;
  }

  ${up('md')} {
    max-width: 350px;
  }

  ${up('lg')} {
    position: sticky;
    top: 50px;
    padding-right: 50px;
    padding-bottom: 0;
  }
`

export const HomeTopBottom = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap-reverse;
  align-content: space-between;
  padding-top: 30px;
`

export const HomeSocialsBox = styled.div`
  flex: 1;
  min-width: 175px;
  max-width: 300px;
  padding-bottom: 25px;

  ${up('md')} {
    max-width: initial;
  }
`

export const HomeBottom = styled.div`
  flex: 1;
  padding-bottom: 25px;
`
