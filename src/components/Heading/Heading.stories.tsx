import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    variant: {
      options: ['black', 'white'],
      control: { type: 'radio' }
    },
    line: {
      options: ['bottom', 'left'],
      control: { type: 'radio' }
    },
    lineColor: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' }
    }
  },
  args: {
    children: 'Most Populars',
    variant: 'black'
  }
} as ComponentMeta<typeof Heading>

export const _Heading: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
)
