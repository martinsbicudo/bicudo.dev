import Head from 'next/head'

import { Socials } from '@Commons'

import CONSTANTS from '~/constants'
import { getDomainWithLocale } from '~/utils'

import GithubContributions from './GithubContributions'
import Header from './Header'
import { HomeProps } from './interface'
import PostList from './PostList'
import Schedule from './Schedule'
import * as S from './styles'

const Home = ({ posts, locale }: HomeProps): JSX.Element => {
  const pageTitle = `${CONSTANTS.PERSON.NAME} | Front-End Developer`
  const description = "Bicudo's blog and portfolio"

  return (
    <>
      <Head>
        <title>{pageTitle} - test</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/cover.jpg" />
        <meta property="og:url" content={CONSTANTS.SITE.DOMAIN} />
        <meta property="og:url" content={getDomainWithLocale(locale)} />
      </Head>
      <S.Home>
        <S.HomeContainer>
          <S.HomeTop>
            <Header />
            <Schedule />
            <S.HomeTopBottom>
              <S.HomeSocialsBox>
                <Socials withBicudo withScheduleResponsive />
              </S.HomeSocialsBox>
              <GithubContributions />
            </S.HomeTopBottom>
          </S.HomeTop>
          <S.HomeBottom>
            <PostList posts={posts} />
          </S.HomeBottom>
        </S.HomeContainer>
      </S.Home>
    </>
  )
}

export default Home
