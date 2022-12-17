import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { customRender } from '~/utils/tests'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    customRender(<Checkbox label="Checkbox label" labelFor="check" />)

    expect(
      screen.getByRole('checkbox', { name: /checkbox label/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
      'for',
      'check'
    )
  })

  it('should render without label', () => {
    customRender(<Checkbox />)

    expect(
      screen.queryByLabelText(/checkbox label/i)
    ).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    customRender(
      <Checkbox
        label="Checkbox label"
        labelFor="check"
        labelColor="black"
      />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    customRender(<Checkbox label="Checkbox label" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    customRender(
      <Checkbox label="Checkbox label" onCheck={onCheck} isChecked />
    )

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
