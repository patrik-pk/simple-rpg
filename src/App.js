import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import EventHandler from './components/EventHandler/EventHandler'
import HomePage from './components/HomePage/HomePage'
import Game from './components/Game/Game'
import BoxRoutes from './BoxRoutes'
import './styles/main.css'

export default () =>
  <Provider store={store} >
    <Router>
      <EventHandler />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/game' component={Game} />
        <Route component={BoxRoutes} />
      </Switch>
    </Router>
  </Provider>



