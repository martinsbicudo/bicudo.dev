import { Head, Logo, Mdx } from '@Commons'
import { format } from 'date-fns'
import ErrorPage from 'next/error'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import { TbArrowLeft } from 'react-icons/tb'
import { readingTime } from 'reading-time-estimator'

import { PERSON, POST } from '~/constants'
import { getDomainWithLocale } from '~/utils'

import Footer from './Footer'
import { PostProps } from './interface'
import * as S from './styles'

const Post = ({ post }: PostProps) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) return <ErrorPage statusCode={404} />

  const pageTitle = `${post.title} | ${PERSON.NAME}`
  const date = format(new Date(`${post.date}:00:00:00`), 'dd LLL yyyy')

  const getReadTime = () => {
    const { minutes } = readingTime(post.source.compiledSource)
    return `${minutes} min read`
  }

  return (
    <>
      <Head
        title={pageTitle}
        description={post.description}
        url={getDomainWithLocale(post.slug)}
        shareImage={`/images/share/${post.slug}.jpg`}
        type="article"
      />
      <S.Post>
        <S.PostHeader>
          <S.PostLogoBox>
            <Link href="/">
              <Logo />
            </Link>
          </S.PostLogoBox>
          <S.PostDate>
            <time dateTime={post.date}>{date}</time>
            <S.PostDateSeparator aria-hidden>·</S.PostDateSeparator>
            {getReadTime()}
          </S.PostDate>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostDescription>{post.description}</S.PostDescription>
        </S.PostHeader>
        <S.PostImageBox>
          <S.PostImage
            src={post.coverImage}
            alt={post.title}
            priority={true}
            width={1200}
            height={634}
            sizes="(min-width: 1024px) 960px, 100vw"
          />
        </S.PostImageBox>
        <S.PostContent>
          <MDXRemote {...post.source} components={Mdx} />
        </S.PostContent>
        <S.PostBackLink href="/" aria-label={POST.FOOTER.BACK_BUTTON_TEXT}>
          <TbArrowLeft aria-hidden />
          <S.PostBackLabel>{POST.FOOTER.BACK_BUTTON_TEXT}</S.PostBackLabel>
        </S.PostBackLink>
      </S.Post>
      <Footer />
    </>
  )
}

export default Post
