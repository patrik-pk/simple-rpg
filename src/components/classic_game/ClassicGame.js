import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import EnemyCard from './EnemyCard'
import { setEnemy } from '../../actions/enemyActions'
import { resetPlayer } from '../../actions/playerActions'
import { startGame } from '../../actions/gameActions'
import generateEnemy from '../../logic/generateEnemy'

import '../../styles/classic_game/classic_game.css'

function ClassicGame(props) {

    const { resetPlayer, setEnemy, startGame, currentLevel, invItems } = props

    const haveSpaceInv = invItems.length <= 35 ? true : false
    const startActiveStyle = haveSpaceInv ? 'active' : ''

    // Start Game
    const createClassicGame = () => {
        const enemy = generateEnemy('Classic', currentLevel)
        // reset player hp, damageTaken
        resetPlayer()
        // generate enemy
        setEnemy(enemy)
        // set battleStatus to 'inBattle', canAttack to true, reset acquired gold & diamonds
        startGame()
    }

    return (
        <div className='classic-game'>

            {/* Heading */}
            <h3 className='heading'>Classic Game</h3>
            
            {/* Reroll Enemies */}
            <div className='reroll-enemies'>

                <div className='left'>
                    <p>Next roll in: 0:45</p>
                </div>

                <div className='right'>
                    <button className='reroll-btn' type='button'>Reroll (3)</button>    
                </div>

            </div>

            {/* Enemies */}
            <div className='enemies'>
                <EnemyCard />
                <EnemyCard />
                <EnemyCard />
            </div>


            {/* <Link to={haveSpaceInv ? '/game' : '/menu'} className={'menu_btn start_btn' + startActiveStyle} onClick={createClassicGame} >
            Start Game
            </Link> */}
        </div>
    )
}

ClassicGame.propTypes = {
    currentLevel: PropTypes.number.isRequired,
    invItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel,
    invItems: state.items.invItems
})

export default connect(mapStateToProps, { resetPlayer, setEnemy, startGame })(ClassicGame)
