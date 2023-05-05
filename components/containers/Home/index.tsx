import Head from 'next/head'

import { Socials } from '@Commons'

import CONSTANTS from '~/constants'

import GithubContributions from './GithubContributions'
import Header from './Header'
import { HomeProps } from './interface'
import PostList from './PostList'
import Schedule from './Schedule'
import * as S from './styles'

const Home = ({ posts, githubContributions }: HomeProps): JSX.Element => {
  const pageTitle = `${CONSTANTS.PERSON.NAME} | Front-End Developer`

  return (
    <S.Home>
      <S.HomeContainer>
        <S.HomeTop>
          <Header />
          <Schedule />
          <S.HomeTopBottom>
            <S.HomeSocialsBox>
              <Socials withBicudo withScheduleResponsive />
            </S.HomeSocialsBox>
            <GithubContributions contributions={githubContributions} />
          </S.HomeTopBottom>
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
