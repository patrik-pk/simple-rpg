import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Stat from '../Stat/Stat'
import { setEnemy } from '../../redux/actions/enemyActions'
import { resetPlayer } from '../../redux/actions/playerActions'
import { startGame } from '../../redux/actions/gameActions'
import { firstLetterUpperCase } from '../../shared/utils'

import { ReactComponent as Attack } from '../../resources/icons/attack.svg'
import { ReactComponent as Close } from '../../resources/icons/close.svg'
import { ReactComponent as Info } from '../../resources/icons/info.svg'

const EnemyCard = props => {

    // Destructure Props
    const { 
        enemy, 
        invItems, 
        inventoryRows,
        resetPlayer, 
        setEnemy, 
        startGame,
        propClass
    } = props

    const {
        enemyType: {
            drops,
            icon,
            name,
            specie
        },
        level,
        maxHp,
        meleeArmor,
        rangedArmor,
        meleeDodgeChance,
        rangedDodgeChance,
        damage,
        critChance,
        difficulty,
        type
    } = enemy

    // Info
    const [infoActive, setInfoActive] = useState(false)
    const infoClass = infoActive ? 'active' : ''

    // Set Game
    const setGame = () => {
        resetPlayer()
        setEnemy(enemy)
        startGame()
    }

    // Check if Player has space in inventory
    const hasSpaceInInventory = invItems.length <= (inventoryRows * 6) - 3 ? true : false

    // Specie To UpperCase
    const specieName = firstLetterUpperCase(specie)

    return (
        <div className={`enemy-card ${specie} ${propClass}`}>

            {/* Top */}
            <div className='top'>
                <p className='name'>{name} ({level})</p>
                <button className='info-btn' onClick={() => setInfoActive(true)}>
                    <Info />
                </button>
            </div>

            {/* Enemy Icon */}
            <div className='icon'>
                { icon.render() }
            </div>

            {/* Bottom (Possible Drops & Attack Button) */}
            <div className='bottom'>

                {/* Drop One */}
                <div className='drop-container'>
                    { drops[0].icon.render() }
                    <p className='drop-name'>{ firstLetterUpperCase(drops[0].name) }</p>
                </div>

                {/* Attack Button */}
                { hasSpaceInInventory ?
                    <Link to='/game' className='attack-container active' onClick={setGame} >
                        <Attack />
                    </Link>
                    :
                    <div className='attack-container'>
                        <Attack />
                        <p className='attack-warning'>Clean up your inventory first</p>
                    </div>
                }

                {/* Drop Two */}
                <div className='drop-container'>
                    { drops[1].icon.render() }
                    <p className='drop-name'>{ firstLetterUpperCase(drops[1].name) }</p>
                </div>

            </div>

            {/* Info - Shows when info button is clicked */}
            <div className={`info ${infoClass}`}>
                <div className='info-container'>

                    {/* Hide Button */}
                    <button className='hide-btn' onClick={() => setInfoActive(false)}>
                        <Close />
                    </button>

                    <div className='name'>
                        <p>{name} ({level})</p>
                    </div>

                    {/* Stats */}
                    <ul className='stats'>
                        <Stat name='HP:' value={maxHp} />
                        <Stat name='M-Armor:' value={meleeArmor} enemy={enemy} />
                        <Stat name='R-Armor:' value={rangedArmor} enemy={enemy} />
                        <Stat name='M-Dodge(%):' value={Math.round(meleeDodgeChance)} />
                        <Stat name='R-Dodge(%):' value={Math.round(rangedDodgeChance)} />
                        <Stat name='Damage:' value={damage} />
                        <Stat name='Crit(%):' value={critChance} />
                        <Stat name='Difficulty:' value={difficultyName(difficulty, type)} />
                        <Stat name='Specie:' value={specieName} />
                    </ul>
                </div>
            </div>

        </div>
    )
}

// Set Difficulty Name Based On Difficulty Index
const difficultyName = (difficulty, type) => {
    if (type === 'Boss') return 'Boss'
    else switch (difficulty) {
        case 1: return 'Easy'
        case 2: return 'Medium'
        case 3: return 'Hard'
        default: break;
    }
}

EnemyCard.propTypes = {
    invItems: PropTypes.array.isRequired,
    inventoryRows: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    invItems: state.items.invItems,
    inventoryRows: state.items.inventoryRows
})

export default connect(mapStateToProps, { resetPlayer, setEnemy, startGame })(EnemyCard)
