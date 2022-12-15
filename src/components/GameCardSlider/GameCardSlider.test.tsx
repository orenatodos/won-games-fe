import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import 'match-media-mock'

import { GameCardSlider } from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Population Zero 1',
    developer: 'Rockstar Games',
    price: '$235.00',
    promotionalPrice: '$200.00'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    price: '$235.00',
    promotionalPrice: '$200.00'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Population Zero 3',
    developer: 'Rockstar Games',
    price: '$235.00',
    promotionalPrice: '$200.00'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Population Zero 4',
    developer: 'Rockstar Games',
    price: '$235.00',
    promotionalPrice: '$200.00'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Population Zero 5',
    developer: 'Rockstar Games',
    price: '$235.00',
    promotionalPrice: '$200.00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = customRender(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if arrowColor passed', () => {
    customRender(<GameCardSlider items={items} arrowColor="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
