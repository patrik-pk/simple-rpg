import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SaveItem from './SaveItem'
import randomGenerator from '../../logic/randomGenerator'

function LoadSave({ state }) {

    // Load saves on mount
    useEffect(() => {
        setSaves(loadAllSaves())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [saves, setSaves] = useState([])

    // Load all saves from localStorage
    const loadAllSaves = () => {
        const savesArr = []

        // loop through localStorage and create save item for each index
        for(let i = 0; i < 4; i++) {
            if(i < localStorage.length) {
                const key = localStorage.key(i)
                let item = localStorage.getItem(key)
                item = JSON.parse(item)
    
                const date = key.slice(3)
    
                savesArr.push({
                    itemState: item,
                    render: <SaveItem 
                        key={key}
                        id={key} 
                        date={date} 
                        level={item.character.currentLevel} 
                        onLoad={loadState} 
                        onDelete={deleteData} 
                    />
                })
            } else {
                savesArr.push({ render: <SaveItem key={i} id='empty' /> })
            }
        }

        return savesArr
    }

    // Load Data
    const loadState = key => {
        console.log(`Load ${key}`)
    }

    // Delete Data
    const deleteData = key => {
        localStorage.removeItem(key)
        setSaves(loadAllSaves())
    }

    // Save Data
    const saveData = () => {
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
        const stringifiedState = JSON.stringify(state)

        // and save it to localStorage
        localStorage.setItem(key, stringifiedState)
        setSaves(loadAllSaves())
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
                <button className={`btn save-btn ${saveClass}`} onClick={saveData}>Save</button>

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
    state
})

export default connect(mapStateToProps)(LoadSave)
