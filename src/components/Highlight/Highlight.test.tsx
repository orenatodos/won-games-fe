import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import { Highlight } from '.'
import { Content as StyledContent } from './Highlight.styles'
import { highlightMock } from './Highlight.mock'

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    customRender(<Highlight {...highlightMock} />)

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(screen.getByText(highlightMock.subtitle)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /buy now/i })
    ).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = customRender(<Highlight {...highlightMock} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${highlightMock.thumbnail})`
    })
  })

  it('should render float image', () => {
    customRender(
      <Highlight {...highlightMock} img="/images/red-dead-float.png" />
    )

    expect(
      screen.getByRole('img', { name: highlightMock.title })
    ).toHaveAttribute('src', '/images/red-dead-float.png')
  })

  it('should render align right by default', () => {
    const { container } = customRender(<Highlight {...highlightMock} />)

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
      <Highlight alignment="left" {...highlightMock} />
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
