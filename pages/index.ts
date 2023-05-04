import { blogPosts } from '~/utils'

export const getStaticProps = async () => {
  const posts = blogPosts.getAllPosts([
    'slug',
    'title',
    'coverImage',
    'date',
    'fixed',
    'inProgress',
  ])

  return {
    props: { posts },
  }
}

export { default } from '@Containers/Home'
