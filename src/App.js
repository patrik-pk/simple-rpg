import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import EventHandler from './components/EventHandler'
import Game from './components/game/Game'
import BoxRoutes from './BoxRoutes'
import './styles/main.css'

export default function App() {

  // There are two types of components, one needs
  // to be wrappepped inside the 'box' div (Inventory, Dungeon, Authentification, ...)
  // and the other doesn't (Game).

  // So Switch either generates Game.js if path is '/game', if it isn't,
  // it generates the Route with BoxRoutes. In BoxRoutes there is a 
  // another Switch wrapped in the 'box' div. And in the Switch there are the
  // Routes that need to be wrapped inside that div. If the path doesn't 
  // match any of those, it generates NotFound component. 

  // Check BoxRoutes.js for better understanding.

  return (
    <Provider store={store} >
        <Router>
          <EventHandler />
          <Switch>
            <Route path='/game' component={Game} />
            <Route component={BoxRoutes} />
          </Switch>
        </Router>
    </Provider>
  )
}

