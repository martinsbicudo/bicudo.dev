import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { SlugItemsType } from './interface'

const getPostsDirectory = (locale: string) =>
  join(process.cwd(), `posts/${locale}`)

export function getAllSlugs(locale: string) {
  return fs.readdirSync(getPostsDirectory(locale))
}

export function getBySlug(slug: string, fields: string[] = [], locale: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(getPostsDirectory(locale), `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: SlugItemsType = {
    locale,
  }

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = [], locale: string) {
  const slugs = getAllSlugs(locale)
  const posts = slugs
    .map((slug) => getBySlug(slug, fields, locale))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .sort(({ fixed }) => (fixed ? -1 : 1))
  return posts
}
