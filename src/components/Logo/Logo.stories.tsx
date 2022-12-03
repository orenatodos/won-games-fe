import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from '.'

export default {
  title: 'Components/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>

export const _Logo: ComponentStory<typeof Logo> = (args) => (
  <Logo {...args} />
)
