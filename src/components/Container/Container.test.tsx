import { customRender } from '~/utils/tests'

import { Container } from './Container'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = customRender(<Container />)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      'calc(var(--container-size) + (var(--container-gutter) * 2))'
    )
  })
})
