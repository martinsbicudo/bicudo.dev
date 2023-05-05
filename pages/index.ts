import { getGithubContributions } from '~/services'
import { blogPosts } from '~/utils'

export const getServerSideProps = async () => {
  const githubContributions = await getGithubContributions()
  const posts = blogPosts.getAllPosts([
    'slug',
    'title',
    'coverImage',
    'date',
    'fixed',
    'inProgress',
  ])

  return {
    props: { posts, githubContributions },
  }
}

export { default } from '@Containers/Home'
