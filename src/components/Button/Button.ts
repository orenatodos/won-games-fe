import styled, { css, DefaultTheme } from 'styled-components'

type ButtonProps = {
  variant?: 'primary'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const buttonVariants = {
  primary: (theme: DefaultTheme) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    transition: background 0.15s ease-out;

    &:hover,
    &:active {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }
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
  ${({ theme, variant = 'primary', size = 'md', fullWidth }) => css`
    border: 0;
    border-radius: ${theme.radii[1]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.space.xxsmall};

    ${fullWidth &&
    css`
      width: 100%;
    `}

    ${!!variant && buttonVariants[variant](theme)};
    ${!!size && buttonSizes[size](theme)};
  `}
`
