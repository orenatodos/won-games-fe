import { ComponentStory, ComponentMeta } from '@storybook/react'
import { formatPrice } from '../../utils/formatPrice'

import { GameCard, GameCardRibbon } from '.'

export default {
  title: 'Components/GameCard',
  component: GameCard,
  argTypes: {
    onFavorite: {
      action: 'clicked'
    }
  },
  args: {
    img: '/images/red-dead-bg.jpg',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    price: formatPrice(235),
    promotionalPrice: formatPrice(200)
  },
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof GameCard>

export const _GameCard: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const GameCardWithRibbon: ComponentStory<typeof GameCard> = (
  args
) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args}>
      <GameCardRibbon variant="secondary" size="small">
        20% OFF
      </GameCardRibbon>
    </GameCard>
  </div>
)
