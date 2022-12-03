import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '~/styles/globalCss'
import { defaultTheme } from '~/styles/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
