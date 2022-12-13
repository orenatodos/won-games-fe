import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { Slider, SliderSettings } from '.'

const settings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {},
  args: {
    settings
  }
} as ComponentMeta<typeof Slider>

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 1px solid red;
  color: white;
  text-align: center;
`

export const Horizontal: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

export const Vertical: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

const verticalSettings: SliderSettings = {
  dots: true,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  slidesToShow: 1
}

Vertical.args = {
  settings: verticalSettings
}
