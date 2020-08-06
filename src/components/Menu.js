import React from "react"
import { Link } from "react-router-dom"

import generateEnemy from "../logic/game/generateEnemy"
import tips from "../data/tips"
import home from "../resources/icons/home.svg"
import "../styles/menu/menu.css"


function Menu(props) {

    const randomTip = tips[Math.floor(Math.random() * tips.length)]
    
    const haveSpaceInv = props.invItems.length <= 35 ? true : false
    const startActiveStyle = haveSpaceInv ? " active" : ""

    // Implementing Redux
    const reduxStartGame = () => {

        // Reset Player - damage taken, hp

        // Generate Enemy - update state

        // Generate Environment Image

        // Set Battle Status - inBattle

        // canAttack true

        // Acquired gold a diamonds null

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
                //onClick={() => { this.props.startGame("Classic", this.props) }}
                onClick={reduxStartGame}
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

export default Menu