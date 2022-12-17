import { InputHTMLAttributes, useState } from 'react'

import * as Styled from './Checkbox.styles'

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  onCheck?(status: boolean): void
}

export function Checkbox({
  isChecked = false,
  onCheck,
  label = '',
  labelFor = '',
  labelColor = 'white',
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked)

  function onChange() {
    const status = !checked

    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <Styled.Wrapper>
      <Styled.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
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
