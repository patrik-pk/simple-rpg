import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store'

import "./styles/style.css"

import HomePage from "./components/HomePage"
import Container from "./components/Container"
import Menu from "./components/Menu"
import Dungeon from "./components/Dungeon"
import Inventory from "./components/inventory/Inventory"
import Game from "./components/game_page/Game"

export default function App() {

  return (
    <Provider store={store} >
      <div className="App">
        <Router>
          {/* Home */}
          <Route exact path="/" component={HomePage} />
          {/* Game */}
          <Route path="/game"
            render={(props) => <Game />
          }
          />
          {/* Menu */}
          <Route path="/menu"
            render={(props) =>
              <Container sectionClass="menu_page" page={<Menu />} />
            }
          />
          {/* Dungeon */}
          <Route path="/dungeon"
            render={(props) =>
              <Container sectionClass="dungeon_page" page={<Dungeon />} />
            }
          />
          {/* Inventory */}
          <Route path="/inventory"
            render={(props) =>
              <Container sectionClass="inventory_page" page={<Inventory/>} />
            }
          />
        </Router>
      </div>
    </Provider>
  )
}

