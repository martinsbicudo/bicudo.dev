import { Children } from 'react'

export type PostType = {
  slug: string
  title: string
  description: string
  coverImage: string
  source: {
    compiledSource: string
    frontmatter: Record<string, unknown>
    scope: Record<string, unknown>
  }
  date: string
  fixed?: boolean
  wip: boolean
}

export interface PostItemWrapperProps {
  children: Children
}

export interface StyledPostItemProps {
  $wip: boolean
  $fixed: boolean
}
