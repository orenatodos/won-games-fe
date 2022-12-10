import { screen } from '@testing-library/react'
import { customRender } from '~/utils/tests'

import { Banner, BannerRibbon } from '.'

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
  }),
    it('should render a Ribbon', () => {
      customRender(
        <Banner {...props}>
          <BannerRibbon variant="secondary" size="small">
            Best Seller
          </BannerRibbon>
        </Banner>
      )

      const ribbon = screen.getByText(/best seller/i)

      expect(ribbon).toBeInTheDocument()
      expect(ribbon).toHaveStyle({
        backgroundColor: '#3CD3C1'
      })
      expect(ribbon).toHaveStyle({
        fontSize: '1.2rem',
        height: '2.6rem'
      })
    })
})
