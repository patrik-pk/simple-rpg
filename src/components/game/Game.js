import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { endGame } from '../../actions/gameActions'
import Enemy from './Enemy'
import Player from './Player'
import ItemComponent from '../inventory/ItemComponent'

function Game(props) {

    // Destructure From Props
    const {
        game: { battleStatus, generatedItems },
        character: { acquiredXp, acquiredGold, acquiredDiamonds },
        enemy, 
        endGame 
    } = props 

    const history = useHistory()

    // Game On Mount - if enemy doesn't exist (happens on refresh), redirect to /menu
    useEffect(() => {
        !enemy && history.push('/menu')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Generated Items
    const mappedItems = generatedItems ? generatedItems.map(item => <ItemComponent key={item.key} data={item} renderedInGame={true} />) : null

    // Text Variables
    const winText = 'Victory'
    const loseText = 'Defeat'

    // Render
    return(
        <section className='battle-section'>

            {/* Characters */}
            <div className='characters'>
                <Player />
                <Enemy />
            </div>

            {/* Game Over */}
            <div className='game-over' style={{ display: battleStatus === 'inBattle' ? 'none' : 'block' }}>

                {/* End Text */}
                <div className='end-text'>
                    <p>{battleStatus === 'Victory' ? winText : loseText}</p>
                </div>

                {/* Reward */}
                <div className='reward'>

                    {/* Left - Gold, Diamonds, Xp */}
                    <ul className='left'>
                        <li>
                            <p>Gold:</p>
                            <p>{acquiredGold}</p>  
                        </li>
                        <li>
                            <p>Diamonds:</p>
                            <p>{acquiredDiamonds}</p>
                        </li>
                        <li>
                            <p>Experience:</p>
                            <p>{acquiredXp}</p>
                        </li>
                    </ul>

                    {/* Right - Generated Item(s) */}
                    <ul className='right'>
                        {
                        battleStatus === 'Victory' ?
                        mappedItems
                        : null
                        }
                    </ul>

                </div>

                {/* Confirm Button */}
                <Link className='confirm-btn' to='/menu' onClick={endGame}>Continue</Link>
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