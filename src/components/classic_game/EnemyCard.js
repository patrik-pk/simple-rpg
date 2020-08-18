import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setEnemy } from '../../actions/enemyActions'
import { resetPlayer } from '../../actions/playerActions'
import { startGame } from '../../actions/gameActions'
import firstLetterUpperCase from '../../logic/firstLetterUpperCase'

import { ReactComponent as Attack } from '../../resources/icons/attack.svg'

function EnemyCard(props) {

    // Destructure From Props
    const { 
        enemy, 
        invItems, 
        resetPlayer, 
        setEnemy, 
        startGame 
    } = props

    const {
        enemyType: {
            drops,
            icon,
            name,
            specie
        },
        level,
    } = enemy

    // Start Game
    const startClassicGame = () => {
        // reset player hp, damageTaken
        resetPlayer()
        // generate enemy
        setEnemy(enemy)
        // set battleStatus to 'inBattle', canAttack to true, reset acquired gold & diamonds
        startGame()
    }

    console.log(enemy)

    // Check if Player has space in inventory
    const haveSpaceInv = invItems.length <= 33 ? true : false

    return (
        <div className={`enemy-card ${specie}`}>

            {/* Top */}
            <div className='top'>
                <p className='name'>{name} ({level})</p>
                <button>Info</button>
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
                { haveSpaceInv ?
                    <Link to='/game' className='attack-container active' onClick={startClassicGame} >
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

        </div>
    )
}

EnemyCard.propTypes = {
    invItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    invItems: state.items.invItems,
})

export default connect(mapStateToProps, { resetPlayer, setEnemy, startGame })(EnemyCard)
