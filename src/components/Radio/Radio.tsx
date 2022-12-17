import { InputHTMLAttributes } from 'react'

import * as Styled from './Radio.styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  onCheck?(value?: RadioValue): void
}

export function Radio({
  label = '',
  labelColor = 'white',
  labelFor = '',
  onCheck,
  value,
  ...props
}: RadioProps) {
  function onChange() {
    !!onCheck && onCheck(value)
  }

  return (
    <Styled.Wrapper>
      <Styled.Input
        type="radio"
        id={labelFor}
        value={value}
        onChange={onChange}
        {...props}
      />

      {!!label && (
        <Styled.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </Styled.Label>
      )}
    </Styled.Wrapper>
  )
}
