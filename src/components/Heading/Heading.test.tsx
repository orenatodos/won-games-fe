import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    customRender(<Heading>Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when variant is passed', () => {
    customRender(<Heading variant="black">Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    customRender(<Heading line="left">Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    customRender(<Heading line="bottom">Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toHaveStyleRule('border-top', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    customRender(<Heading size="sm">Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a primary line color', () => {
    customRender(
      <Heading line="left" lineColor="primary">
        Won Games
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /won games/i })

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a secondary line color', () => {
    customRender(
      <Heading line="bottom" lineColor="secondary">
        Won Games
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /won games/i })

    expect(heading).toHaveStyleRule('border-top', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
