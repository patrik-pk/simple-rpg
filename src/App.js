
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./styles/style.css"

// components
import HomePage from "./components/HomePage"
import Container from "./components/Container"
import Menu from "./components/Menu"
import Dungeon from "./components/Dungeon"
import Inventory from "./components/inventory/Inventory"
import Game from "./components/game_page/Game"

// data
import md from "./data/_mainData"
import levelTresholds from "./data/levelTresholds"
import playerTemplate from "./data/playerTemplate"
import enemyTemplate from "./data/enemyTemplate"

// logic
import startGame from "./logic/game/startGame"
import endGame from "./logic/game/endGame"
import attackEnemy from "./logic/game/attackEnemy"
import attackPlayer from "./logic/game/attackPlayer"
import resetDamageTaken from "./logic/game/resetDamageTaken"
import equipItem from "./logic/inventory/equipItem"
import sellItem from "./logic/inventory/sellItem"
import buyItem from "./logic/inventory/buyItem"
import calculatePlayerStats from "./logic/calculatePlayerStats"

export default class App extends React.Component {

    _isMounted = false
    state = {
      level: {
        experience: 0,
        currentLevel: 0,
        gameFlow: levelTresholds[0].gameFlow,
        acquiredXp: 0
      },
      bosses: {
        beasts: 0,
        dragons: 0,
        insect: 0,
        monsters: 0,
        reptiles: 0
      },
      equippedItems: md.equippedItems,
      invItems: md.invItems,
      shopItems: md.shopItems,
      player: playerTemplate,
      enemy: enemyTemplate,
      battleStatus: "",
      canAttack: true,
      environmentSrc: "",
      currency: {
        gold: md.startingCurrency.gold,
        diamonds: md.startingCurrency.diamonds,
        acquiredGold: null,
        acquiredDiamonds: null
      },
      generatedItem: null,
    }

  // Logic JS files are located in ./logic
  componentDidMount() { 
    this._isMounted = true
    this.calculatePlayerStats()
  }
  componentWillUnmount() { this._isMounted = false }

  startGame = (gameType, props, boss) => { this.setState(startGame(gameType, props, boss)) }
  endGame = () => { this.setState(endGame(this.state)) }

  gameManager = (typeOfAttack, strengthOfAttack) => {
    // player attacks enemy
    this.playerAttackEnemy(typeOfAttack, strengthOfAttack)
    // then enemy attacks player after x seconds
    setTimeout(() => { this.enemyAttackPlayer() }, md.global.gameTimer)
    // then repeat all over again after x*2 seconds - if both are still alive
    setTimeout(() => { this.playerCanAttackAgain() }, md.global.gameTimer * 2)
  }

  // typeOfAttack = melee/ranged, strengthOfAttack = light/medium/strong
  playerAttackEnemy = (typeOfAttack, strengthOfAttack) => {
    this.setState(attackEnemy(this.state, typeOfAttack, strengthOfAttack))
    setTimeout(() => { this.setState(resetDamageTaken(this._isMounted, this.state.enemy, "Enemy")) }, md.global.gameTimer * 2)
  }

  enemyAttackPlayer = () => {
    // if Player didn't defeat the Enemy with his previous attack => Enemy attacks
    if (this.state.battleStatus === "inBattle") {
      this.setState(attackPlayer(this.state))
      setTimeout(() => { this.setState(resetDamageTaken(this._isMounted, this.state.player, "Player")) }, md.global.gameTimer * 2)      
    }
  }

  // if Enemy didn't defeat the Player with his previous attack => Player can attack again
  playerCanAttackAgain = () => {this.setState({ canAttack: this.state.battleStatus === "inBattle" ? true : false }) }

  // inventory logic
  equipItem = () => { this.setState(equipItem(this.state)) }
  sellItem = () => { this.setState(sellItem(this.state)) }
  buyItem = () => { this.setState(buyItem(this.state)) }

  calculatePlayerStats = () => { this.setState({ player: calculatePlayerStats(this.state.equippedItems)}) }

  // RENDER
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Router>
            {/* Home */}
            <Route exact path="/" component={HomePage} />
            {/* Game */}
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
            {/* Menu */}
            <Route path="/menu"
              render={(props) =>
                <Container sectionClass="menu_page" page={<Menu {...this.state} startGame={this.startGame} />} />
              }
            />
            {/* Dungeon */}
            <Route path="/dungeon"
              render={(props) =>
                <Container sectionClass="dungeon_page" page={<Dungeon {...this.state} startGame={this.startGame} />} />
              }
            />
            {/* Inventory */}
            <Route path="/inventory"
              render={(props) =>
                <Container sectionClass="inventory_page" page={
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
              }
            />
          </Router>
        </div>
      </Provider>
    )
  }
}

