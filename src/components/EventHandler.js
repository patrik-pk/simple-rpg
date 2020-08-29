import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setRolls, setRollTimer } from '../actions/characterActions'
import { updatePlayerStats } from '../actions/playerActions'
import calculatePlayerStats from '../logic/calculatePlayerStats'
import defaultSave from '../logic/defaultSave'

// Component that handles time events
function EventHandler({ rolls, equippedItems, currentLevel, setRolls, setRollTimer, updatePlayerStats }) {

    const [canAddRoll, setCanAddRoll] = useState(true)
    const timer = 15

    // Countdown Function - causes to rerender components every tick, 
    // so not being used until I manage to fix this

    // const countdown = (duration) => {
    //     let seconds = duration

    //     const tick = () => {
    //         seconds--
    //         if (seconds > 0) {
    //             setTimeout(() => {
    //                 setRollTimer(seconds)
    //                 tick()
    //             }, 1000)
    //         }
    //     }

    //     tick()
    // }

    // Calculate Player Stats & create default save 
    // if localStorage is empty on App Init
    useEffect(() => {
        if(localStorage.length === 0) localStorage.setItem('123Default', JSON.stringify(defaultSave()))
        updatePlayerStats(calculatePlayerStats(equippedItems, currentLevel))
    }, [updatePlayerStats, equippedItems, currentLevel])

    // Handle Adding Rolls
    useEffect(() => {
        if (rolls < 5) {
            if (canAddRoll) {
                setCanAddRoll(false)
                setRollTimer(timer)
                // countdown(timer)

                setTimeout(() => {
                    setRolls(1)
                    setCanAddRoll(true)
                    setRollTimer(null)
                }, timer * 1000)
            }
        }
        // eslint-disable-next-line
    }, [rolls, canAddRoll])


    // Return
    return <div className='event-handler'></div>
}

EventHandler.propTypes = {
    rolls: PropTypes.number.isRequired,
    equippedItems: PropTypes.array.isRequired,
    currentLevel: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    rolls: state.character.rolls,
    rollTimer: state.character.rollTimer,
    equippedItems: state.items.equippedItems,
    currentLevel: state.character.currentLevel
})

export default connect(mapStateToProps, { setRolls, setRollTimer, updatePlayerStats })(EventHandler)