import { createGlobalStyle } from 'styled-components'

import colors from './colors'

export const theme = {
  colors: Object.keys(colors).reduce((acc, key) => {
    return {
      ...acc,
      [key]: `var(--${key})`
    }
  }, {})
}

export const GlobalStyle = createGlobalStyle`
  :root {
    ${Object.entries(colors).reduce((acc, [key, value]) => {
      return `${acc}\n--${key}: ${value};`
    }, '')}
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`
