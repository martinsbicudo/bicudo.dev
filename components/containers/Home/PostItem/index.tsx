import { format } from 'date-fns'
import { useCallback } from 'react'
import { TbArrowRight, TbPinnedFilled } from 'react-icons/tb'

import { PostItemWrapperProps, PostType } from './interface'
import * as S from './styles'

const PostItem = ({
  slug,
  title,
  description,
  coverImage,
  fixed = false,
  wip,
  ...post
}: Omit<PostType, 'source'>) => {
  const getDate = () => {
    if (wip) return 'WIP'
    return format(new Date(`${post.date} 00:00:00`), 'dd LLL yyyy')
  }

  const getFixedPin = () =>
    fixed && (
      <S.PostItemFixed>
        <TbPinnedFilled aria-hidden />
        Pinned
      </S.PostItemFixed>
    )

  const getCoverImage = () =>
    coverImage && (
      <S.PostItemImageBox>
        <S.PostItemImage
          src={coverImage}
          alt={title}
          priority={true}
          width={1200}
          height={634}
          sizes="(min-width: 768px) 450px, 100vw"
        />
      </S.PostItemImageBox>
    )

  const Wrapper = useCallback(
    ({ children }: PostItemWrapperProps) => {
      if (wip)
        return (
          <S.PostItemWrapper href="/" as="div" $fixed={fixed}>
            {children}
          </S.PostItemWrapper>
        )

      return (
        <S.PostItemWrapper href={`/${slug}`} $fixed={fixed}>
          {children}
        </S.PostItemWrapper>
      )
    },
    [wip, slug, fixed],
  )

  return (
    <Wrapper>
      <S.PostItem $wip={wip} $fixed={fixed}>
        <S.PostItemTop>
          <S.PostItemDate>{getDate()}</S.PostItemDate>
          {getFixedPin()}
        </S.PostItemTop>
        {getCoverImage()}
        <S.PostItemTitle>{title}</S.PostItemTitle>
        {fixed && (
          <>
            <S.PostItemDescription>{description}</S.PostItemDescription>
            <S.PostItemCta>
              Read post
              <TbArrowRight aria-hidden />
            </S.PostItemCta>
          </>
        )}
      </S.PostItem>
    </Wrapper>
  )
}

export default PostItem
