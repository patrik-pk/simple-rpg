import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setCanAttack, gameWon, gameLost, itemObtained } from '../../actions/gameActions'
import { enemyDodged, enemyHit, resetEnemyDmgTaken } from '../../actions/enemyActions'
import { playerBlocked, playerHit, resetPlayerDmgTaken } from '../../actions/playerActions'
import { addReward } from '../../actions/characterActions'
import { addItemToInv } from '../../actions/itemsActions'
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
        equippedItems,
        setCanAttack,
        gameWon,
        gameLost,
        itemObtained, 
        enemyDodged, 
        enemyHit, 
        resetEnemyDmgTaken,
        playerBlocked,
        playerHit,
        resetPlayerDmgTaken,
        addReward,
        addItemToInv
    } = props

    const gameType = reduxEnemy.type === 'Boss' ? 'Boss' : 'Classic'

    // Start Round - actual game functionality
    const startRound = () => {

        // PLAYER ATTACKS ENEMY

        resetPlayerDmgTaken()
        setCanAttack(false)
        // calculate damage dealt and return it along with didCrit boolean
        const { p_dmgDealt, p_didCrit } = attackEnemy(reduxPlayer, reduxEnemy, props.data.type, props.data.strength)

        // if Enemy dodged, just set damageTaken to 'Missed', else substract Enemy hp by dmg
        if(p_dmgDealt === 'dodged') {
            enemyDodged()
        } else {
            enemyHit(p_dmgDealt, p_didCrit)
            // check if Enemy has 0 or less HP after damage dealt
            if(reduxEnemy.currentHp - p_dmgDealt <= 0) {
                // Battle Won - set battleStatus to 'Victory'
                gameWon()
                // generate reward and update state
                const reward = getReward(reduxEnemy, character, 'Victory', gameType)
                addReward(reward)
                // generate item
                const item = generateItem(character, reduxEnemy, 'Inventory', equippedItems.length, gameType)
                // add item to inventory
                addItemToInv(item)
                // update generatedItem in game reducer - to display at the end of the game
                const itemCopy = JSON.parse(JSON.stringify(item))
                itemCopy.destination = 'Game'
                itemObtained(itemCopy)
                // break out of this function
                return
            }
        }

        // ENEMY ATTACKS PLAYER AFTER X SECONDS

        // calculate damage dealt and return it along with didCrit boolean
        // this function has to fire before setTimeout, because the values are needed in
        // the second setTimeout
        const { e_dmgDealt, e_didCrit } = attackPlayer(reduxPlayer, reduxEnemy, character)

        setTimeout(() => {
            
            // if Player blocked, just set damageTaken to 'Blocked', else substract Player hp by dmg
            if(e_dmgDealt === 'blocked') {
                playerBlocked()
            } else {
                playerHit(e_dmgDealt, e_didCrit)
                // check if Player has 0 or less HP after damage dealt
                if (reduxPlayer.currentHp - e_dmgDealt <= 0) {
                    // Battle Won - set battleStatus to 'Victory'
                    gameLost()
                    // generate reward and update state
                    const reward = getReward(reduxEnemy, character, 'Defeat', gameType)
                    addReward(reward)
                    // break out of this function
                    return
                }
            }

        }, md.global.gameTimer)

        // PLAYER CAN ATTACK AGAIN AFTER X * 2 SECONDS 

        setTimeout(() => {
            // If player didn't lose, he can attack again
            // and start this function over again
            if (reduxPlayer.currentHp - e_dmgDealt > 0 || e_dmgDealt === 'blocked') {
                setCanAttack(true)
            }
            resetEnemyDmgTaken()
        }, md.global.gameTimer * 2)

    }
    
    // Chance to hit on Action hover
    const hitChanceMult = (() => {
        switch(props.data.strength) {
            case "light": return md.playerBase.attackTypes.hitChance.light
            case "medium": return md.playerBase.attackTypes.hitChance.medium
            case "strong": return md.playerBase.attackTypes.hitChance.strong
            default: return 1;
        }
    })()
    const chanceToHit = (100 - (props.dodge * hitChanceMult)).toFixed(2)

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

Action.propTypes = {
    reduxPlayer: PropTypes.object.isRequired,
    reduxEnemy: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
    equippedItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    reduxPlayer: state.player,
    reduxEnemy: state.enemy,
    character: state.character,
    game: state.game,
    equippedItems: state.items.equippedItems
})

export default connect(mapStateToProps, { 
    setCanAttack,
    gameWon,
    gameLost,
    itemObtained, 
    enemyDodged, 
    enemyHit,
    resetEnemyDmgTaken,
    playerBlocked,
    playerHit,
    resetPlayerDmgTaken,
    addReward,
    addItemToInv 
})(Action)