import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setCanAttack, setBattleStatus, itemObtained, generateClassicEnemies } from '../../redux/actions/gameActions'
import { enemyDodged, enemyHit, resetEnemyDmgTaken } from '../../redux/actions/enemyActions'
import { playerBlocked, playerHit, resetPlayerDmgTaken, updatePlayerStats } from '../../redux/actions/playerActions'
import { addReward } from '../../redux/actions/characterActions'
import { addItemToInv, updateItems } from '../../redux/actions/itemsActions'
import { addDungeon } from '../../redux/actions/dungeonActions'

import attackEnemy from './attackEnemy'
import attackPlayer from './attackPlayer'
import getReward from './getReward'
import recalculateItems from './recalculateItems'
import generateRewardItems from './generateRewardItems'
import { deepCopy, firstLetterUpperCase } from '../../shared/utils'
import levelTresholds from '../../shared/data/levelTresholds'

const Action = props => {

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
        const { 
            dmgDealt: p_dmgDealt, 
            didCrit: p_didCrit 
        } = attackEnemy(player, enemy, enemyLevel, attackType, strength, hitChanceMult)

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
                // into the inventory, where their goldValues are handled. 
                if (didLevelUp) {
                    const invItemsToRecalc = [ ...invItems, rewardItems[0] ]
                    const recalculated = recalculateItems(gameFlow, newLevel, craftableItems, invItemsToRecalc, equippedItems)
                    updatePlayerStats(recalculated.equippedItems, newLevel)
                    updateItems(recalculated)
                    addItemToInv([ rewardItems[1], rewardItems[2] ], levelTresholds[newLevel].gameFlow)

                } 
                // If he didn't, just push all of the reward items into the inventory
                else addItemToInv(rewardItems, levelTresholds[newLevel].gameFlow)
                
                // render the item in Game.js with 'stats-up' class
                const obtainedItems = deepCopy(rewardItems)
                obtainedItems[0].classes = ['stats-up']
                itemObtained(obtainedItems)

                // generate new classic enemies
                generateClassicEnemies(newLevel)

                // break out of this function
                return
            }
        }

        // Then the round continues by enemy attacking player after timeout

        // calculate enemy damage dealt and return it along with didCrit boolean
        const { dmgDealt: e_dmgDealt, didCrit: e_didCrit } = attackPlayer(player, enemy, character)

        setTimeout(() => {
            
            // if Player blocked, just set damageTaken to 'Blocked', else substract Player hp by dmg
            if(e_dmgDealt === 'blocked') playerBlocked()
            else {
                playerHit(e_dmgDealt, e_didCrit)

                // check if Player has 0 or less HP after damage dealt
                if (player.currentHp - e_dmgDealt <= 0) {
                    setBattleStatus('Defeat')

                    const reward = getReward(enemy, character, 'Defeat', gameType)
                    addReward(reward)

                    // generate new classic enemies
                    generateClassicEnemies(currentLevel)

                    // break out of this function
                    return
                }
            }

        }, game.gameTimer)

        // After timeout * 2 player can attack again 
        setTimeout(() => {
            if (player.currentHp - e_dmgDealt > 0 || e_dmgDealt === 'blocked')
                setCanAttack(true)
            resetEnemyDmgTaken()
        }, game.gameTimer * 2)
    }

    // Render
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