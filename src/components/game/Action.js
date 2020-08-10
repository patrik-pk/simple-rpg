import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setCanAttack, gameWon, gameLost, itemObtained } from '../../actions/gameActions'
import { enemyDodged, enemyHit, resetEnemyDmgTaken } from '../../actions/enemyActions'
import { playerBlocked, playerHit, resetPlayerDmgTaken } from '../../actions/playerActions'
import { addReward } from '../../actions/characterActions'
import { addItemToInv } from '../../actions/itemsActions'
import attackEnemy from '../../logic/attackEnemy'
import attackPlayer from '../../logic/attackPlayer'
import getReward from '../../logic/getReward'
import generateItem from '../../logic/generateItem'

function Action(props) {

    // Destructure from props
    const {
        data,
        dodge, 
        reduxPlayer, 
        reduxEnemy,
        character,
        game,
        invItems,
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

    // Get hit chance multiplier
    const hitChanceMult = (() => {
        switch (data.strength) {
            case 'light': return 0.2
            case 'medium': return 0.9
            case 'strong': return 1.8
            default: return 1;
        }
    })()
    const chanceToHit = (100 - (dodge * hitChanceMult)).toFixed(2)

    // Start Round - actual game functionality
    const startRound = () => {

        // PLAYER ATTACKS ENEMY

        resetPlayerDmgTaken()
        setCanAttack(false)
        // calculate damage dealt and return it along with didCrit boolean
        const { p_dmgDealt, p_didCrit } = attackEnemy(reduxPlayer, reduxEnemy, data.type, data.strength, hitChanceMult)

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
                const item = generateItem(character, reduxEnemy, 'Inventory', invItems.length, gameType)
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

        }, game.gameTimer)

        // PLAYER CAN ATTACK AGAIN AFTER X * 2 SECONDS 

        setTimeout(() => {
            // If player didn't lose, he can attack again
            // and start this function over again
            if (reduxPlayer.currentHp - e_dmgDealt > 0 || e_dmgDealt === 'blocked') {
                setCanAttack(true)
            }
            resetEnemyDmgTaken()
        }, game.gameTimer * 2)

    }

    return (
        <div className='action'>
            <button onClick={startRound}>
                <div className='hit_chance'>
                    <p>Hit chance: </p>
                    <p>{chanceToHit + '%'}</p>
                </div>
                <div className='icon' id={data.id}>
                    { data.icon }
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
    invItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    reduxPlayer: state.player,
    reduxEnemy: state.enemy,
    character: state.character,
    game: state.game,
    invItems: state.items.invItems
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