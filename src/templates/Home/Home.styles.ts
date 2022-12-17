import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Heading } from '~/components/Heading'
import { Wrapper as HighlightWrapper } from '~/components/Highlight/Highlight.styles'
import { Wrapper as GameCardSliderWrapper } from '~/components/GameCardSlider/GameCardSlider.styles'

const DefaultSection = styled.section`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.space.large} * 2);

    ${Heading},
    ${HighlightWrapper},
    ${GameCardSliderWrapper} {
      margin-bottom: ${theme.space.medium};
    }

    ${HighlightWrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-var(--container-gutter) / 2);
        margin-left: calc(-var(--container-gutter) / 2);
      `}
    }

    ${GameCardSliderWrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-var(--container-gutter) / 2);
      `}
    }
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.space.large} calc(-var(container-gutter) / 2);

    ${media.greaterThan('medium')`
      margin: ${theme.space.large} 0;
      position: relative;
      z-index: ${theme.zIndices[1]};
    `}
  `}
`

export const SectionNews = styled(DefaultSection)`
  ${({ theme }) => css`
    margin-bottom: calc() (${theme.space.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${Heading} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const SectionMostPopular = styled(DefaultSection)``

export const SectionUpcoming = styled(DefaultSection)`
  ${({ theme }) => css`
    ${HighlightWrapper} {
      margin-top: calc(${theme.space.xlarge} * 2);
    }
  `}
`

export const SectionFreeGames = styled(DefaultSection)``

export const SectionFooter = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.space.large};
    padding-bottom: ${theme.space.xsmall};
    padding-top: ${theme.space.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.space.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
