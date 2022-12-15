import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BannerSlider } from '.'
import { bannersMock } from './BannerSlider.mock'

export default {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  args: {
    banners: bannersMock
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof BannerSlider>

export const _BannerSlider: ComponentStory<typeof BannerSlider> = (
  args
) => (
  <div style={{ maxWidth: '114rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
