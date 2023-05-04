import React from 'react'

import PostItem from '../PostItem'
import { PostsListProps } from './interface'
import * as S from './styles'

const PostsList = ({ posts }: PostsListProps) => (
  <S.PostsList>
    {posts.map(
      ({ slug, title, coverImage, date, fixed, inProgress = false }) => (
        <PostItem
          key={slug}
          slug={slug}
          title={title}
          coverImage={coverImage}
          date={date}
          fixed={fixed}
          inProgress={inProgress}
        />
      )
    )}
  </S.PostsList>
)

export default PostsList
