import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Ribbon } from '.'

export default {
  title: 'Components/Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  },
  args: {
    children: 'Best Seller',
    size: 'medium',
    variant: 'primary'
  },
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof Ribbon>

export const _Ribbon: ComponentStory<typeof Ribbon> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
