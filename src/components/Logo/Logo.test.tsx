import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    customRender(<Logo />)

    expect(
      screen.getByRole('img', { name: /won games/i }).parentElement
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    customRender(<Logo variant="black" />)

    expect(
      screen.getByRole('img', { name: /won games/i }).parentElement
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    customRender(<Logo />)

    expect(
      screen.getByRole('img', { name: /won games/i }).parentElement
    ).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    customRender(<Logo size="large" />)

    expect(
      screen.getByRole('img', { name: /won games/i }).parentElement
    ).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    customRender(<Logo hideOnMobile />)

    expect(
      screen.getByRole('img', { name: /won games/i }).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
