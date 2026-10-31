import { Container } from '@Commons'
import NextImage from 'next/image'
import NextLink from 'next/link'
import styled from 'styled-components'

import { reveal } from '~/styles/motion'
import { getThemeColor } from '~/utils'

const READING_WIDTH = '720px'

export const Post = styled(Container)`
  position: relative;
  padding-top: 48px;
  padding-bottom: 0;
`

export const PostHeader = styled.header`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  ${reveal(0)}

  ${({ theme }) => theme.breakpoints.up('lg')} {
    text-align: center;
  }
`

export const PostLogoBox = styled.figure`
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    display: flex;
    justify-content: center;
  }
`

export const PostDate = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${getThemeColor('muted')};

  ${({ theme }) => theme.breakpoints.up('lg')} {
    justify-content: center;
  }
`

export const PostDateSeparator = styled.span`
  color: ${getThemeColor('lineStrong')};
`

export const PostTitle = styled.h1`
  margin: 18px 0 16px;
  font-size: 3.4rem;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.035em;
  color: ${getThemeColor('paper')};
  text-wrap: balance;

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 4.8rem;
  }
`

export const PostDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  color: ${getThemeColor('muted')};
  text-wrap: balance;

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 2rem;
  }
`

export const PostImageBox = styled.figure`
  width: 100%;
  max-width: 960px;
  aspect-ratio: 1200 / 634;
  position: relative;
  margin: 48px auto;
  border-radius: 14px;
  border: 1px solid ${getThemeColor('line')};
  overflow: hidden;
  ${reveal(120)}
`

export const PostImage = styled(NextImage)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PostContent = styled.article`
  width: 100%;
  max-width: ${READING_WIDTH};
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.75;
  color: ${getThemeColor('text')};
  ${reveal(200)}

  strong {
    font-weight: 600;
    color: ${getThemeColor('paper')};
  }

  ul,
  ol {
    margin: 20px 0 0 22px;

    li + li {
      margin-top: 8px;
    }

    li::marker {
      color: ${getThemeColor('muted')};
    }
  }

  hr {
    height: 1px;
    margin: 48px 0;
    background-color: ${getThemeColor('line')};
  }

  img {
    max-width: 100%;
    border-radius: 10px;
  }
`

export const PostBackLink = styled(NextLink)`
  position: fixed;
  z-index: 1;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  color: ${getThemeColor('paper')};
  border: 1px solid ${getThemeColor('lineStrong')};
  background-color: rgba(20, 20, 20, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  transition:
    transform 0.2s,
    border-color 0.2s;

  svg {
    font-size: 1.6rem;
    transition: transform 0.2s;
  }

  &:hover {
    transform: translateY(-1px);
    border-color: ${getThemeColor('paper')};

    svg {
      transform: translateX(-2px);
    }
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    bottom: 24px;
    width: auto;
    height: 40px;
    padding: 0 16px 0 12px;
    border-radius: 10px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    right: 48px;
  }
`

export const PostBackLabel = styled.span`
  display: none;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: inline;
  }
`
