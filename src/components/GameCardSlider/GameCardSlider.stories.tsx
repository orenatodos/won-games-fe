import { ComponentStory, ComponentMeta } from '@storybook/react'

import { GameCardSlider } from '.'
import { gamesMock } from './GameCardSlider.mock'

export default {
  title: 'Components/GameCardSlider',
  component: GameCardSlider,
  args: {
    items: gamesMock,
    arrowColor: 'white'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof GameCardSlider>

export const _GameCardSlider: ComponentStory<typeof GameCardSlider> = (
  args
) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)
