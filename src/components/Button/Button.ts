import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

type ButtonProps = {
  variant?: 'primary'
  ghost?: boolean
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const buttonVariants = {
  primary: (theme: DefaultTheme, ghost: boolean) => css`
    ${!ghost &&
    css`
      background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
      color: ${theme.colors.white};
      transition: background 0.15s ease-out;

      &:hover,
      &:active {
        background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
      }
    `}

    ${ghost &&
    css`
      background: none;
      color: ${theme.colors.primary};

      &:hover,
      &:active {
        color: ${darken(0.1, theme.colors.primary)};
      }
    `}
  `
}

const buttonSizes = {
  sm: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.xsmall};
    height: 3rem;
    padding: ${theme.space.xxsmall};

    & > svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  `,
  md: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.small};
    height: 4rem;
    padding: ${theme.space.xxsmall} ${theme.space.medium};

    & > svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  `,
  lg: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.medium};
    height: 5rem;
    padding: ${theme.space.xxsmall} ${theme.space.xlarge};

    & > svg {
      width: 2rem;
      height: 2rem;
    }
  `
}

export const Button = styled.button<ButtonProps>`
  ${({
    theme,
    variant = 'primary',
    ghost = false,
    size = 'md',
    fullWidth
  }) => css`
    border: 0;
    border-radius: ${theme.radii[1]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.space.xxsmall};
    text-decoration: none;

    ${fullWidth &&
    css`
      width: 100%;
    `}

    ${!!variant && buttonVariants[variant](theme, ghost)};
    ${!!size && buttonSizes[size](theme)};
  `}
`
