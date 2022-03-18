import React, { createContext, useState } from 'react'
import type { AppProps } from 'next/app'
import { Fonts } from 'layouts'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'ui/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Fonts />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
