import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setCanAttack, gameWon, gameLost, itemObtained, generateClassicEnemies } from '../../actions/gameActions'
import { enemyDodged, enemyHit, resetEnemyDmgTaken } from '../../actions/enemyActions'
import { playerBlocked, playerHit, resetPlayerDmgTaken } from '../../actions/playerActions'
import { addReward } from '../../actions/characterActions'
import { addItemToInv } from '../../actions/itemsActions'
import attackEnemy from '../../logic/attackEnemy'
import attackPlayer from '../../logic/attackPlayer'
import getReward from '../../logic/getReward'
import generateItem from '../../logic/generateItem'
import generateDrop from '../../logic/generateDrop'
import rerollEnemies from '../../logic/rerollEnemies'
import randomGenerator from '../../logic/randomGenerator'

function Action(props) {

    // Destructure From Props
    const {
        data: { id, type: attackType, strength, hitChanceMult, icon },
        dodge, 
        player, 
        enemy,
        character,
        game,
        invItems,
        craftableItems,
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
        addReward,
        addItemToInv
    } = props

    const { currentLevel } = character
    const { type: gameType, enemyType: { drops }, currentHp, level: enemyLevel } = enemy

    // Get Chance To Hit
    const chanceToHit = (100 - (dodge * hitChanceMult)).toFixed(2)

    // Start Round - actual game functionality
    const startRound = () => {

        // PLAYER ATTACKS ENEMY

        resetPlayerDmgTaken()
        setCanAttack(false)

        // calculate damage dealt and return it along with didCrit boolean
        const { p_dmgDealt, p_didCrit } = attackEnemy(player, enemy, attackType, strength, hitChanceMult)

        // if Enemy dodged, just set damageTaken to 'Missed', else substract Enemy hp by dmg
        if(p_dmgDealt === 'dodged') {
            enemyDodged()
        } else {
            enemyHit(p_dmgDealt, p_didCrit)
            // check if Enemy has 0 or less HP after damage dealt
            if(currentHp - p_dmgDealt <= 0) {

                // Battle Won - set battleStatus to 'Victory'
                gameWon()

                // generate reward and update state
                const reward = getReward(enemy, character, 'Victory', gameType)
                addReward(reward)

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
                        const randomAmount = randomGenerator(30, 50) // 3 - 5

                        // get drop based on index and push it to alreadyGenerated array, 
                        // so it can't be generated again
                        const { name, icon, classVal } = possibleDrops[index]
                        alreadyGeneratedDrops.push(index)

                        // push that drop into items array
                        items.push(generateDrop('Inventory', invItems.length + i, randomAmount, name, icon, [classVal]))
                    }

                    
                    // generate items, first item is always equipment, others are drops
                    for(let i = 0; i < 3; i++) {
                        if (i === 0) {
                            const itemLevel = enemyLevel > currentLevel ? enemyLevel : currentLevel

                            // for classic game generate random item, for boss game get crafting item
                            if(gameType === 'Classic') items.push(generateItem(itemLevel, 'Inventory', invItems.length, gameType))  
                            if(gameType === 'Boss') {
                                console.log(craftableItems)
                                console.log(enemy)

                                // mythic (30%) / specie item (70%)
                                // TODO: generate that item, add + current to dungeon

                                // get levelType item based on level (low = 0-10, medium = 11 - 23, high = 24+)
                                let itemLevelType
                                if(enemyLevel <= 10) itemLevelType = 0
                                else if(enemyLevel > 10 && enemyLevel <= 23) itemLevelType = 1
                                else itemLevelType = 2

                                // get matching index of the dungeon 
                                // (actually place it above, because I need to add current dungeon +1 and used it here later on?)
                                let matchingDungeonIndex = 0

                                dungeon.forEach((item, dungeonIndex) => {
                                    if (item.type === enemy.dungeon) {
                                        matchingDungeonIndex = dungeonIndex
                                    }
                                })
                            }
                            
                        } 
                        else generateUniqueDrop(alreadyGeneratedDrops, i)
                    }

                    // return items
                    return items
                })()

                // add item to inventory and render it in Game.js
                addItemToInv(rewardItems)
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
        <div className='action'>
            <button onClick={startRound}>
                <div className='hit_chance'>
                    <p>Hit chance: </p>
                    <p>{chanceToHit + '%'}</p>
                </div>
                <div className='icon' id={id}>
                    { icon }
                </div>
            </button>
        </div>
    )
}

Action.propTypes = {
    player: PropTypes.object.isRequired,
    enemy: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
    invItems: PropTypes.array.isRequired,
    craftableItems: PropTypes.array.isRequired,
    dungeon: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    player: state.player,
    enemy: state.enemy,
    character: state.character,
    game: state.game,
    invItems: state.items.invItems,
    craftableItems: state.items.craftableItems,
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
    playerBlocked,
    playerHit,
    resetPlayerDmgTaken,
    addReward,
    addItemToInv 
})(Action)