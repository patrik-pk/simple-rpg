import React from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DungeonItem from "./DungeonItem"
import bosses from "../data/bosses"
import "../styles/dungeon/dungeon.css"

function Dungeon(props) {

    // Destructure From Props
    const { dungeon, currentLevel } = props

    // Map Dungeon Items
    const dungeonItems = () => {
        // Dungeon is a array of objects, these objects have two 
        // properties - type (string of dungeon name) and current (number representing the current boss). 
        return dungeon.map((item, i) => {
            return <DungeonItem 
                key={i}
                // if current < 5, return boss from data/bosses.js (array of arrays),
                // else return 'Finished'
                boss={dungeon[i].current < 5 ? bosses[i][dungeon[i].current] : 'Finished'} 
                dungeonName={item.type.charAt(0).toUpperCase() + item.type.slice(1)} 
                count={dungeon[i].current} 
                {...props} 
                startGame={props.startGame} />
        })
    }

    return (
        <div className="dungeon">
            <h2 id="page_name">Dungeon</h2>
            <p id="current_level">Your level: {currentLevel}</p>
            <div className="dungeon_container">
                { dungeonItems() }
            </div>
            <div id="tip">
                <p>TIP: Hover on boss's name to display his stats.</p>
            </div>
            <Link to="/menu" className="back_btn">Back</Link>                          
        </div>
    )
}

Dungeon.propTypes = {
    currentLevel: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel,
    dungeon: state.dungeon
})

export default connect(mapStateToProps)(Dungeon)