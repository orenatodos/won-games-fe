import { fireEvent, screen } from '@testing-library/react'
import { formatPrice } from '~/utils/formatPrice'
import { customRender } from '~/utils/tests'

import { GameCard } from '.'

import { defaultTheme } from '../../styles/themes/defaultTheme'

const props = {
  img: '/images/red-dead-bg.jpg',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  price: formatPrice(235)
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    customRender(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    customRender(<GameCard {...props} />)

    const price = screen.getByText('$235.00')

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(price).toHaveStyle({
      backgroundColor: defaultTheme.colors.secondary
    })
  })

  it('should render a line-through in price when promotional', () => {
    customRender(
      <GameCard {...props} promotionalPrice={formatPrice(200)} />
    )

    const normalPrice = screen.getByText('$235.00')
    const promotionalPrice = screen.getByText('$200.00')

    expect(normalPrice).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(promotionalPrice).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    customRender(<GameCard {...props} favorite />)

    expect(
      screen.getByLabelText(/remove from wishlist/i)
    ).toBeInTheDocument()
  })

  it('should call onFavorite method when favorite is clicked', () => {
    const onFavorite = jest.fn()

    customRender(<GameCard {...props} onFavorite={onFavorite} />)

    fireEvent.click(screen.getAllByRole('button')[1])

    expect(onFavorite).toBeCalled()
  })
})
