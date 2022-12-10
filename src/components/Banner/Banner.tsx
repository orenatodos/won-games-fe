import Link from 'next/link'

import { Button } from '../Button'

import * as Styled from './Banner.styles'

type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

export function Banner({
  buttonLabel,
  buttonLink,
  img,
  subtitle,
  title
}: BannerProps) {
  return (
    <Styled.Wrapper>
      <Styled.Image src={img} role="img" aria-label={title} />

      <Styled.Caption>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Link href={buttonLink} passHref>
          <Button as="a">{buttonLabel}</Button>
        </Link>
      </Styled.Caption>
    </Styled.Wrapper>
  )
}
