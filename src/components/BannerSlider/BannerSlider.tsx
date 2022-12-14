import { Banner, BannerProps } from '../Banner'
import { Slider, SliderSettings } from '../Slider'

import * as Styled from './BannerSlider.styles'

type BannerSliderProps = {
  banners: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

export function BannerSlider({ banners }: BannerSliderProps) {
  return (
    <Styled.Wrapper>
      <Slider settings={settings}>
        {banners.map((banner) => (
          <Banner key={banner.title} {...banner} />
        ))}
      </Slider>
    </Styled.Wrapper>
  )
}
