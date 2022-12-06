import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Banner } from '.'

export default {
  title: 'Components/Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Banner>

export const _Banner: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args} />
)
