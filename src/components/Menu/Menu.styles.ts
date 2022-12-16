import Link from 'next/link'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as LogoWrapper } from '../Logo/Logo.styles'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.space.small} 0;
    position: relative;

    ${LogoWrapper} {
      ${media.lessThan('medium')`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      `}
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const IconGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    gap: ${theme.space.xsmall};
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.space.small};
    `}
  `}
`

export const MenuLink = styled(Link)`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.medium};
    margin: 0.3rem ${theme.space.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    inset: 0;
    opacity: ${isOpen ? 1 : 0};
    overflow: hidden;
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    transition: opacity 0.3s ease-in-out;
    z-index: ${theme.zIndices[4]};

    & > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.space.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-size: ${theme.fontSizes.xlarge};
      font-weight: ${theme.fontWeights.bold};
      margin-bottom: ${theme.space.small};
    }

    ${MenuLink},
    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.space.xlarge} ${theme.space.xlarge};

    & > span {
      display: block;
      font-size: ${theme.fontSizes.xsmall};
      margin: ${theme.space.xxsmall} 0;
    }
  `}
`

export const CreateAccount = styled(Link)`
  ${({ theme }) => css`
    border-bottom: 0ch.2rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    text-decoration: none;
  `}
`
