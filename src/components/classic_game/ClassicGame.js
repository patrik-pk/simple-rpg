import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import EnemyCard from './EnemyCard'
import { generateClassicEnemies } from '../../actions/gameActions'
import generateEnemy from '../../logic/generateEnemy'
import shuffleArray from '../../logic/shuffleArray'

import '../../styles/classic_game/classic_game.css'

function ClassicGame(props) {

    // Destructure From Props
    const { 
        generateClassicEnemies,
        currentLevel, 
        classicEnemies 
    } = props

    // Reroll - generate 3 enemies with unique enemyType, with 
    // different level - first has one level less than player, second has the same
    // and the third has one level more than player, then randomize the array
    const reroll = () => {
        const enemies = []
        const alreadyGenerated = []
        const diff = [-1, 0, 1]

        for(let i = 0; i < 3; i++) {

            // set enemy level to currentLevel + diff from array for 3 different difficulties
            let enemyLevel = currentLevel + diff[i]

            // enemy level cant be -1 or 31, if it is, substract the diff back
            if(enemyLevel < 0 || enemyLevel > 30) enemyLevel -= diff[i]

            // generate enemy
            const newEnemy = generateEnemy('Classic', enemyLevel, currentLevel, { alreadyGenerated, isSet: false }) 

            // and push it to the array
            enemies.push(newEnemy)
            //also push enemyType to alreadyGenerated, so the same type can't be generated again
            alreadyGenerated.push(newEnemy.enemyType)
        }

        // shuffle the array to randomize the order of enemies
        const shuffled = shuffleArray(enemies)

        // and update the state
        generateClassicEnemies(shuffled)
    }

    // If there are no classicEnemies, generate them - they have no starting value
    if(classicEnemies.length === 0) reroll()

    // Reroll Active
    const rerollActive = /* reroll condition */ true
    const rerollClass = rerollActive ? 'active' : ''

    // Render
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
                    <button className={`reroll-btn ${rerollClass}`} type='button' onClick={rerollActive ? reroll : null}>Reroll (3)</button>    
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
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel,
    classicEnemies: state.game.classicEnemies
})

export default connect(mapStateToProps, { generateClassicEnemies })(ClassicGame)
