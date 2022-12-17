import styled, { css } from 'styled-components'

import { RadioProps } from './Radio'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space.xxsmall};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    background-color: transparent;
    transition: background 0.1s ease-in-out;
    outline: none;

    &::before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity 0.1s ease-in-out;
      opacity: 0;
      position: absolute;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${theme.colors.primary};
    }

    &:checked {
      &::before {
        opacity: 1;
      }
    }
  `}
`

type LabelProps = Pick<RadioProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    color: ${theme.colors[labelColor!]};
    line-height: 1;
  `}
`
