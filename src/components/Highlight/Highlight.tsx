import Link from 'next/link'

import { Button } from '../Button'

import * as Styled from './Highlight.styles'

export type HighlightProps = {
  img?: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  thumbnail: string
  alignment?: 'left' | 'right'
}

export function Highlight({
  alignment = 'right',
  buttonLabel,
  buttonLink,
  img,
  subtitle,
  title,
  thumbnail
}: HighlightProps) {
  return (
    <Styled.Wrapper thumbnail={thumbnail} alignment={alignment}>
      {!!img && <Styled.Image src={img} alt={title} />}

      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Link href={buttonLink} passHref>
          <Button as="a">{buttonLabel}</Button>
        </Link>
      </Styled.Content>
    </Styled.Wrapper>
  )
}
