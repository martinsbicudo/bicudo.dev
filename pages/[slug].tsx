import { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'

import { blogPosts } from '~/utils'

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = typeof params.slug === 'string' ? params.slug : params.slug[0]
  const post = blogPosts.getBySlug(
    slug,
    ['slug', 'title', 'description', 'coverImage', 'content', 'date'],
    locale
  )
  const source = await serialize(post.content || '')

  return {
    props: {
      post: {
        ...post,
        source,
      },
      locale,
    },
  }
}

export const getStaticPaths = async ({ locales }) => {
  const posts = locales.reduce(
    (currentPosts, locale) => [
      ...currentPosts,
      ...blogPosts.getAllPosts(['slug'], locale),
    ],
    []
  )

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
        locale: post.locale,
      }
    }),
    fallback: false,
  }
}

export { default } from '@Containers/Post'
