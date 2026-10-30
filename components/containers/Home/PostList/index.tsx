import { Eyebrow } from '@Commons'

import PostItem from '../PostItem'
import { PostsListProps } from './interface'
import * as S from './styles'

const PostsList = ({ posts }: PostsListProps) => (
  <S.PostsSection>
    <Eyebrow>Writing</Eyebrow>
    <S.PostsList>
      {posts.map(
        ({
          slug,
          title,
          description,
          coverImage,
          date,
          fixed,
          wip = false,
        }) => (
          <PostItem
            key={slug}
            slug={slug}
            title={title}
            description={description}
            coverImage={coverImage}
            date={date}
            fixed={fixed}
            wip={wip}
          />
        ),
      )}
    </S.PostsList>
  </S.PostsSection>
)

export default PostsList
