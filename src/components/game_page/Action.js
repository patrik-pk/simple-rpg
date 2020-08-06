import React from "react"
import { connect } from 'react-redux'

import attackEnemy from '../../logic/game/attackEnemy'
import attackPlayer from '../../logic/game/attackPlayer'
import md from "../../data/_mainData"

function Action(props) {
    const { reduxPlayer, reduxEnemy } = props

    // Start Round
    const startRound = () => {

        // Player Attacks Enemy
        console.log('Player attacks Enemy')
        const dmgDealt = attackEnemy(reduxPlayer, reduxEnemy, props.data.type, props.data.strength)
        console.log(dmgDealt)
        // If dmgDealt = 'dodged' => set state na dodge
        // If dmgDealt = number => update enemy, check if he is dead or not ...

        // After X seconds Enemy Attacks Player
        setTimeout(() => {
            console.log('Enemy attacks Player')
        }, md.global.gameTimer)

        // After X * 2 seconds Player can attack again, 
        // and the whole cycle continues until one has under 0 hp
        setTimeout(() => {
            console.log('Player can attack again')
        }, md.global.gameTimer * 2)
    }
    
    // chance to hit on Action hover
    const hitChanceMult = () => {
        switch(props.data.strength) {
            case "light": return md.playerBase.attackTypes.hitChance.light
            case "medium": return md.playerBase.attackTypes.hitChance.medium
            case "strong": return md.playerBase.attackTypes.hitChance.strong
            default: return 1;
        }
    }
    const chanceToHit = (100 - (props.dodge * hitChanceMult())).toFixed(2)

    return (
        <div className="action">
            <button /*onClick={() => props.gameManager(props.data.type, props.data.strength)}*/ onClick={startRound}>
                <div className="hit_chance">
                    <p>Hit chance: </p>
                    <p>{chanceToHit + "%"}</p>
                </div>
                <div className="icon" id={props.data.id}>
                    { props.data.icon }
                </div>
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    reduxPlayer: state.player,
    reduxEnemy: state.enemy
})

export default connect(mapStateToProps)(Action)