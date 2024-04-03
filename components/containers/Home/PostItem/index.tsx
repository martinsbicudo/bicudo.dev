import { useCallback } from 'react'
import { BsPin } from 'react-icons/bs'

import { format } from 'date-fns'

import { PostType, PostItemWrapperProps } from './interface'
import * as S from './styles'

const PostItem = ({
  slug,
  title,
  coverImage,
  fixed,
  wip,
  ...post
}: Omit<PostType, 'description' | 'source'>) => {
  const getDate = () => {
    if (wip) return 'WIP'
    return format(new Date(`${post.date}:00:00:00`), 'dd LLL yyyy')
  }

  const getFixedPin = () =>
    fixed && (
      <S.PostItemFixed>
        <BsPin />
      </S.PostItemFixed>
    )

  const getCoverImage = () =>
    coverImage && (
      <S.PostItemImageBox>
        <S.PostItemImage src={coverImage} alt={title} priority={true} fill />
      </S.PostItemImageBox>
    )

  const Wrapper = useCallback(
    ({ children }: PostItemWrapperProps) => {
      if (wip)
        return (
          <S.PostItemWrapper href="/" as="div">
            {children}
          </S.PostItemWrapper>
        )

      return <S.PostItemWrapper href={`/${slug}`}>{children}</S.PostItemWrapper>
    },
    [wip, slug],
  )

  return (
    <Wrapper>
      <S.PostItem $wip={wip} $fixed={fixed}>
        <S.PostItemTop>
          {getFixedPin()}
          <S.PostItemDate>{getDate()}</S.PostItemDate>
        </S.PostItemTop>
        {getCoverImage()}
        <S.PostItemTitle>{title}</S.PostItemTitle>
      </S.PostItem>
    </Wrapper>
  )
}

export default PostItem
