import { ArrowBackIos as ArrowLeftIcon } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRightIcon } from '@styled-icons/material-outlined/ArrowForwardIos'

import { GameCard, GameCardProps } from '../GameCard'
import { Slider, SliderSettings } from '../Slider'

import * as Styled from './GameCardSlider.styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  arrowColor?: 'white' | 'black'
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRightIcon aria-label="Next games" />,
  prevArrow: <ArrowLeftIcon aria-label="Previous games" />
}

export function GameCardSlider({
  items,
  arrowColor = 'white'
}: GameCardSliderProps) {
  return (
    <Styled.Wrapper arrowColor={arrowColor}>
      <Slider settings={settings}>
        {items.map((item) => (
          <GameCard key={item.title} {...item} />
        ))}
      </Slider>
    </Styled.Wrapper>
  )
}
