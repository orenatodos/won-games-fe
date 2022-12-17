import { Button } from '../Button'

import * as Styled from './Banner.styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  children?: React.ReactNode
  buttonLabel: string
  buttonLink: string
}

export function Banner({
  buttonLabel,
  buttonLink,
  children,
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
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </Styled.Caption>

      {children}
    </Styled.Wrapper>
  )
}

export { Ribbon as BannerRibbon } from '../Ribbon'
