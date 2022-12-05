import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'
import {
  Close as CloseIcon,
  ShoppingCart as CartIcon,
  Search as SearchIcon
} from '@styled-icons/material-outlined'

import { Button } from '../Button'
import { Logo } from '../Logo'

import * as Styled from './Menu.styles'
import { MediaMatch } from '../MediaMatch'

type MenuProps = {
  username?: string
}

export function Menu({ username }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenMenu() {
    setIsOpen(true)
  }

  function handleCloseMenu() {
    setIsOpen(false)
  }

  return (
    <Styled.Wrapper>
      <MediaMatch lessThan="medium">
        <Styled.IconWrapper>
          <MenuIcon aria-label="Open menu" onClick={handleOpenMenu} />
        </Styled.IconWrapper>
      </MediaMatch>

      <Logo hideOnMobile />

      <MediaMatch greaterThan="medium">
        <Styled.MenuNav>
          <Styled.MenuLink href="#">Home</Styled.MenuLink>
          <Styled.MenuLink href="#">Explore</Styled.MenuLink>
        </Styled.MenuNav>
      </MediaMatch>

      <Styled.IconGroup>
        <Styled.IconWrapper>
          <SearchIcon aria-label="Search" />
        </Styled.IconWrapper>

        <Styled.IconWrapper>
          <CartIcon aria-label="Open shopping cart" />
        </Styled.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </Styled.IconGroup>

      <Styled.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={handleCloseMenu} />

        <Styled.MenuNav>
          <Styled.MenuLink href="#">Home</Styled.MenuLink>
          <Styled.MenuLink href="#">Explore</Styled.MenuLink>

          {!!username && (
            <>
              <Styled.MenuLink href="#">My account</Styled.MenuLink>
              <Styled.MenuLink href="#">Wishlist</Styled.MenuLink>
            </>
          )}
        </Styled.MenuNav>

        {!username && (
          <Styled.RegisterBox>
            <Button fullWidth size="lg">
              Log in now
            </Button>

            <span>or</span>

            <Styled.CreateAccount href="#" title="Sign Up">
              Sign Up
            </Styled.CreateAccount>
          </Styled.RegisterBox>
        )}
      </Styled.MenuFull>
    </Styled.Wrapper>
  )
}
