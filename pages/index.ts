import * as blogPosts from '~/utils/blog-posts'

export const getStaticProps = async () => {
  const posts = blogPosts.getAllPosts([
    'slug',
    'title',
    'description',
    'coverImage',
    'date',
    'fixed',
    'wip',
  ])

  return {
    props: { posts },
  }
}

export { default } from '@Containers/Home'
