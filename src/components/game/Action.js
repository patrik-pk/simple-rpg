import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setCanAttack, gameWon, gameLost, itemObtained, generateClassicEnemies } from '../../actions/gameActions'
import { enemyDodged, enemyHit, resetEnemyDmgTaken } from '../../actions/enemyActions'
import { playerBlocked, playerHit, resetPlayerDmgTaken, updatePlayerStats } from '../../actions/playerActions'
import { addReward } from '../../actions/characterActions'
import { addItemToInv, updateItems } from '../../actions/itemsActions'
import { addDungeon } from '../../actions/dungeonActions'

import levelTresholds from '../../data/levelTresholds'
import attackEnemy from '../../logic/attackEnemy'
import attackPlayer from '../../logic/attackPlayer'
import getReward from '../../logic/getReward'
import recalculateItems from '../../logic/recalculateItems'
import generateItem from '../../logic/generateItem'
import generateDrop from '../../logic/generateDrop'
import rerollEnemies from '../../logic/rerollEnemies'
import randomGenerator from '../../logic/randomGenerator'
import deepCopy from '../../logic/deepCopy'
import calculatePlayerStats from '../../logic/calculatePlayerStats'
import firstLetterUpperCase  from '../../logic/firstLetterUpperCase'

function Action(props) {

    // Destructure From Props
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
        gameWon,
        gameLost,
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
    const { type: gameType, enemyType: { drops }, currentHp, level: enemyLevel } = enemy

    // Get Chance To Hit
    const chanceToHit = (100 - (dodge * hitChanceMult)).toFixed(2)
    
    // Calculate min and max damage that can player deal (without crit)
    const minDmg = attackEnemy(player, enemy, enemyLevel, attackType, strength, hitChanceMult, 'min')
    const maxDmg = attackEnemy(player, enemy, enemyLevel, attackType, strength, hitChanceMult, 'max')

    // Start Round - actual game functionality
    const startRound = () => {

        // PLAYER ATTACKS ENEMY

        resetPlayerDmgTaken()
        setCanAttack(false)

        // calculate damage dealt and return it along with didCrit boolean
        const { p_dmgDealt, p_didCrit } = attackEnemy(player, enemy, enemyLevel, attackType, strength, hitChanceMult)

        // if Enemy dodged, just set damageTaken to 'Missed', else substract Enemy hp by dmg
        if(p_dmgDealt === 'dodged') {
            enemyDodged()
        } else {
            enemyHit(p_dmgDealt, p_didCrit)
            // check if Enemy has 0 or less HP after damage dealt
            if(currentHp - p_dmgDealt <= 0) {

                // Battle Won - set battleStatus to 'Victory'
                gameWon()

                // get matching index of the dungeon if its boss game, and update the state
                let matchingDungeonIndex = 0
                if(gameType === 'Boss') {
                    dungeon.forEach((item, dungeonIndex) => {
                        if (item.type === enemy.dungeon) {
                            matchingDungeonIndex = dungeonIndex
                        }
                    })

                    addDungeon(matchingDungeonIndex)
                }

                // generate reward and update state
                const reward = getReward(enemy, character, 'Victory', gameType)
                addReward(reward)

                // Check if player leveled up
                const { didLevelUp, newLevel } = reward.levelUp

                // generate items
                const rewardItems = (() => {

                    let items = []
                    let alreadyGeneratedDrops = []

                    // get possible drops from enemyType
                    const possibleDrops = drops

                    // generate drop function
                    const generateUniqueDrop = (alreadyGenerated, i) => {

                        // if all the possible drops have been generated, break out
                        if (alreadyGenerated.length === possibleDrops.length) return

                        // generate random index for drop 
                        let index = randomGenerator(0, possibleDrops.length - 1)

                        // if the index is in alreadyGenerated array, keep generating new one
                        while (alreadyGenerated.includes(index)) {
                            index = randomGenerator(0, possibleDrops.length - 1)
                        }

                        // generate random amount for drop
                        const randomAmount = randomGenerator(3, 5)

                        // get drop based on index and push it to alreadyGenerated array, 
                        // so it can't be generated again
                        const { iconKey, name, icon, classVal, goldValue } = possibleDrops[index]
                        alreadyGeneratedDrops.push(index)

                        // push that drop into items array
                        const dropGoldValue = randomAmount * goldValue * levelTresholds[newLevel].gameFlow
                        items.push(generateDrop(iconKey, 'Inventory', invItems.length + i, randomAmount, name, icon, [classVal], dropGoldValue))
                    }

                    
                    // generate items, first item is always equipment, others are drops
                    for(let i = 0; i < 3; i++) {
                        if (i === 0) {

                            // for classic game generate random item, for boss game get crafting item
                            if(gameType === 'Classic') {
                                const itemLevel = enemyLevel > currentLevel ? enemyLevel : currentLevel
                                items.push(generateItem(itemLevel, 'Inventory', invItems.length, gameType))  
                            }
                            if(gameType === 'Boss') {

                                // get levelTypeIndex based on level (low = 0-10, medium = 11 - 23, high = 24+)
                                let levelTypeIndex
                                if (enemyLevel <= 10) levelTypeIndex = 0
                                else if (enemyLevel > 10 && enemyLevel <= 23) levelTypeIndex = 1
                                else levelTypeIndex = 2

                                // generate random index for rarity
                                const randRarityIndex = randomGenerator(1, 10)
                                // if its less than 4 (0, 1, 2 - 30%) set index to 0, which is 
                                // where mythic items are at, else (70%) set it to matchingDungeonIndex + 1 
                                // to generate item with same specie type as the boss
                                const rarityIndex = randRarityIndex < 4 ? 0 : matchingDungeonIndex + 1

                                // random index for the type of item (bow, helmet, etc.)
                                const randomItemTypeIndex = randomGenerator(0, 11)

                                // and get that item
                                const item = deepCopy(craftableItems[levelTypeIndex][rarityIndex][randomItemTypeIndex].item)
                                item.destination = 'Inventory'
                                item.key = invItems.length
                                item.isCrafted = true
                                item.craftedLevelType = levelTypeIndex

                                items.push(item)
                            }
                            
                        } 
                        else generateUniqueDrop(alreadyGeneratedDrops, i)
                    }

                    // return items
                    return items
                })()

                // If player leveled up, recalculate items & stats. First reward item (always equip item) is passed
                // into the recalculate function along with invItems, from which it is then updated in the Inventory.
                // In the recalculate function drops goldValues are recalculated, and THEN the reward drops are passed
                // into the inventory, where they are handled. 
                if (didLevelUp) {
                    const invItemsToRecalc = [ ...invItems, rewardItems[0] ]
                    const recalculated = recalculateItems(gameFlow, newLevel, craftableItems, invItemsToRecalc, equippedItems)

                    // update player stats with updated equipped items
                    updatePlayerStats(calculatePlayerStats(recalculated.equippedItems, newLevel))

                    // and update the items
                    updateItems(recalculated)

                    // then add the drops to the inventory
                    addItemToInv([ rewardItems[1], rewardItems[2] ])

                } 
                // If he didn't, just push the items to the inventory
                else addItemToInv(rewardItems)
                
                // render the item in Game.js
                itemObtained(rewardItems)

                // generate new classic enemies
                generateClassicEnemies(rerollEnemies(currentLevel))

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

                    // Battle Won - set battleStatus to 'Victory'
                    gameLost()
                    
                    // generate reward and update state
                    const reward = getReward(enemy, character, 'Defeat', gameType)
                    addReward(reward)

                    // generate new classic enemies
                    generateClassicEnemies(rerollEnemies(currentLevel))

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
    gameWon,
    gameLost,
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