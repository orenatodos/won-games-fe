import type { BannerProps } from '~/components/Banner'
import type { GameCardProps } from '~/components/GameCard'
import { Highlight, HighlightProps } from '~/components/Highlight'

import { Container } from '~/components/Container'
import { BannerSlider } from '~/components/BannerSlider'
import { Footer } from '~/components/Footer'
import { GameCardSlider } from '~/components/GameCardSlider'
import { Heading } from '~/components/Heading'
import { Menu } from '~/components/Menu'

import * as Styled from './Home.styles'

export type HomeProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
}

export function Home({
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
    <section>
      <Container>
        <Menu />

        <Styled.SectionBanner>
          <BannerSlider banners={banners} />
        </Styled.SectionBanner>
      </Container>

      <Styled.SectionNews>
        <Container>
          <Heading line="left" lineColor="secondary" variant="black">
            News
          </Heading>

          <GameCardSlider items={newGames} arrowColor="black" />
        </Container>
      </Styled.SectionNews>

      <Container>
        <Styled.SectionMostPopular>
          <Heading line="left" lineColor="secondary">
            Most Popular
          </Heading>

          <Highlight {...mostPopularHighlight} />

          <GameCardSlider items={mostPopularGames} />
        </Styled.SectionMostPopular>

        <Styled.SectionUpcoming>
          <Heading line="left" lineColor="secondary">
            Upcomming
          </Heading>

          <GameCardSlider items={upcommingGames} />

          <Highlight {...upcommingHighlight} />

          <GameCardSlider items={upcommingMoreGames} />
        </Styled.SectionUpcoming>

        <Styled.SectionFreeGames>
          <Heading line="left" lineColor="secondary">
            Free Games
          </Heading>

          <Highlight {...freeGamesHighlight} />

          <GameCardSlider items={freeGames} />
        </Styled.SectionFreeGames>
      </Container>

      <Styled.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </Styled.SectionFooter>
    </section>
  )
}
