import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type HeadingProps = {
  variant?: 'black' | 'white'
  line?: 'bottom' | 'left'
}

const headingLines = {
  bottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.space.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-top: 0.5rem solid ${theme.colors.primary};
    }
  `,
  left: (theme: DefaultTheme) => css`
    border-left: 0.7rem solid ${theme.colors.secondary};
    padding-left: ${theme.space.xxsmall};
  `
}

export const Heading = styled.h2<HeadingProps>`
  ${({ theme, variant = 'white', line }) => css`
    color: ${theme.colors[variant]};
    font-size: ${theme.fontSizes.xlarge};

    ${!!line && headingLines[line](theme)};

    ${media.greaterThan('medium')`
      font-size: ${theme.fontSizes.xxlarge};
    `}
  `}
`
