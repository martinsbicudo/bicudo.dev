import { blogPosts } from '~/utils'

export const getStaticProps = async ({ locale }) => {
  const posts = blogPosts.getAllPosts(
    ['slug', 'title', 'coverImage', 'date', 'fixed', 'wip'],
    locale
  )

  return {
    props: { posts, locale },
  }
}

export { default } from '@Containers/Home'
