import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from './inventory/InventoryRow'
import possibleDrops from '../data/possibleDrops'
import DropItem from '../data/DropItem'
import '../styles/crafting/crafting.css'

function Crafting({ invItems }) {

    // Get Players Drops
    const playerDrops = invItems.filter(item => item.type === 'drop')

    // Map Drops
    const mapDrops = (key1, key2) => {

        // make an array out of possibleDrops object
        const allDropsArr = Object.values(possibleDrops)
        const mappedDrops = []

        // loop through the array of possible drops
        allDropsArr.forEach(specie => {
            // make an array out of the current specie
            const specieArr = Object.values(specie)
            // and push key1 and key2 items to the mapped array
            mappedDrops.push(specieArr[key1])
            mappedDrops.push(specieArr[key2])
        })

        // make actual items from mapped drops
        const itemsArr = mappedDrops.map((drop, i) => {

            // loop through players drops and get the amount if the name matches
            let dropAmount = 0
            playerDrops.forEach(playerDrop => {
                if(playerDrop.name === drop.name) dropAmount = playerDrop.amount
            })

            return new DropItem('Crafting', i, dropAmount, drop.name, drop.icon, [drop.classVal], 10 * dropAmount)
        })

        // sort the array
        const firstHalf = []
        const secondHalf = []

        itemsArr.forEach((item, i) => {
            if(i % 2 === 0) firstHalf.push(item)
            else secondHalf.push(item) 
        })

        // join the arrays together
        const result = firstHalf.concat(secondHalf)

        // return result
        return result
    }

    // Mapped Drops
    const drps = {
        low: mapDrops(0, 3),
        medium: mapDrops(1, 4),
        high: mapDrops(2, 5),
    }

    // Menu Active
    const [menuActive, setMenuActive] = useState(1)

    // Menu Classes
    const menuClass1 = menuActive === 1 ? 'active' : ''
    const menuClass2 = menuActive === 2 ? 'active' : ''
    const menuClass3 = menuActive === 3 ? 'active' : ''

    // Display Proper Drops Based On Menu
    const displayDrops = () => {
        switch(menuActive) {
            case 1: return drps.low
            case 2: return drps.medium
            case 3: return drps.high
            default: break;
        }
    }

    // Render
    return (
        <div className='crafting'>

            {/* Heading */}
            <h3 className='heading'>Crafting</h3>

            {/* Menu */}
            <div className='crafting-menu'>
                <ul className='menu-items'>

                    <li className={`menu-item ${menuClass1}`} onClick={() => setMenuActive(1)}>
                        <p>Low Level</p>
                    </li>
                    <li className={`menu-item ${menuClass2}`} onClick={() => setMenuActive(2)}>
                        <p>Medium Level</p>
                    </li>
                    <li className={`menu-item ${menuClass3}`} onClick={() => setMenuActive(3)}>
                        <p>High Level</p>
                    </li>

                </ul>
            </div>

            {/* Players Drops */}
            <div className="player-drops">
                <InventoryRow itemsProp={displayDrops().slice(0, 6)} />
                <InventoryRow itemsProp={displayDrops().slice(6, 12)} />
            </div>

            {/* Craftable Items */}
        </div>
    )
}

Crafting.propTypes = {
    invItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    invItems: state.items.invItems
})

export default connect(mapStateToProps)(Crafting)