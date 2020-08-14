import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { endGame } from '../../actions/gameActions'
import Enemy from './Enemy'
import Player from './Player'
import ItemComponent from '../inventory/ItemComponent'

import '../../styles/gamepage/gamepage.css'
import '../../styles/item/item.css'


function Game(props) {

    // Destructure From Props
    const {
        game: { battleStatus, generatedItem },
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


    // Text Variables
    const winText = 'Victory'
    const loseText = 'Defeat'

    // Render
    return(
        <section className='battle_section'>

            {/* Characters */}
            <div className='characters'>
                <Player />
                <Enemy />
            </div>

            {/* Game Over */}
            <div className='game_over' style={{ display: battleStatus === 'inBattle' ? 'none' : 'block' }}>

                {/* End Text */}
                <div className='end_text'>
                    <p>{battleStatus === 'Victory' ? winText : loseText}</p>
                </div>

                {/* Reward */}
                <div className='reward'>

                    {/* Left - Gold, Diamonds, Xp */}
                    <div className='left'>
                        <div>
                            <p>Gold:</p>
                            <p>{acquiredGold}</p>  
                        </div>
                        <div>
                            <p>Diamonds:</p>
                            <p>{acquiredDiamonds}</p>
                        </div>
                        <div>
                            <p>Experience:</p>
                            <p>{acquiredXp}</p>
                        </div>
                    </div>

                    {/* Right - Generated Item(s) */}
                    <div className='right generated_item'>
                        {
                        battleStatus === 'Victory' ?
                        <ItemComponent data={generatedItem} renderedInGame={true} />
                        : null
                        }
                    </div>

                </div>

                {/* Confirm Button */}
                <Link className='confirm_btn' to='/menu' onClick={endGame}>Continue</Link>
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