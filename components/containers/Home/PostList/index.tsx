import React from 'react'

import PostItem from '../PostItem'
import { PostsListProps } from './interface'
import * as S from './styles'

const PostsList = ({ posts }: PostsListProps) => (
  <>
    <S.PostsListTitle>Posts</S.PostsListTitle>
    <S.PostsList>
      {posts.map(({ slug, title, coverImage, date, fixed, wip = false }) => (
        <PostItem
          key={slug}
          slug={slug}
          title={title}
          coverImage={coverImage}
          date={date}
          fixed={fixed}
          wip={wip}
        />
      ))}
    </S.PostsList>
  </>
)

export default PostsList
