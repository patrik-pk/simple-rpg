import React from "react"
import { connect } from 'react-redux'

import { setCanAttack, gameWon } from '../../actions/gameActions'
import { enemyDodged, enemyHit, resetEnemyDmgTaken } from '../../actions/enemyActions'
import { addReward } from '../../actions/characterActions'
import attackEnemy from '../../logic/game/attackEnemy'
import attackPlayer from '../../logic/game/attackPlayer'
import getReward from '../../logic/game/getReward'
import generateItem from '../../logic/generateItem'
import md from "../../data/_mainData"

function Action(props) {

    // Destructure from props
    const { 
        reduxPlayer, 
        reduxEnemy,
        character,
        setCanAttack,
        gameWon, 
        enemyDodged, 
        enemyHit, 
        resetEnemyDmgTaken,
        addReward
    } = props

    // Start Round
    const startRound = () => {

        // PLAYER ATTACKS ENEMY
        setCanAttack(false)
        // calculate damage dealt and return it along with didCrit boolean
        const { dmgDealt, didCrit } = attackEnemy(reduxPlayer, reduxEnemy, props.data.type, props.data.strength)
        
        // if Enemy dodged, just set damageTaken to 'Missed', else substract enemy hp by dmg
        if(dmgDealt === 'dodged') {
            enemyDodged()
        } else {
            enemyHit(dmgDealt, didCrit)
            // check if enemy has 0 or less HP after damage dealt
            if(reduxEnemy.currentHp - dmgDealt <= 0) {
                // Battle won - set battleStatus to 'Victory'
                gameWon()
                // generate reward and update state
                const reward = getReward(reduxEnemy, character, 'Victory', 'Classic')
                const item = generateItem(character, reduxEnemy, 'Inventory', 1, 'Clasic')
                console.log(item)
                // add item to generated Item + add item to inventory items
                addReward(reward)
                // break out of this whole function
                return
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
})

export default connect(mapStateToProps, { 
    setCanAttack,
    gameWon, 
    enemyDodged, 
    enemyHit,
    resetEnemyDmgTaken,
    addReward 
})(Action)