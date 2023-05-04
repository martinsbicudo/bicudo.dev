import { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'

import { blogPosts } from '~/utils'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = typeof params.slug === 'string' ? params.slug : params.slug[0]
  const post = blogPosts.getBySlug(slug, [
    'slug',
    'title',
    'description',
    'coverImage',
    'content',
    'date',
    'inProgress',
  ])
  const source = await serialize(post.content || '')

  return {
    props: {
      post: {
        ...post,
        source,
      },
    },
  }
}

export const getStaticPaths = async () => {
  const posts = blogPosts.getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export { default } from '@Containers/Post'
