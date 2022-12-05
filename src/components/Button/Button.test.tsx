import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the md size by default', () => {
    customRender(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      'font-size': '1.4rem',
      height: '4rem',
      padding: '0.8rem 3.2rem'
    })
  })

  it('should render the sm size', () => {
    customRender(<Button size="sm">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      'font-size': '1.2rem',
      height: '3rem',
      padding: '0.8rem'
    })
  })

  it('should render the lg size', () => {
    customRender(<Button size="lg">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      'font-size': '1.6rem',
      height: '5rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    customRender(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })
})
