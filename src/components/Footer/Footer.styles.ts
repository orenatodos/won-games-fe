import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Heading } from '../Heading'

export const Wrapper = styled.footer`
  ${Heading} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.space.medium};
    margin-top: ${theme.space.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      color: ${theme.colors.gray};
      font-size: ${theme.fontSizes.small};
      text-decoration: none;
      display: block;
      margin-bottom: ${theme.space.xxsmall};
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.fontSizes.xsmall};
    text-align: center;
    margin-top: ${theme.space.large};
    margin-bottom: ${theme.space.medium};
  `}
`
