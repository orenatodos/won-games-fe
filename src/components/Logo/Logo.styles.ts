import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import type { LogoProps } from './Logo'

type WrapperProps = Pick<LogoProps, 'variant' | 'size' | 'hideOnMobile'>

const wrapperSizes = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant, size, hideOnMobile }) => css`
    color: ${theme.colors[variant!]};
    ${!!size && wrapperSizes[size]};

    ${hideOnMobile &&
    css`
      ${media.lessThan('medium')`
        width: 5.8rem;
        height: 4.5rem;

        & > svg {
          height: inherit;
          pointer-events: none;
        }

        & .logo-text {
          display: none;
        }
      `}
    `}
  `}
`
