import React from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Stat from "./Stat"
import { resetPlayer } from '../actions/playerActions'
import { setEnemy } from '../actions/enemyActions'
import { startGame } from '../actions/gameActions'

function DungeonItem(props) {

    // Not Finished Dungeon
    if(props.boss !== "Finished") {

        // Destructure From Props
        const { 
            resetPlayer, 
            setEnemy, 
            startGame, 
            invItems, 
            currentLevel, 
            boss, 
            dungeonName, 
            count 
        } = props

        const { 
            level, 
            currentEnemy, 
            maxHp, 
            meleeArmor, 
            rangedArmor, 
            damage, 
            critChance, 
            meleeDodgeChance, 
            rangedDodgeChance 
        } = boss

        // Conditions
        const haveSpaceInv = invItems.length <= 35 ? true : false
        const startActiveClass = haveSpaceInv ? 'active' : ''

        // Start Game
        const createBossGame = () => {
            // reset player hp, damageTaken
            resetPlayer()
            // generate enemy
            setEnemy(boss)
            // set battleStatus to 'inBattle', canAttack to true, reset acquired gold & diamonds
            startGame()
        }

        // Bosses name color is set based on difference between Player level and Boss level
        const enemyStyle = () => {
            const diff = level - currentLevel
            if(diff >= 2) return { color: "red" }
            if (diff < 2 && diff >= 1) return { color: "orange" }
            if (diff < 1 && diff >= -1) return { color: "yellow" }
            if (diff < -1) return { color: "green" } 
        }

        return (
            <div className="dungeon_item">
                <div className="img_container">
                    <img alt="" src={currentEnemy.imgSrc} />
                    <div className="dark_overl"></div>
                </div>
                <div className="heading" >
                    <p id="dungeon">{dungeonName} ({count + 1}/5)</p>
                    <p id="enemy" style={enemyStyle()}>{currentEnemy.name} ({level})</p>

                    <div className='stats' >
                        <Stat name="HP:" value={maxHp} />
                        <Stat name="M-Armor:" value={meleeArmor} enemy={boss} />
                        <Stat name="R-Armor:" value={rangedArmor} enemy={boss} />
                        <Stat name="Strength:" value={damage} />
                        <Stat name="Crit:" value={critChance} />
                        <Stat name="M-Dodge:" value={meleeDodgeChance} />
                        <Stat name="R-Dodge:" value={rangedDodgeChance} />
                    </div>
                </div>
                <Link to="/game" onClick={createBossGame} className={`enter_btn ${startActiveClass}`}>Enter</Link>
            </div>
        )
    }
    // Finished Dungeon
    if(props.boss === "Finished") {

        const finished_style = {
            backgroundImage: "url('resources/environment/dungeon.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

        return (
            <div className="dungeon_item finished" style={finished_style}>
                <div className="dark-overlay"></div>
                <div className="text">
                    <p id="dungeon">{props.dungeonName}</p>
                    <p>Finished</p>
                </div>
            </div>
        )
    }
}

DungeonItem.propTypes = {
    currentLevel: PropTypes.number.isRequired,
    invItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel,
    invItems: state.items.invItems
})

export default connect(mapStateToProps, { resetPlayer, setEnemy, startGame })(DungeonItem)