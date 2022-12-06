import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import { Banner } from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: 'Play the new Crashlands season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    customRender(<Banner {...props} />)

    expect(
      screen.getByRole('img', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.subtitle)).toBeInTheDocument()
  })
})
