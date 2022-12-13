import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import 'match-media-mock'

import { Slider } from '.'

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    customRender(
      <Slider
        settings={{
          slidesToShow: 1,
          infinite: false
        }}
      >
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i)
    ).parentElement?.parentElement.toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i)
    ).parentElement?.parentElement.toHaveClass('slick-slide')
  })
})
