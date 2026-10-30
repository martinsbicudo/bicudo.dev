import { Head, Socials } from '@Commons'

import { PERSON, SITE } from '~/constants'

import Header from './Header'
import { HomeProps } from './interface'
import OpenSourceList from './OpenSourceList'
import PostList from './PostList'
import Schedule from './Schedule'
import SideProjectList from './SideProjectList'
import * as S from './styles'

const Home = ({ posts }: HomeProps) => {
  const pageTitle = `${PERSON.NAME} | Senior Frontend Engineer`
  const description =
    'Victor Bicudo is a senior frontend engineer and co-founder of Klap. Notes on building products, AI and developer experience.'

  return (
    <>
      <Head
        title={pageTitle}
        description={description}
        url={SITE.DOMAIN}
        shareImage="/images/share/home.jpg"
      />
      <S.Home>
        <S.HomeContainer>
          <S.HomeTop>
            <Header />
            <SideProjectList />
            <Schedule />
            <S.HomeTopBottom>
              <S.HomeSocialsBox>
                <Socials withScheduleResponsive />
              </S.HomeSocialsBox>
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
