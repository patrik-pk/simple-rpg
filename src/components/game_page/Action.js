import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setCanAttack, gameWon, itemObtained } from '../../actions/gameActions'
import { enemyDodged, enemyHit, resetEnemyDmgTaken } from '../../actions/enemyActions'
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
        setCanAttack,
        gameWon,
        itemObtained, 
        enemyDodged, 
        enemyHit, 
        resetEnemyDmgTaken,
        addReward,
        addItemToInv
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
                // Battle Won - set battleStatus to 'Victory'
                gameWon()
                // generate reward and update state
                const reward = getReward(reduxEnemy, character, 'Victory', 'Classic')
                addReward(reward)
                // generate item
                const item = generateItem(character, reduxEnemy, 'Inventory', 1, 'Clasic')
                // update generatedItem in game reducer - to display at the end of the game
                itemObtained(item)
                // add item to inventory
                addItemToInv(item)
                // break out of this whole function
                return
            }
        }

        // After X seconds ENEMY ATTACKS PLAYER

        setTimeout(() => {
            // enemy attacks player
        }, md.global.gameTimer)


        // After X * 2 seconds PLAYER CAN ATTACK AGAIN, 
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

Action.propTypes = {
    reduxPlayer: PropTypes.object.isRequired,
    reduxEnemy: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    reduxPlayer: state.player,
    reduxEnemy: state.enemy,
    character: state.character,
    game: state.game
})

export default connect(mapStateToProps, { 
    setCanAttack,
    gameWon,
    itemObtained, 
    enemyDodged, 
    enemyHit,
    resetEnemyDmgTaken,
    addReward,
    addItemToInv 
})(Action)