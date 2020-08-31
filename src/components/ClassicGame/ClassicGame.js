import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import EnemyCard from '../EnemyCard/EnemyCard'
import { setRolls } from '../../actions/characterActions'
import { generateClassicEnemies } from '../../actions/gameActions'

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
        generateClassicEnemies(currentLevel)
    }

    // If there are no classicEnemies, generate them - they have no starting value
    if(classicEnemies.length === 0) generateClassicEnemies(currentLevel)

    // Reroll Active
    const rerollActive = rolls > 0 ? true : false
    const rerollClass = rerollActive ? 'active2' : ''

    // Timer Display
    const timerDisplay = rollTimer ? `*Adding rolls every ${rollTimer}s*` : 'Rolls are full'

    // Render
    return (
        <div className='classic-game'>

            {/* Heading */}
            <h3 className='heading'>Classic Game</h3>
            
            {/* Reroll Enemies */}
            <div className='reroll-enemies'>
                <p className='reroll-timer'>{timerDisplay}</p>
                <button className={`btn reroll-btn ${rerollClass}`} type='button' onClick={rerollActive ? reroll : null}>Reroll ({rolls})</button>    
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
    rolls: state.character.rolls,
    rollTimer: state.character.rollTimer
})

export default connect(mapStateToProps, { generateClassicEnemies, setRolls })(ClassicGame)
