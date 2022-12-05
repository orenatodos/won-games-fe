import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from '.'

export default {
  title: 'Components/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

export const _Footer: ComponentStory<typeof Footer> = () => (
  <div style={{ maxWidth: 1000, margin: '0 auto' }}>
    <Footer />
  </div>
)
