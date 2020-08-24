import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import EnemyCard from './EnemyCard'
import { generateClassicEnemies, setRolls } from '../../actions/gameActions'
import rerollEnemies from '../../logic/rerollEnemies'

function ClassicGame(props) {

    // Destructure From Props
    const { 
        generateClassicEnemies,
        setRolls,
        currentLevel, 
        classicEnemies,
        rolls,
        rollTimer 
    } = props

    // Reroll
    const reroll = () => {
        setRolls(-1)
        generateClassicEnemies(rerollEnemies(currentLevel))
    }

    // If there are no classicEnemies, generate them - they have no starting value
    if(classicEnemies.length === 0) generateClassicEnemies(rerollEnemies(currentLevel))

    // Reroll Active
    const rerollActive = rolls > 0 ? true : false
    const rerollClass = rerollActive ? 'active' : ''

    // Timer Display
    const timerDisplay = rollTimer ? `Next roll in: ${rollTimer}` : 'Rolls are full'

    // Render
    return (
        <div className='classic-game'>

            {/* Heading */}
            <h3 className='heading'>Classic Game</h3>
            
            {/* Reroll Enemies */}
            <div className='reroll-enemies'>

                <div className='left'>
                    <p>{timerDisplay}</p>
                </div>

                <div className='right'>
                    <button className={`reroll-btn ${rerollClass}`} type='button' onClick={rerollActive ? reroll : null}>Reroll ({rolls})</button>    
                </div>

            </div>

            {/* Enemies */}
            <div className='enemies'>
                { classicEnemies.map((enemy, i) => <EnemyCard key={i} enemy={enemy} />) }
            </div>

        </div>
    )
}

ClassicGame.propTypes = {
    currentLevel: PropTypes.number.isRequired,
    classicEnemies: PropTypes.array.isRequired,
    rolls: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel,
    classicEnemies: state.game.classicEnemies,
    rolls: state.game.rolls,
    rollTimer: state.game.rollTimer
})

export default connect(mapStateToProps, { generateClassicEnemies, setRolls })(ClassicGame)
