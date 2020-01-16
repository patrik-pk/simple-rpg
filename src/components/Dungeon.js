
import React from "react"
import { Link } from "react-router-dom"

import DungeonItem from "./DungeonItem"

import bosses from "../data/bosses"

import "../styles/dungeon/dungeon.css"

class Dungeon extends React.Component {

    render() {
        const currentBeast = this.props.bosses.beasts < 5 ? bosses.beasts[this.props.bosses.beasts] : "Finished"
        const currentDragon = this.props.bosses.dragons < 5 ? bosses.dragons[this.props.bosses.dragons] : "Finished"
        const currentInsect = this.props.bosses.insect < 5 ? bosses.insect[this.props.bosses.insect] : "Finished"
        const currentMonster = this.props.bosses.monsters < 5 ? bosses.monsters[this.props.bosses.monsters] : "Finished"
        const currentReptile = this.props.bosses.reptiles < 5 ? bosses.reptiles[this.props.bosses.reptiles] : "Finished"

        return (
            <div className="dungeon">
                <h2 id="page_name">Dungeon</h2>
                <p id="current_level">Your level: {this.props.level.currentLevel}</p>
                <div className="dungeon_container">
                    <DungeonItem boss={currentBeast} dungeon={"Beast"} count={this.props.bosses.beasts} {...this.props} startGame={this.props.startGame}/>
                    <DungeonItem boss={currentDragon} dungeon={"Dragon"} count={this.props.bosses.dragons} {...this.props} startGame={this.props.startGame}/>
                    <DungeonItem boss={currentInsect} dungeon={"Insect"} count={this.props.bosses.insect} {...this.props} startGame={this.props.startGame}/>
                    <DungeonItem boss={currentMonster} dungeon={"Monster"} count={this.props.bosses.monsters} {...this.props} startGame={this.props.startGame}/>
                    <DungeonItem boss={currentReptile} dungeon={"Reptile"} count={this.props.bosses.reptiles} {...this.props} startGame={this.props.startGame}/>
                </div>
                <div id="tip">
                    <p>TIP: Hover on boss's name to display his stats.</p>
                </div>
                <Link to="/menu" className="back_btn">Back</Link>                          
            </div>
        )
    }
}

export default Dungeon