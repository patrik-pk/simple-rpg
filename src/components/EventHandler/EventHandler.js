import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setRolls, setRollTimer } from '../../redux/actions/characterActions'
import { updatePlayerStats } from '../../redux/actions/playerActions'
import defaultSave from './defaultSave'

// Component that handles time events
function EventHandler({ rolls, equippedItems, currentLevel, setRolls, setRollTimer, updatePlayerStats }) {

    const [canAddRoll, setCanAddRoll] = useState(true)
    const timer = 15

    // Calculate player stats if they change
    useEffect(() => {
        updatePlayerStats(equippedItems, currentLevel)
    }, [updatePlayerStats, equippedItems, currentLevel])

    // On App init if there is nothing in localStorage, put there a default save
    useEffect(() => {
        if (localStorage.length === 0) localStorage.setItem('123Default', JSON.stringify(defaultSave()))
    }, [])

    // Handle Adding Rolls
    useEffect(() => {
        if (rolls < 5) {
            if (canAddRoll) {
                setCanAddRoll(false)
                setRollTimer(timer)

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