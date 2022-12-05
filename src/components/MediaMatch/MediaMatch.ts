import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type Breakpoint = keyof DefaultBreakpoints

type MediaMatchProps = {
  greaterThan?: Breakpoint
  lessThan?: Breakpoint
}

export const MediaMatch = styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;

    ${!!greaterThan &&
    css`
      ${media.greaterThan(greaterThan)`
        display: block;
      `}
    `}

    ${!!lessThan &&
    css`
      ${media.lessThan(lessThan)`
        display: block;
      `}
    `}
  `}
`
