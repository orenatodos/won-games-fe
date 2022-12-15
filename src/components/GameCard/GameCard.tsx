import {
  AddShoppingCart as AddShoppingCartIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon
} from '@styled-icons/material-outlined'

import { Button } from '../Button'

import * as Styled from './GameCard.styles'

export type GameCardProps = {
  img: string
  title: string
  developer: string
  price: string
  promotionalPrice?: string
  children?: React.ReactNode
  favorite?: boolean
  onFavorite?(): void
}

export function GameCard({
  children,
  developer,
  img,
  price,
  promotionalPrice,
  title,
  favorite,
  onFavorite
}: GameCardProps) {
  return (
    <Styled.Wrapper>
      <Styled.ImageBox>
        <img src={img} alt={title} />
      </Styled.ImageBox>

      <Styled.Content>
        <Styled.Info>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Developer>{developer}</Styled.Developer>
        </Styled.Info>

        <Styled.BuyBox>
          {!!promotionalPrice && (
            <Styled.Price isPromotional>{price}</Styled.Price>
          )}
          <Styled.Price>{promotionalPrice || price}</Styled.Price>

          <Button size="sm">
            <AddShoppingCartIcon />
          </Button>
        </Styled.BuyBox>

        <Styled.FavButton role="button" onClick={onFavorite}>
          {favorite ? (
            <FavoriteIcon aria-label="Remove from wishlist" />
          ) : (
            <FavoriteBorderIcon aria-label="Add to wishlist" />
          )}
        </Styled.FavButton>
      </Styled.Content>

      {children}
    </Styled.Wrapper>
  )
}

export { Ribbon as GameCardRibbon } from '../Ribbon'
