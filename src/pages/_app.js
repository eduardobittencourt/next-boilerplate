import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from 'theme'
import Provider from 'contexts'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  </>
)

export default App
