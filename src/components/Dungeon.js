import React from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DungeonItem from "./DungeonItem"

import bosses from "../data/bosses"

import "../styles/dungeon/dungeon.css"

function Dungeon(props) {

    const currentBeast = props.dungeon.beasts < 5 ? bosses.beasts[props.dungeon.beasts] : "Finished"
    const currentDragon = props.dungeon.dragons < 5 ? bosses.dragons[props.dungeon.dragons] : "Finished"
    const currentInsect = props.dungeon.insect < 5 ? bosses.insect[props.dungeon.insect] : "Finished"
    const currentMonster = props.dungeon.monsters < 5 ? bosses.monsters[props.dungeon.monsters] : "Finished"
    const currentReptile = props.dungeon.reptiles < 5 ? bosses.reptiles[props.dungeon.reptiles] : "Finished"

    return (
        <div className="dungeon">
            <h2 id="page_name">Dungeon</h2>
            <p id="current_level">Your level: {props.currentLevel}</p>
            <div className="dungeon_container">
                <DungeonItem boss={currentBeast} dungeonName={"Beast"} count={props.dungeon.beasts} {...props} startGame={props.startGame}/>
                <DungeonItem boss={currentDragon} dungeonName={"Dragon"} count={props.dungeon.dragons} {...props} startGame={props.startGame}/>
                <DungeonItem boss={currentInsect} dungeonName={"Insect"} count={props.dungeon.insect} {...props} startGame={props.startGame}/>
                <DungeonItem boss={currentMonster} dungeonName={"Monster"} count={props.dungeon.monsters} {...props} startGame={props.startGame}/>
                <DungeonItem boss={currentReptile} dungeonName={"Reptile"} count={props.dungeon.reptiles} {...props} startGame={props.startGame}/>
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