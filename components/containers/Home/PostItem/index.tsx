import React from 'react'
import { BsPin } from 'react-icons/bs'

import { format } from 'date-fns'

import { PostType } from './interface'
import * as S from './styles'

const PostItem = ({
  slug,
  title,
  coverImage,
  fixed,
  wip,
  ...post
}: Omit<PostType, 'description' | 'source'>) => {
  const date = format(new Date(`${post.date}:00:00:00`), 'dd LLL yyyy')

  return (
    <S.PostItemWrapper href={wip ? '' : `/${slug}`}>
      <S.PostItem $wip={wip}>
        <S.PostItemTop>
          {fixed && (
            <S.PostItemFixed>
              <BsPin />
            </S.PostItemFixed>
          )}
          <S.PostItemDate>{wip ? 'WIP' : date}</S.PostItemDate>
        </S.PostItemTop>
        {coverImage && (
          <S.PostItemImageBox>
            <S.PostItemImage
              src={coverImage}
              alt={title}
              priority={true}
              fill
            />
          </S.PostItemImageBox>
        )}
        <S.PostItemTitle>{title}</S.PostItemTitle>
      </S.PostItem>
    </S.PostItemWrapper>
  )
}

export default PostItem
