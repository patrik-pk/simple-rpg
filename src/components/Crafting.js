import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ItemComponent from './inventory/ItemComponent'
import InventoryRow from './inventory/InventoryRow'
import mapDrops from '../logic/mapDrops'
import '../styles/crafting/crafting.css'

function Crafting({ invItems, craftableItems }) {

    // Get Players Drops
    const playerDrops = invItems.filter(item => item.type === 'drop')

    // Mapped Drops
    const drops = {
        low: mapDrops(playerDrops, 0, 3),
        medium: mapDrops(playerDrops, 1, 4),
        high: mapDrops(playerDrops, 2, 5),
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
            case 1: return drops.low
            case 2: return drops.medium
            case 3: return drops.high
            default: break;
        }
    }

    // Map Craftable Items For Displaying
    const displayedCraftableItems = craftableItems.low.mythic.map(item => {
        return item.item
    })

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
            <div className='craftable-items'>
                <InventoryRow itemsProp={displayedCraftableItems.slice(0, 6)} />
                <InventoryRow itemsProp={displayedCraftableItems.slice(6, 12)} />
            </div>

            {/* Craft Section */}
            <div className='craft-section'>

                <div className='drops-needed'>
                    <ItemComponent data={craftableItems.low.mythic[1].dropsNeeded[0]} />
                    <ItemComponent data={craftableItems.low.mythic[1].dropsNeeded[1]} />
                </div>

                <button className='craft-btn'>Craft</button>

            </div>

        </div>
    )
}

Crafting.propTypes = {
    invItems: PropTypes.array.isRequired,
    craftableItems: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    invItems: state.items.invItems,
    craftableItems: state.items.craftableItems
})

export default connect(mapStateToProps)(Crafting)