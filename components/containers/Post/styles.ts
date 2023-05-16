import NextImage from 'next/image'
import NextLink from 'next/link'

import { Container } from '@Commons'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { getThemeColor } from '~/utils'

export const Post = styled(Container)`
  position: relative;
  padding-top: 25px;
  padding-bottom: 10px;
`

export const PostHeader = styled.header`
  width: 100%;
`

export const PostLogoBox = styled.figure`
  margin-bottom: 25px;

  ${up('lg')} {
    display: flex;
    justify-content: center;
  }
`

export const PostDate = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${getThemeColor('gray')};

  ${up('lg')} {
    justify-content: center;
  }

  & > svg:first-of-type {
    font-size: 0.6rem;
    margin: 0 5px;
  }

  & > svg:last-of-type {
    margin-left: 5px;
  }
`

export const PostTitle = styled.h1`
  font-size: 5rem;
  line-height: 5rem;
  margin: 20px 0 15px;

  ${up('lg')} {
    text-align: center;
  }
`

export const PostDescription = styled.p`
  font-size: 2rem;
  font-weight: 300;

  ${up('lg')} {
    text-align: center;
  }
`

export const PostContent = styled.article`
  width: 100%;
`

export const PostImageBox = styled.figure`
  width: 100%;
  height: 300px;
  position: relative;
  margin: 40px 0 25px;
  border-radius: 5px;
  overflow: hidden;

  ${up('sm')} {
    height: 350px;
  }

  ${up('lg')} {
    height: 400px;
  }
`

export const PostImage = styled(NextImage)`
  margin-bottom: 20px;
  object-fit: cover;
`

export const PostLangBox = styled.div`
  position: fixed;
  z-index: 1;
  top: 25px;
  right: 15px;

  ${up('lg')} {
    right: 50px;
  }
`

export const PostBackLink = styled(NextLink)`
  position: fixed;
  z-index: 1;
  bottom: 25px;
  right: 15px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-decoration: none;
  padding: 12px 15px 12px 10px;
  border-radius: 25px;
  color: ${getThemeColor('main')};
  background-color: ${getThemeColor('white')};
  box-shadow: 0 0 3rem 0 ${getThemeColor('main')};

  svg {
    font-size: 1.8rem;
    margin-right: 5px;
  }

  ${up('lg')} {
    right: 50px;
  }
`
