import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

type RibbonProps = {
  size?: 'small' | 'medium'
  variant?: 'primary' | 'secondary'
}

const ribbonSizes = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.small};
    height: 3.6rem;
    padding: 0 ${theme.space.small};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.xsmall};
    height: 2.6rem;
    padding: 0 ${theme.space.xsmall};
    right: -1.5rem;

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

const ribbonVariants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};

    &::before {
      border-left-color: ${darken(0.2, theme.colors.primary)};
      border-top-color: ${darken(0.2, theme.colors.primary)};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};

    &::before {
      border-left-color: ${darken(0.2, theme.colors.secondary)};
      border-top-color: ${darken(0.2, theme.colors.secondary)};
    }
  `
}

export const Ribbon = styled.div<RibbonProps>`
  ${({ theme, variant = 'primary', size = 'medium' }) => css`
    position: absolute;
    top: ${theme.space.xsmall};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-weight: ${theme.fontWeights.bold};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!size && ribbonSizes[size](theme)};
    ${!!variant && ribbonVariants[variant](theme)};
  `}
`
