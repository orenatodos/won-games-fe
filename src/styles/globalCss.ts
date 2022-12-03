import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins/regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: local('Poppins Medium'), local('Poppins-Medium'),
        url('/fonts/poppins/medium.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins/semibold.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Poppins Bold'), local('Poppins-Bold'),
        url('/fonts/poppins/bold.woff2') format('woff2');
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body,
    button,
    input,
    select,
    textarea {
      font-family: ${theme.fonts.sans};
      font-size: 1.6rem;
    }

    img {
      display: block;
      height: auto;
      max-width: 100%;
    }
  `}
`
