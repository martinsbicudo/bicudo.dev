import NextImage from 'next/image'
import NextLink from 'next/link'

import styled, { css } from 'styled-components'

import { EASE_OUT } from '~/styles/motion'
import { getThemeColor } from '~/utils'

import { StyledPostItemProps, StyledPostItemWrapperProps } from './interface'

export const PostItemImage = styled(NextImage)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ${EASE_OUT};
`

export const PostItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 2px 2px 12px;
`

export const PostItemDate = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${getThemeColor('muted')};
`

export const PostItemFixed = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 600;
  background-color: ${getThemeColor('paper')};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${getThemeColor('ink')};

  svg {
    font-size: 1.2rem;
  }
`

export const PostItemImageBox = styled.figure`
  position: relative;
  width: 100%;
  aspect-ratio: 1200 / 634;
  border-radius: 8px;
  border: 1px solid ${getThemeColor('line')};
  overflow: hidden;
`

export const PostItemTitle = styled.h3`
  padding: 14px 2px 4px;
  font-size: 1.7rem;
  line-height: 1.35;
  font-weight: 500;
  letter-spacing: -0.01em;
`

export const PostItemDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 4px 2px 0;
  font-size: 1.5rem;
  line-height: 1.55;
  color: ${getThemeColor('muted')};
`

export const PostItemCta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 16px 2px 4px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${getThemeColor('paper')};

  svg {
    font-size: 1.4rem;
    transition: transform 0.2s;
  }
`

export const PostItem = styled.li<StyledPostItemProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px;
  border-radius: 14px;
  border: 1px solid ${getThemeColor('line')};
  background-color: ${getThemeColor('panel')};
  color: ${getThemeColor('paper')};
  transition:
    border-color 0.2s,
    background-color 0.2s;

  ${({ $wip }) =>
    $wip &&
    css`
      opacity: 0.6;
    `}

  ${({ $fixed, theme }) =>
    $fixed &&
    css`
      border-color: ${getThemeColor('lineStrong')};
      background-image: linear-gradient(
        135deg,
        rgba(244, 244, 245, 0.06),
        rgba(244, 244, 245, 0) 60%
      );
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.08),
        0 24px 48px rgba(0, 0, 0, 0.35);

      ${theme.breakpoints.up('lg')} {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
        grid-template-rows: auto auto 1fr auto;
        grid-template-areas:
          'image top'
          'image title'
          'image description'
          'image cta';
        column-gap: 28px;
        padding: 16px 24px 16px 16px;

        ${PostItemTop} {
          grid-area: top;
          padding-top: 12px;
        }

        ${PostItemImageBox} {
          grid-area: image;
        }

        ${PostItemTitle} {
          grid-area: title;
          padding-top: 8px;
          font-size: 2.6rem;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        ${PostItemDescription} {
          grid-area: description;
        }

        ${PostItemCta} {
          grid-area: cta;
          padding-bottom: 12px;
        }
      }
    `}
`

export const PostItemWrapper = styled(NextLink)<StyledPostItemWrapperProps>`
  text-decoration: none;
  min-width: 260px;
  flex: ${({ $fixed }) => ($fixed ? '100%' : 'calc(50% - 10px)')};

  &:hover ${PostItem} {
    border-color: ${getThemeColor('lineStrong')};
    background-color: ${getThemeColor('panelHover')};
  }

  &:hover ${PostItemImage} {
    transform: scale(1.025);
  }

  &:hover ${PostItemCta} svg {
    transform: translateX(3px);
  }
`
