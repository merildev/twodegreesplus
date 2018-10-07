// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, Button } from 'reakit'
import theme from 'reakit-theme-default'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Krub', sans-serif;
  }
`

const App = () => (
  <Provider theme={theme}>
    <>
      <Button>Hello</Button>
      <GlobalStyle />
    </>
  </Provider>
)

const rootContainer = document.getElementById('root')

if (rootContainer) {
  ReactDOM.render(<App />, rootContainer)
}
