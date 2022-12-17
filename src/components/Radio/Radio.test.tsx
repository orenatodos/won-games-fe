import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { customRender } from '~/utils/tests'
import { defaultTheme } from '~/styles/themes'

import { Radio } from '.'

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    customRender(<Radio label="Radio" labelFor="check" value="anyValue" />)

    const label = screen.getByText('Radio')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: defaultTheme.colors.white })
  })

  it('should render with label (black)', () => {
    customRender(<Radio label="Radio" labelColor="black" />)

    const label = screen.getByText('Radio')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: defaultTheme.colors.black })
  })

  it('should render without label', () => {
    customRender(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    customRender(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText('Radio'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })
})
