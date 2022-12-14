import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as StyledBannerWrapper } from '../Banner/Banner.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.space.small};

      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.space.xxsmall};
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${StyledBannerWrapper}{
        max-width: 104rem;
        margin: 0 auto;
      }

      .slick-dots {
        position: absolute;
        right: 0;
        flex-direction: column;
        height: 100%;
        top: 0;
        margin: 0;

        li {
          margin: ${theme.space.xxsmall} 0;
        }
      }
    `};
  `}
`
