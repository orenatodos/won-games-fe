import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import 'match-media-mock'

import { GameCardSlider } from '.'
import { gamesMock } from './GameCardSlider.mock'

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = customRender(
      <GameCardSlider items={gamesMock} />
    )

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if arrowColor passed', () => {
    customRender(<GameCardSlider items={gamesMock} arrowColor="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
