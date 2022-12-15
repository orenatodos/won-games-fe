import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import 'match-media-mock'

import { BannerSlider } from '.'
import { bannersMock } from './BannerSlider.mock'

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = customRender(
      <BannerSlider banners={bannersMock} />
    )

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = customRender(
      <BannerSlider banners={bannersMock} />
    )

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = customRender(
      <BannerSlider banners={bannersMock} />
    )

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
