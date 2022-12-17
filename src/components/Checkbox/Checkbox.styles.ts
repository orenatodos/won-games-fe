import styled, { css } from 'styled-components'

import { CheckboxProps } from './Checkbox'

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
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    transition: background border 0.3s ease-in-out;
    position: relative;
    outline: none;

    &::before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: 0.1s ease-in-out;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`

type LabelProps = Pick<CheckboxProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    color: ${theme.colors[labelColor!]};
    line-height: 1;
  `}
`
