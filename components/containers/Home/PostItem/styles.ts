import NextImage from 'next/image'
import NextLink from 'next/link'

import { up } from 'styled-breakpoints'
import styled, { css } from 'styled-components'

import { getThemeColor } from '~/utils'

import { StyledPostItemProps } from './interface'

export const PostItemWrapper = styled(NextLink)`
  position: relative;
  text-decoration: none;
  color: ${getThemeColor('white')};
  padding: 5px;
  min-width: 300px;
  flex: calc(50% - 10px);
  transition: opacity 0.2s;

  ${up('md')} {
    min-width: 250px;
  }

  &:hover {
    position: relative;
    z-index: 1;
  }
`

export const PostItem = styled.li<StyledPostItemProps>`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  background-color: ${getThemeColor('gray3')};

  ${({ $wip }) => {
    if ($wip)
      return css`
        opacity: 0.7;
      `

    return css`
      cursor: pointer;
    `
  }}
`

export const PostItemTop = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`

export const PostItemDate = styled.span`
  font-size: 1rem;
  line-height: 20px;
  color: ${getThemeColor('white')};
`

export const PostItemFixed = styled.span`
  height: 1.2rem;
  font-size: 1.2rem;
  margin-right: 15px;
  color: ${getThemeColor('white')};
`

export const PostItemImageBox = styled.figure`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 0 2rem 0 ${getThemeColor('main')};
  overflow: hidden;
`

export const PostItemImage = styled(NextImage)`
  width: 100%;
  object-fit: cover;
`

export const PostItemTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
`
