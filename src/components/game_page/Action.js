import React from "react"
import { connect } from 'react-redux'

import { setCanAttack, gameWon } from '../../actions/gameActions'
import { enemyDodged, enemyHit, resetEnemyDmgTaken } from '../../actions/enemyActions'
import attackEnemy from '../../logic/game/attackEnemy'
import attackPlayer from '../../logic/game/attackPlayer'
import getReward from '../../logic/game/getReward'
import md from "../../data/_mainData"

function Action(props) {

    // Destructure from props
    const { 
        reduxPlayer, 
        reduxEnemy,
        character,
        currency, 
        setCanAttack,
        gameWon, 
        enemyDodged, 
        enemyHit, 
        resetEnemyDmgTaken 
    } = props

    // Start Round
    const startRound = () => {

        // Player Attacks Enemy
        setCanAttack(false)
        const { dmgDealt, didCrit } = attackEnemy(reduxPlayer, reduxEnemy, props.data.type, props.data.strength)
        
        // if Enemy dodged, just set damageTaken to 'Missed', else substract enemy hp by dmg
        if(dmgDealt === 'dodged') {
            enemyDodged()
        } else {
            enemyHit(dmgDealt, didCrit)
            // check for end game
            if(reduxEnemy.currentHp - dmgDealt <= 0) {
                // Game Won
                gameWon() // set battleStatus to Victory
                console.log(getReward(reduxEnemy, character, currency, 'Victory', 'Classic')) // get reward
                return // break out of this whole function
            }
        }

        // After X seconds Enemy Attacks Player
        setTimeout(() => {
            // enemy attacks player
        }, md.global.gameTimer)

        // After X * 2 seconds Player can attack again, 
        // and the whole cycle continues until one has under 0 hp
        setTimeout(() => {
            setCanAttack(true)
            resetEnemyDmgTaken()
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
    reduxEnemy: state.enemy,
    character: state.character,
    currency: state.currency
})

export default connect(mapStateToProps, { 
    setCanAttack,
    gameWon, 
    enemyDodged, 
    enemyHit,
    resetEnemyDmgTaken 
})(Action)