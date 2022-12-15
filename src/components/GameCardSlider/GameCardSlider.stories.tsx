import { ComponentStory, ComponentMeta } from '@storybook/react'

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

export default {
  title: 'Components/GameCardSlider',
  component: GameCardSlider,
  args: {
    items,
    arrowColor: 'black'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
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
