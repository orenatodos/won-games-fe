import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'
import 'match-media-mock'

import { Home } from '.'

import { bannersMock } from '~/components/BannerSlider/BannerSlider.mock'
import { gamesMock } from '~/components/GameCardSlider/GameCardSlider.mock'
import { highlightMock } from '~/components/Highlight/Highlight.mock'

const props = {
  banners: bannersMock,
  freeGames: [gamesMock[0]],
  freeGamesHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  newGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]]
}

describe('<Home />', () => {
  it('should render menu, footer and sections', () => {
    customRender(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /news/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })
})
