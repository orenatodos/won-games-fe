import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Highlight } from '.'
import { highlightMock } from './Highlight.mock'

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: {
    ...highlightMock
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
