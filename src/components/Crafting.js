import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from './inventory/InventoryRow'
import possibleDrops from '../data/possibleDrops'
import DropItem from '../data/DropItem'
import '../styles/crafting/crafting.css'

function Crafting() {
    // TODO: Calculate value based on drop items amount

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
            return new DropItem('Crafting', i, null, drop.name, drop.icon, [drop.classVal], 0)
        })

        // return items
        return itemsArr
    }

    const drps = {
        low: mapDrops(0, 3),
        medium: mapDrops(1, 4),
        high: mapDrops(2, 5),
    }

    // Menu Active
    const [menuActive, setMenuActive] = useState(['active', '', ''])

    // Render
    return (
        <div className='crafting'>

            {/* Heading */}
            <h3 className='heading'>Crafting</h3>

            {/* Menu */}
            <div className='crafting-menu'>
                <ul className='menu-items'>

                    <li className={`menu-item ${menuActive[0]}`} onClick={() => setMenuActive(['active', '', ''])}>
                        <p>Low Level</p>
                    </li>
                    <li className={`menu-item ${menuActive[1]}`} onClick={() => setMenuActive(['', 'active', ''])}>
                        <p>Medium Level</p>
                    </li>
                    <li className={`menu-item ${menuActive[2]}`} onClick={() => setMenuActive(['', '', 'active'])}>
                        <p>High Level</p>
                    </li>

                </ul>
            </div>

            {/* Players Drops */}
            <div className="players-drops">
                <InventoryRow itemsProp={drps.low.slice(0, 6)} />
                <InventoryRow itemsProp={drps.low.slice(6, 12)} />
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