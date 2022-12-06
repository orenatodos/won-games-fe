import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    padding: ${theme.space.small};

    ${media.greaterThan('medium')`
      border-radius: 0 0 ${theme.radii[1]} ${theme.radii[1]};
      padding: ${theme.space.large};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.large};
    font-weight: ${theme.fontWeights.bold};

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
    margin-bottom: ${theme.space.xsmall};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.fontWeights.bold};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.fontSizes.large};
    `}
  `}
`
