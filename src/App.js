import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./styles/style.css"

// components
import Navigation from "./components/Navigation"
import HomePage from "./components/HomePage"
import Menu from "./components/Menu"
import Game from "./components/game_page/Game"
import Inventory from "./components/inventory/Inventory"

// data
import mainData from "./data/_mainData"
import playerTemplate from "./data/playerTemplate"
import enemyTemplate from "./data/enemyTemplate"

// logic
import startGame from "./logic/game/startGame"
import endGame from "./logic/game/endGame"
import attackEnemy from "./logic/game/attackEnemy"
import attackPlayer from "./logic/game/attackPlayer"
import resetDamageTaken from "./logic/game/resetDamageTaken"
import itemHandleClick from "./logic/inventory/itemHandleClick"
import inventoryOnUnmount from "./logic/inventory/inventoryOnUnmount"
import equipItem from "./logic/inventory/equipItem"
import sellItem from "./logic/inventory/sellItem"
import reroll from "./logic/inventory/reroll"
import buyItem from "./logic/inventory/buyItem"
import calculatePlayerStats from "./logic/calculatePlayerStats"

export default class App extends React.Component {

    _isMounted = false
    state = {
      gameFlow: mainData.global.gameFlow,
      tutorial: { enemyCount: mainData.tutorial.enemyCount, multiplier: mainData.tutorial.multiplier },
      battleStatus: "",
      canAttack: true,
      timer: mainData.global.gameTimer,
      environmentSrc: "",
      player: playerTemplate,
      enemy: enemyTemplate,
      equippedItems: mainData.equippedItems,
      invItems: mainData.invItems,
      shopItems: mainData.shopItems,
      currency: {
        gold: mainData.startingCurrency.gold,
        diamonds: mainData.startingCurrency.diamonds,
        acquiredGold: null,
        acquiredDiamonds: null
      },
      generatedItem: null,
    }

  // Logic files are located in ./logic
  componentDidMount() { 
    this._isMounted = true 
    this.calculatePlayerStats()
  }
  componentWillUnmount() { this._isMounted = false }

  startGame = () => { this.setState(startGame(this.state)) }
  endGame = () => { this.setState(endGame(this.state)) }

  gameManager = (typeOfAttack, strengthOfAttack) => {
    // player attacks enemy
    this.playerAttackEnemy(typeOfAttack, strengthOfAttack)
    // then enemy attacks player after x seconds
    setTimeout(() => { this.enemyAttackPlayer() }, this.state.timer)
    // then repeat all over again after x*2 seconds if both are still alive
    setTimeout(() => { this.playerCanAttackAgain() }, this.state.timer * 2)
  }

  playerAttackEnemy = (typeOfAttack, strengthOfAttack) => {
    this.setState(attackEnemy(this.state, typeOfAttack, strengthOfAttack))
    setTimeout(() => { this.setState(resetDamageTaken(this._isMounted, this.state.enemy, "Enemy")) }, this.state.timer * 2)
  }

  enemyAttackPlayer = () => {
    if (this.state.battleStatus === "inBattle") {
      this.setState(attackPlayer(this.state))
      setTimeout(() => { this.setState(resetDamageTaken(this._isMounted, this.state.player, "Player")) }, this.state.timer * 2)      
    }
  }

  playerCanAttackAgain = () => {this.setState({ canAttack: this.state.battleStatus === "inBattle" ? true : false }) }

  itemHandleClick = (par) => { this.setState(itemHandleClick(par, this.state)) }
  equipItem = () => { this.setState(equipItem) }
  sellItem = () => { this.setState(sellItem(this.state)) }
  reroll = () => { this.setState(reroll(this.state)) }
  buyItem = () => { this.setState(buyItem(this.state)) }
  inventoryOnUnmount = () => { this.setState(inventoryOnUnmount(this.state)) }

  calculatePlayerStats = () => { this.setState({ player: calculatePlayerStats(this.state.equippedItems)}) }

  // RENDER
  render() {

    return (
      <div className="App">
        <Router>
          <Navigation />
          <Route exact path="/" component={HomePage} />
          <Route path="/menu"
            render={(props) => 
              <Menu
                {...this.state}
              />
            }
          />
          <Route path="/game"
            render={(props) =>
              <Game
                {...this.state}
                startGame={this.startGame}
                gameManager={this.gameManager}
                itemHandleClick={this.itemHandleClick}
              />
            }
          />
          <Route path="/inventory" 
            render={(props) =>
              <Inventory                      
                {...this.state}
                itemHandleClick={this.itemHandleClick}                                
                equipItem={this.equipItem}
                sellItem={this.sellItem}
                reroll={this.reroll}
                buyItem={this.buyItem}
                inventoryOnUnmount={this.inventoryOnUnmount}
              />
            }
          />
        </Router>
      </div>
    )
  }
}

