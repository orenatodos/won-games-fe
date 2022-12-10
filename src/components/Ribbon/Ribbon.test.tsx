import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import { Ribbon } from '.'

describe('<Ribbon />', () => {
  it('should render text correctly', () => {
    customRender(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with the primary variant as default', () => {
    customRender(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with the secondary variant', () => {
    customRender(<Ribbon variant="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the medium size as default', () => {
    customRender(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    customRender(<Ribbon size="small">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
