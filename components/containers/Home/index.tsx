import Head from 'next/head'

import { Socials } from '@Commons'

import CONSTANTS from '~/constants'

import Header from './Header'
import { HomeProps } from './interface'
import PostList from './PostList'
import Schedule from './Schedule'
import * as S from './styles'

const Home = ({ posts }: HomeProps): JSX.Element => {
  const pageTitle = `${CONSTANTS.NAME} | Front-End Developer`

  return (
    <S.Home>
      <S.HomeContainer>
        <S.HomeTop>
          <Header />
          <Schedule />
          <Socials withBicudo withScheduleResponsive />
        </S.HomeTop>
        <S.HomeBottom>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <PostList posts={posts} />
        </S.HomeBottom>
      </S.HomeContainer>
    </S.Home>
  )
}

export default Home
