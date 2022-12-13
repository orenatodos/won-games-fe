import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    position: relative;
  `}
`

export const ImageBox = styled.div`
  height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.space.xsmall};
  `}
`

export const Info = styled.div`
  max-width: calc() (100% - 2.5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeights.bold};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.bold};
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.space.xxsmall};
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    font-weight: ${theme.fontWeights.bold};

    ${!isPromotional &&
    css`
      display: inline-flex;
      align-items: center;
      background-color: ${theme.colors.secondary};
      border-radius: ${theme.radii[1]};
      color: ${theme.colors.white};
      height: 3rem;
      margin-right: calc(${theme.space.xxsmall} / 2);
      padding: 0 ${theme.space.xxsmall};
    `};

    ${isPromotional &&
    css`
      color: ${theme.colors.gray};
      text-decoration: line-through;
      margin-right: ${theme.space.xsmall};
    `};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: -0.5rem;
    cursor: pointer;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`
