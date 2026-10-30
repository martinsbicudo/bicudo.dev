import NextHead from 'next/head'

import { SITE } from '~/constants'

import { HeadProps } from './interface'

const SHARE_IMAGE = { WIDTH: '1200', HEIGHT: '630' }

const Head = ({
  title,
  description,
  url,
  shareImage,
  type = 'website',
}: HeadProps) => {
  const image = `${SITE.DOMAIN}${shareImage}`

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={SHARE_IMAGE.WIDTH} />
      <meta property="og:image:height" content={SHARE_IMAGE.HEIGHT} />
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </NextHead>
  )
}

export default Head
