import { TbCircleFilled, TbBook, TbArrowLeft } from 'react-icons/tb'

import { MDXRemote } from 'next-mdx-remote'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Logo, Lang, Mdx } from '@Commons'
import { format } from 'date-fns'
import { readingTime } from 'reading-time-estimator'

import CONSTANTS from '~/constants'
import { useLang } from '~/hooks'

import Footer from './Footer'
import { PostProps } from './interface'
import * as S from './styles'

const Post = ({ post }: PostProps) => {
  const lang = useLang()
  const router = useRouter()

  if (!router.isFallback && !post?.slug) return <ErrorPage statusCode={404} />

  const pageTitle = `${post.title} | ${CONSTANTS.PERSON.NAME}`
  const date = format(new Date(`${post.date}:00:00:00`), 'dd LLL yyyy')

  const getReadTime = () => {
    const { minutes } = readingTime(post.source.compiledSource)
    return `${minutes} min read`
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <S.Post>
        <S.PostHeader>
          <S.PostLogoBox>
            <Logo />
          </S.PostLogoBox>
          <S.PostDate>
            {date}
            <TbCircleFilled />
            {getReadTime()}
            <TbBook />
          </S.PostDate>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostDescription>{post.description}</S.PostDescription>
        </S.PostHeader>
        <S.PostImageBox>
          <S.PostImage
            src={post.coverImage}
            alt={post.coverImage}
            priority={true}
            fill
          />
        </S.PostImageBox>
        <S.PostContent>
          <MDXRemote {...post.source} components={Mdx} />
        </S.PostContent>
        <S.PostLangBox>
          <Lang />
        </S.PostLangBox>
        <S.PostBackLink href="/">
          <TbArrowLeft />
          {lang.POST.FOOTER.BACK_BUTTON_TEXT}
        </S.PostBackLink>
      </S.Post>
      <Footer />
    </>
  )
}

export default Post
