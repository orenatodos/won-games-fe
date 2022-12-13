import SlickSlider, { Settings } from 'react-slick'

import * as Styled from './Slider.styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

export function Slider({ children, settings }: SliderProps) {
  return (
    <Styled.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Styled.Wrapper>
  )
}
