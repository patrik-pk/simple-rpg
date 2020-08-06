import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

import { setEnemy } from '../actions/enemyActions'
import { resetPlayer } from '../actions/playerActions'
import { startGame } from '../actions/gameActions'
import generateEnemy from "../logic/game/generateEnemy"
import tips from "../data/tips"
import home from "../resources/icons/home.svg"
import "../styles/menu/menu.css"

function Menu(props) {
    const { resetPlayer, setEnemy, startGame } = props

    const randomTip = tips[Math.floor(Math.random() * tips.length)]
    
    const haveSpaceInv = props.invItems.length <= 35 ? true : false
    const startActiveStyle = haveSpaceInv ? 'active' : ''

    // Start Game
    const createClassicGame = () => {
        const enemy = generateEnemy('Classic', props.currentLevel)
        // reset player hp, damageTaken
        resetPlayer()
        // generate enemy
        setEnemy(enemy)
        // set battleStatus to 'inBattle', canAttack to true, reset acquired gold & diamonds
        startGame()
    }
    
    return (
        <div className="menu">
            <div className="home_btn">
                <Link to="/">
                    <img alt="" src={home}/>
                </Link>
            </div>

            <div className="content">
                <Link 
                to={haveSpaceInv ? "/game" : "/menu"} 
                className={"menu_btn start_btn" + startActiveStyle} 
                onClick={createClassicGame}
                >
                Start Game
                </Link>
                <Link to="/dungeon" className="menu_btn dungeon_btn">Dungeon</Link>
                <Link to="/inventory" className="menu_btn inventory_btn">Inventory</Link>
            </div>

            <div className="tip">
                <p>TIP: {randomTip}</p>
            </div>
        </div>
    )
}

Menu.propTypes = {
    currentLevel: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel
})

export default connect(mapStateToProps, { resetPlayer, setEnemy, startGame })(Menu)