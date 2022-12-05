import Link from 'next/link'

import { Heading } from '../Heading'
import { Logo } from '../Logo'

import * as Styled from './Footer.styles'

export function Footer() {
  const currentYear = new Date().getUTCFullYear()

  return (
    <Styled.Wrapper>
      <Logo variant="black" />

      <Styled.Content>
        <Styled.Column>
          <Heading
            variant="black"
            size="sm"
            line="bottom"
            lineColor="secondary"
          >
            Contact
          </Heading>

          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </Styled.Column>

        <Styled.Column>
          <Heading
            variant="black"
            size="sm"
            line="bottom"
            lineColor="secondary"
          >
            Follow us
          </Heading>

          <nav aria-labelledby="social mwdia">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </Styled.Column>

        <Styled.Column>
          <Heading
            variant="black"
            size="sm"
            line="bottom"
            lineColor="secondary"
          >
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">Home</Link>
            <Link href="/games">Store</Link>
            <Link href="/search">Buscar</Link>
          </nav>
        </Styled.Column>

        <Styled.Column>
          <Heading
            variant="black"
            size="sm"
            line="bottom"
            lineColor="secondary"
          >
            Location
          </Heading>

          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem ipsum.</span>
          <span>Lorem, ipsum dolor.</span>
        </Styled.Column>
      </Styled.Content>

      <Styled.Copyright>
        Won Games &copy; {currentYear} All rights reserved.
      </Styled.Copyright>
    </Styled.Wrapper>
  )
}
