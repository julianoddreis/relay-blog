
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { createBrowserHistory } from 'history'

import { Users } from './routes'

const history = createBrowserHistory()
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
  body {
    margin: 0;
  }
`

export default (props) =>
  <Router history={history}>
    <GlobalStyle />
    <Switch>
      <Route exact path='/users' component={Users} />
    </Switch>
  </Router>
