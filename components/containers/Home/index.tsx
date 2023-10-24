import { Head, Socials } from '@Commons'

import { PERSON, SITE } from '~/constants'

import GithubContributions from './GithubContributions'
import Header from './Header'
import { HomeProps } from './interface'
import OpenSourceList from './OpenSourceList'
import PostList from './PostList'
import Schedule from './Schedule'
import * as S from './styles'

const Home = ({ posts }: HomeProps): JSX.Element => {
  const pageTitle = `${PERSON.NAME} | Front-End Developer`
  const description = "Bicudo's blog and portfolio"

  return (
    <>
      <Head
        title={pageTitle}
        description={description}
        url={SITE.DOMAIN}
        cover="/images/cover.jpg"
      />
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
            <OpenSourceList />
            <PostList posts={posts} />
          </S.HomeBottom>
        </S.HomeContainer>
      </S.Home>
    </>
  )
}

export default Home
