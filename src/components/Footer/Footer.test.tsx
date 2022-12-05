import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    customRender(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /links/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()
  })
})
