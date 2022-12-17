import { GetStaticProps } from 'next'

import { Home, HomeProps } from '~/templates/Home'

import { bannersMock } from '~/components/BannerSlider/BannerSlider.mock'
import { gamesMock } from '~/components/GameCardSlider/GameCardSlider.mock'
import { highlightMock } from '~/components/Highlight/Highlight.mock'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      banners: bannersMock,
      freeGames: gamesMock,
      freeGamesHighlight: highlightMock,
      mostPopularGames: gamesMock,
      mostPopularHighlight: highlightMock,
      newGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock
    }
  }
}

export default function Index({
  banners,
  freeGames,
  freeGamesHighlight,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames
}: HomeProps) {
  return (
    <Home
      banners={banners}
      freeGames={freeGames}
      freeGamesHighlight={freeGamesHighlight}
      mostPopularGames={mostPopularGames}
      mostPopularHighlight={mostPopularHighlight}
      newGames={newGames}
      upcommingGames={upcommingGames}
      upcommingHighlight={upcommingHighlight}
      upcommingMoreGames={upcommingMoreGames}
    />
  )
}
