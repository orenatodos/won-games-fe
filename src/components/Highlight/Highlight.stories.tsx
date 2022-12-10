import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Highlight } from '.'

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: {
    thumbnail: '/images/red-dead-bg.jpg',
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Highlight>

export const _Highlight: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

export const HighlightWithImage: ComponentStory<typeof Highlight> = (
  args
) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

HighlightWithImage.args = {
  img: '/images/red-dead-float.png'
}
