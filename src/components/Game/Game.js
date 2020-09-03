import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { endGame } from '../../redux/actions/gameActions'
import Enemy from './Enemy'
import Player from './Player'
import Item from '../Item/Item'

const Game = props => {

    // Destructure props
    const {
        game: { battleStatus, generatedItems },
        character: { acquiredXp, acquiredGold },
        enemy, 
        endGame 
    } = props 

    const history = useHistory()

    // Game on mount - if enemy doesn't exist (happens on refresh), redirect to /menu
    useEffect(() => {
        if(!enemy) history.push('/load_and_save')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Generated items
    const mappedItems = generatedItems ? generatedItems.map(item => <Item key={item.key} data={item} renderedInGame={true} />) : null

    // Game over class
    const gameOverClass = battleStatus !== 'inBattle' ? 'active' : ''

    // Render
    return(
        <section className='battle-section'>

            {/* Characters */}
            <div className='characters'>
                <Player />
                <Enemy />
            </div>

            {/* Game Over */}
            <div className={`game-over ${gameOverClass}`}>

                {/* End Text */}
                <div className='end-text'>
                    <p>{battleStatus}</p>
                </div>

                {/* Reward */}
                <div className='reward'>

                    {/* Left - Gold, Xp */}
                    <ul className='left'>
                        <li>
                            <p>Gold:</p>
                            <p>{acquiredGold}</p>  
                        </li>
                        <li>
                            <p>Experience:</p>
                            <p>{acquiredXp}</p>
                        </li>
                    </ul>

                    {/* Right - Generated Item(s) */}
                    <ul className='right'>
                        { battleStatus === 'Victory' ? mappedItems : null }
                    </ul>

                </div>

                {/* Confirm Button */}
                <Link className='btn confirm-btn active' to='/inventory' onClick={endGame}>Continue</Link>
            </div>

        </section>
    )
}

Game.propTypes = {
    game: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    enemy: state.enemy,
    game: state.game,
    character: state.character    
})

export default connect(mapStateToProps, { endGame })(Game)