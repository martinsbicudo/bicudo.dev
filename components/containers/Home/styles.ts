import { Container } from '@Commons'
import styled from 'styled-components'

export const Home = styled.main`
  min-height: 100vh;
`

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  min-height: 100vh;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`

export const HomeTop = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  min-width: 275px;
  padding-top: 25px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: 350px;
    padding-right: 35px;
    min-height: calc(100vh - 25px);
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    position: sticky;
    top: 0;
    padding-right: 50px;
    padding-bottom: 0;
  }
`

export const HomeTopBottom = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
  padding-top: 30px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }
`

export const HomeSocialsBox = styled.div`
  flex: 1;
  width: 100%;
  min-width: 175px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: initial;
  }
`

export const HomeBottom = styled.div`
  flex: 1;
  padding-bottom: 25px;
  padding-top: 25px;
`
