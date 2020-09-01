import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setCanAttack, setBattleStatus, itemObtained, generateClassicEnemies } from '../../actions/gameActions'
import { enemyDodged, enemyHit, resetEnemyDmgTaken } from '../../actions/enemyActions'
import { playerBlocked, playerHit, resetPlayerDmgTaken, updatePlayerStats } from '../../actions/playerActions'
import { addReward } from '../../actions/characterActions'
import { addItemToInv, updateItems } from '../../actions/itemsActions'
import { addDungeon } from '../../actions/dungeonActions'

import attackEnemy from './attackEnemy'
import attackPlayer from './attackPlayer'
import getReward from './getReward'
import recalculateItems from './recalculateItems'
import generateRewardItems from './generateRewardItems'
import { deepCopy, firstLetterUpperCase } from '../../shared/utils'

function Action(props) {

    // Destructure Props
    const {
        data: { type: attackType, strength, hitChanceMult, icon },
        dodge, 
        player, 
        enemy,
        character,
        game,
        invItems,
        craftableItems,
        equippedItems,
        updateItems,
        dungeon,
        setCanAttack,
        setBattleStatus,
        itemObtained, 
        generateClassicEnemies,
        enemyDodged, 
        enemyHit, 
        resetEnemyDmgTaken,
        playerBlocked,
        playerHit,
        resetPlayerDmgTaken,
        updatePlayerStats,
        addReward,
        addItemToInv,
        addDungeon
    } = props
    const { currentLevel, gameFlow } = character
    const { type: gameType, enemyType: { drops: enemyDrops }, currentHp, level: enemyLevel } = enemy

    // calculate hit chance, min and max damage that can player deal (without crit)
    const chanceToHit = (100 - (dodge * hitChanceMult)).toFixed(2)
    const minDmg = attackEnemy(player, enemy, enemyLevel, attackType, strength, hitChanceMult, 'min')
    const maxDmg = attackEnemy(player, enemy, enemyLevel, attackType, strength, hitChanceMult, 'max')

    // Start round - actual game functionality
    const startRound = () => {

        // Round starts by player attacking enemy
        resetPlayerDmgTaken()
        setCanAttack(false)

        // calculate damage dealt and return it along with didCrit boolean
        const { p_dmgDealt, p_didCrit } = attackEnemy(player, enemy, enemyLevel, attackType, strength, hitChanceMult)

        // if enemy dodged, just set damageTaken to 'Missed', else substract enemys hp by damage dealt
        if(p_dmgDealt === 'dodged') enemyDodged()
        else {
            enemyHit(p_dmgDealt, p_didCrit)
            // check if Enemy has 0 or less HP after damage dealt
            if(currentHp - p_dmgDealt <= 0) {
                setBattleStatus('Victory')
                if(gameType === 'Boss') addDungeon(enemy.dungeon)

                const reward = getReward(enemy, character, 'Victory', gameType)
                const { didLevelUp, currentLevel: newLevel } = reward
                addReward(reward)

                // generate items
                const rewardItems = generateRewardItems(
                    gameType, 
                    invItems.length, 
                    enemyLevel, 
                    enemyDrops, 
                    enemy.dungeon, 
                    dungeon, 
                    craftableItems, 
                    newLevel
                )

                
                // If player leveled up, recalculate items & stats. First reward item (always equip item) is passed
                // into the recalculate function along with invItems, from which it is then updated in the Inventory.
                // In the recalculate function drops goldValues are recalculated, and THEN the reward drops are passed
                // into the inventory, where they are handled. 
                if (didLevelUp) {
                    const invItemsToRecalc = [ ...invItems, rewardItems[0] ]
                    const recalculated = recalculateItems(gameFlow, newLevel, craftableItems, invItemsToRecalc, equippedItems)

                    // update player stats with updated equipped items
                    updatePlayerStats(recalculated.equippedItems, newLevel)

                    // and update the items
                    updateItems(recalculated)

                    // then add the drops to the inventory
                    addItemToInv([ rewardItems[1], rewardItems[2] ])

                } 
                // If he didn't, just push the items to the inventory
                else addItemToInv(rewardItems)
                
                // render the item in Game.js
                const obtainedItems = deepCopy(rewardItems)
                obtainedItems[0].classes = ['stats-up']
                itemObtained(obtainedItems)

                // generate new classic enemies
                generateClassicEnemies(newLevel)

                // break out of this function
                return
            }
        }

        // ENEMY ATTACKS PLAYER AFTER X SECONDS

        // calculate damage dealt and return it along with didCrit boolean
        // this function has to fire before setTimeout, because the values are needed in
        // the second setTimeout
        const { e_dmgDealt, e_didCrit } = attackPlayer(player, enemy, character)

        setTimeout(() => {
            
            // if Player blocked, just set damageTaken to 'Blocked', else substract Player hp by dmg
            if(e_dmgDealt === 'blocked') {
                playerBlocked()
            } else {
                playerHit(e_dmgDealt, e_didCrit)

                // check if Player has 0 or less HP after damage dealt
                if (player.currentHp - e_dmgDealt <= 0) {
                    setBattleStatus('Defeat')
                    
                    // generate reward and update state
                    const reward = getReward(enemy, character, 'Defeat', gameType)
                    addReward(reward)

                    // generate new classic enemies
                    generateClassicEnemies(currentLevel)

                    // break out of this function
                    return
                }
            }

        }, game.gameTimer)

        // PLAYER CAN ATTACK AGAIN AFTER X * 2 SECONDS 

        setTimeout(() => {
            // If player didn't lose, he can attack again
            // and start this function over again
            if (player.currentHp - e_dmgDealt > 0 || e_dmgDealt === 'blocked') {
                setCanAttack(true)
            }
            resetEnemyDmgTaken()
        }, game.gameTimer * 2)

    }

    return (
        <li className='btn action-btn active' onClick={startRound}>

            {/* Icon */}
            <div className='icon'>
                { icon }
            </div>

            {/* Info (displays on hover) */}
            <div className='action-info'>
                <p className='name'>{firstLetterUpperCase(attackType)} {firstLetterUpperCase(strength)}</p>
                <p className='hit-chance'>Hit chance: {chanceToHit}%</p>
                <p className='dmg'>DMG: {minDmg} - {maxDmg}</p>
            </div>
            
        </li>
    )
}

Action.propTypes = {
    player: PropTypes.object.isRequired,
    enemy: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
    invItems: PropTypes.array.isRequired,
    craftableItems: PropTypes.array.isRequired,
    equippedItems: PropTypes.array.isRequired,
    dungeon: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    player: state.player,
    enemy: state.enemy,
    character: state.character,
    game: state.game,
    invItems: state.items.invItems,
    craftableItems: state.items.craftableItems,
    equippedItems: state.items.equippedItems,
    dungeon: state.dungeon
})

export default connect(mapStateToProps, { 
    setCanAttack,
    setBattleStatus,
    itemObtained, 
    generateClassicEnemies,
    enemyDodged, 
    enemyHit,
    resetEnemyDmgTaken,
    updatePlayerStats,
    playerBlocked,
    playerHit,
    resetPlayerDmgTaken,
    addReward,
    addItemToInv,
    updateItems,
    addDungeon 
})(Action)