import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { loadState } from '../../actions/loadActions'
import SaveItem from './SaveItem'
import randomGenerator from '../../logic/randomGenerator'
import equipIcons from '../../data/icons/equipIcons'
import dropIcons from '../../data/icons/dropIcons'

function LoadSave({ state, loadState }) {

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
                        onLoad={loadData} 
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
    const loadData = key => {
        let loadedState = localStorage.getItem(key)
        loadedState = JSON.parse(loadedState)

        // This is propably the worst section of code in this
        // project. After stringifying (saving) state into localStorage,
        // every icon from each item gets removed because it is a symbol.
        // So here I have to assign proper icon to every item.
        loadedState = assignProperIcons(loadedState)

        loadState(loadedState)
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

// Assign Proper Icons
const assignProperIcons = loadedState => {

    // Create array of equip icons out of nested icons object
    const equipArr = []
    let tempArr = Object.values(equipIcons)
    tempArr.forEach(type => {
        const typeArr = Object.values(type)
        equipArr.push(...typeArr)
    })

    // Create array of equip iconKeys from that icons array
    const mappedEquipIconKeys = equipArr.map(icon => icon.iconKey)

    // Create array of drop icon and array of drop iconKeys
    const dropArr = Object.values(dropIcons)
    const mappedDropIconKeys = dropArr.map(drop => drop.iconKey)

    // Loop through craftableItems and assign proper icon to each
    loadedState.items.craftableItems.forEach(type => {
        type.forEach(specie => {
            specie.forEach(item => {
                const index = mappedEquipIconKeys.indexOf(item.item.iconKey)
                item.item.icon = equipArr[index].icon
            })
        })
    })

    // Do the same with equippedItems
    loadedState.items.equippedItems.forEach(item => {
        const index = mappedEquipIconKeys.indexOf(item.iconKey)
        item.icon = equipArr[index].icon
    })

    // Shop Items
    loadedState.items.shopItems.forEach(item => {
        if (item.type === 'Empty') return

        if (item.type === 'equip') {
            const index = mappedEquipIconKeys.indexOf(item.iconKey)
            item.icon = equipArr[index].icon
        } else {
            const index = mappedDropIconKeys.indexOf(item.iconKey)
            item.icon = dropArr[index].icon
        }
    })

    // And with invItems
    loadedState.items.invItems.forEach(item => {
        if (item.type === 'equip') {
            const index = mappedEquipIconKeys.indexOf(item.iconKey)
            item.icon = equipArr[index].icon
        } else {
            const index = mappedDropIconKeys.indexOf(item.iconKey)
            item.icon = dropArr[index].icon
        }
    })

    // Return updated state
    return loadedState
}

LoadSave.propTypes = {
    state: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { loadState })(LoadSave)
