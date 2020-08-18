import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setEnemy } from '../../actions/enemyActions'
import { resetPlayer } from '../../actions/playerActions'
import { startGame } from '../../actions/gameActions'

import { ReactComponent as Enemy } from '../../resources/icons/creatures/reptiles/dragon.svg'
import { ReactComponent as Drop } from '../../resources/icons/drop/small_soul.svg'
import { ReactComponent as Attack } from '../../resources/icons/attack.svg'

function EnemyCard({ enemy, invItems, resetPlayer, setEnemy, startGame }) {

    // Start Game
    const startClassicGame = () => {
        // reset player hp, damageTaken
        resetPlayer()
        // generate enemy
        setEnemy(enemy)
        // set battleStatus to 'inBattle', canAttack to true, reset acquired gold & diamonds
        startGame()
    }

    const haveSpaceInv = invItems.length <= 35 ? true : false
    const linkTo = haveSpaceInv ? '/game' : '/menu'
    const startActive = haveSpaceInv ? 'active' : ''

    return (
        <div className='enemy-card'>

            {/* Top */}
            <div className='top'>
                <p className='name'>Enemy (0)</p>
                <button>Info</button>
                <button type='button'>Attack</button>
                <Link to={linkTo} className={`menu_btn start_btn ${startActive}`} onClick={startClassicGame} >
                    Start Game
                </Link>
            </div>

            {/* Enemy Icon */}
            <div className='icon'>
                <Enemy />
            </div>

            {/* Possible Drop Items */}
            <ul className='possible-drops'>

                <li className="drop-container">
                    <Drop />
                </li>

                <li className='drop-container'>
                    <Attack />
                </li>

                <li className="drop-container">
                    <Drop />
                </li>

            </ul>

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
