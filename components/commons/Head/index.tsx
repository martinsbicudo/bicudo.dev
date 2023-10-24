import NextHead from 'next/head'

import { HeadProps } from './interface'

const Head = ({ title, description, url, cover }: HeadProps) => (
  <NextHead>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:type" content="blog" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={cover} />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={cover} />
  </NextHead>
)

export default Head
