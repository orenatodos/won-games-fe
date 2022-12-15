import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Menu } from '.'

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Menu>

export const _Menu: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
)
