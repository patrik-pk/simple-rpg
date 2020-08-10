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
    const { reduxEnemy, endGame } = props 
    const { battleStatus, generatedItem } = props.game
    const { acquiredXp, acquiredGold, acquiredDiamonds } = props.character
    const history = useHistory()

    // Game On Mount - if enemy doesn't exist (happens on refresh), redirect to /menu
    useEffect(() => {
        !reduxEnemy && history.push('/menu')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Style
    const bg_link = reduxEnemy ? reduxEnemy.currentEnemy.environmentSrc : ''

    const bg_style = {
        backgroundImage: 'url(' + bg_link + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    }

    // Text Variables
    const winText = 'Victory'
    const loseText = 'Defeat'

    // Render
    return(
        <section className='battle_section' style={bg_style}>
            <div className='dark_overlay'></div>
            <div className='container'>
                <div className='characters'>
                    <Player 
                    {...props}
                    attack={props.attack} 
                    gameManager={props.gameManager} 
                    canAttack={props.canAttack}
                    />
                    <Enemy {...props}/>
                </div>

                <div className='game_over' style={{ display: battleStatus === 'inBattle' ? 'none' : 'block' }}>
                    <div className='cont'>
                        <div className='end_text'>
                            <p>{battleStatus === 'Victory' ? winText : loseText}</p>
                        </div>
                        <div className='reward'>
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
                            <div className='right'>
                                <div className='generated_item'>
                                    {
                                    battleStatus === 'Victory' ?
                                    <ItemComponent data={generatedItem} {...props} />
                                    : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='confirm_container'>
                            <Link className='confirm_btn' to='/menu' onClick={endGame}>Continue</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

Game.propTypes = {
    game: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    reduxEnemy: state.enemy,
    game: state.game,
    character: state.character    
})

export default connect(mapStateToProps, { endGame })(Game)