import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import { Highlight } from '.'
import { Content as StyledContent } from './Highlight.styles'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
  thumbnail: '/images/red-dead-bg.jpg'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    customRender(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.subtitle)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /buy now/i })
    ).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = customRender(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.thumbnail})`
    })
  })

  it('should render float image', () => {
    customRender(<Highlight {...props} img="/images/red-dead-float.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/images/red-dead-float.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = customRender(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'image content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${StyledContent}`
    })
  })

  it('should render align left', () => {
    const { container } = customRender(
      <Highlight alignment="left" {...props} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content image'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${StyledContent}`
    })
  })
})
