import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Button } from '../Button'

import { HighlightProps } from './Highlight'

type WrapperProps = Pick<HighlightProps, 'thumbnail' | 'alignment'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ thumbnail, alignment }) => css`
    display: grid;
    background-image: url(${thumbnail});
    background-position: center center;
    background-size: cover;
    height: 23rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${alignment === 'left' &&
    css`
      grid-template-areas: 'content image';
      grid-template-columns: 2fr 1.3fr;

      ${Content} {
        text-align: left;
      }

      ${Image} {
        justify-self: end;
      }
    `};

    ${alignment === 'right' &&
    css`
      grid-template-areas: 'image content';
      grid-template-columns: 1.3fr 2fr;

      ${Content} {
        text-align: right;
      }
    `};

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.zIndices[1]};
    padding: ${theme.space.xsmall};

    ${Button} {
      display: inline-flex;
    }

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.space.large};
    `}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    grid-area: image;
    align-self: end;
    max-height: 23rem;
    max-width: 100%;
    z-index: ${theme.zIndices[1]};

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.large};
    font-weight: ${theme.fontWeights.semibold};

    ${media.greaterThan('medium')`
      font-size: ${theme.fontSizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.regular};
    margin-bottom: ${theme.space.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.fontSizes.large};
    `}
  `}
`
