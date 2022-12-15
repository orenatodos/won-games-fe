import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { GameCardSliderProps } from './GameCardSlider'

type WrapperProps = Pick<GameCardSliderProps, 'arrowColor'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, arrowColor }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-list {
      margin: 0 -${theme.space.xxsmall};
    }

    .slick-slide > div {
      margin: 0 ${theme.space.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    ${media.greaterThan('large')`
      .slick-list {
        margin: 0 -${theme.space.xsmall};
      }

      .slick-slide > div {
        margin: 0 ${theme.space.xsmall};
      }
    `}

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors[arrowColor!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.space.xxlarge};
    }

    .slick-next {
      right: -${theme.space.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
