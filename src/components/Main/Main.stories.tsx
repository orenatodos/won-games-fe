import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Main } from '.'

export default {
  title: 'Components/Main',
  component: Main
} as ComponentMeta<typeof Main>

export const _Main: ComponentStory<typeof Main> = () => <Main />
