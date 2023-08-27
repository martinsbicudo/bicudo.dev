import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { SlugItemsType } from './interface'

const getPostsDirectory = () => join(process.cwd(), 'posts/')

export function getAllSlugs() {
  return fs.readdirSync(getPostsDirectory())
}

export function getBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(getPostsDirectory(), `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: SlugItemsType = {}

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

export function getAllPosts(fields: string[] = []) {
  const slugs = getAllSlugs()
  const posts = slugs
    .map((slug) => getBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .sort(({ fixed }) => (fixed ? -1 : 1))
  return posts
}
