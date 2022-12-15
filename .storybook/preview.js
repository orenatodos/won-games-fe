import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../src/styles/globalCss'
import { defaultTheme } from '../src/styles/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: defaultTheme.colors.white
      },
      {
        name: 'won-dark',
        value: defaultTheme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles removeBg />
      {Story()}
    </ThemeProvider>
  )
]
