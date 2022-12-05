import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type LineColor = 'primary' | 'secondary'

type HeadingProps = {
  variant?: 'black' | 'white'
  line?: 'bottom' | 'left'
  lineColor?: LineColor
  size?: 'sm' | 'md'
}

const headingLines = {
  bottom: (theme: DefaultTheme, lineColor: LineColor) => css`
    position: relative;
    margin-bottom: ${theme.space.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-top: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
  left: (theme: DefaultTheme, lineColor: LineColor) => css`
    border-left: 0.7rem solid ${theme.colors[lineColor]};
    padding-left: ${theme.space.xxsmall};
  `
}

const headingSizes = {
  sm: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  md: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.fontSizes.xxlarge};
    `}
  `
}

export const Heading = styled.h2<HeadingProps>`
  ${({
    theme,
    variant = 'white',
    line,
    lineColor = 'primary',
    size = 'md'
  }) => css`
    color: ${theme.colors[variant]};

    ${!!line && headingLines[line](theme, lineColor)};
    ${!!size && headingSizes[size](theme)};
  `}
`
