import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddShoppingCart as CartIcon } from '@styled-icons/material-outlined/AddShoppingCart'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    variant: {
      options: ['primary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' }
    },
    fullWidth: {
      type: 'boolean'
    }
  },
  args: {
    children: 'Buy now',
    variant: 'primary',
    size: 'md',
    fullWidth: false
  }
} as ComponentMeta<typeof Button>

export const _Button: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const ButtonWithIcon: ComponentStory<typeof Button> = ({
  children,
  ...args
}) => (
  <Button {...args}>
    <CartIcon />
    {children}
  </Button>
)
