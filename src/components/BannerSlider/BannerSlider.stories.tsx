import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BannerSlider } from '.'

const banners = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  args: {
    banners
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof BannerSlider>

export const _BannerSlider: ComponentStory<typeof BannerSlider> = (
  args
) => (
  <div style={{ maxWidth: '114rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
