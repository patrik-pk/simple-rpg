import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { resetState, loadState } from '../../redux/actions/loadActions'
import loadAllSaves from './loadAllSaves'
import assignProperIcons from './assignProperIcons'
import { randomGenerator } from '../../shared/utils'

const LoadSave = ({ state, resetState, loadState }) => {

    // Load saves on mount
    useEffect(() => {
        setSaves(loadAllSaves(loadData, deleteData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [saves, setSaves] = useState([])

    // Load Data
    const loadData = key => {
        let loadedState = localStorage.getItem(key)
        loadedState = JSON.parse(loadedState)

        // Unfortunately after stringifying (saving) state into localStorage,
        // every icon from each item gets removed because it is a symbol.
        // So here I have to assign proper icon to every item.
        loadedState = assignProperIcons(loadedState)

        loadState(loadedState)
    }

    // Delete Data
    const deleteData = key => {
        localStorage.removeItem(key)
        setSaves(loadAllSaves(loadData, deleteData))
    }

    // Save Data
    const saveData = parameterState => {
        // only 4 items can be saved
        if(!(localStorage.length < 4)) return

        // get & format date
        let date = new Date()
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        date = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()} ${date.getHours()}:${minutes}`
        date = date.toString()

        // add random number to the date, so that the keys are unique when saving at the same time 
        const key = randomGenerator(100, 999) + date

        // stringify current state
        const stringifiedState = JSON.stringify(parameterState)

        // and save it to localStorage
        localStorage.setItem(key, stringifiedState)
        setSaves(loadAllSaves(loadData, deleteData))
    }

    // Save Class
    const saveClass = localStorage.length < 4 ? 'active2' : ''

    // Render
    return (
        <div className='load-and-save'>

            {/* Heading */}
            <h3 className='heading'>Load & Save</h3>

            {/* Content */}
            <div className='content'>

                {/* Found Saves */}
                <div className='found-saves'>
                    {/* <h4 className='saves-heading'>Saves</h4> */}
                    <ul> { saves.map(item => item.render) }</ul>
                </div>

                {/* Save Button */}
                <div className='options'>
                    <button className='btn reset-btn active2' onClick={resetState}>Reset</button>
                    <button className={`btn save-btn ${saveClass}`} onClick={() => saveData(state)}>Save</button>
                </div>

            </div>

            {/* Note */}
            <p className='note'>
                If you are here just to try things out, you can load the default save
            </p> 
        </div>
    )
}

LoadSave.propTypes = {
    state: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    state: state
})

export default connect(mapStateToProps, { resetState, loadState })(LoadSave)
