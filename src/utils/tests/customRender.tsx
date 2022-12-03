import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '~/styles/themes'

export function customRender(children: React.ReactNode) {
  return render(
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  )
}
