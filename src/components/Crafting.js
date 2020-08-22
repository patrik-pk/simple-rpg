import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from './inventory/InventoryRow'
import mapDrops from '../logic/mapDrops'
import '../styles/crafting/crafting.css'

function Crafting({ invItems, craftableItems }) {

    // MENU

    // Menu Active
    const [menuActive, setMenuActive] = useState(1)

    // Menu Classes
    const menuClass1 = menuActive === 1 ? 'active' : ''
    const menuClass2 = menuActive === 2 ? 'active' : ''
    const menuClass3 = menuActive === 3 ? 'active' : ''

    // PLAYERS DROPS

    // Get Players Drops
    const playerDropItems = invItems.filter(item => item.type === 'drop')

    // Mapped Player Drops
    const playerDrops = [
        mapDrops(playerDropItems, 0, 3),
        mapDrops(playerDropItems, 1, 4),
        mapDrops(playerDropItems, 2, 5),
    ]

    // CRAFTABLE ITEMS

    // Get Matching Items - that match level type menu and rarity type menu
    // - first index is for level type (low, medium, high)
    // - the second one is for rarity type (mythic, avian, etc.)
    const matchingCraftableItems = craftableItems[menuActive - 1][0]

    const displayedCraftableItems = matchingCraftableItems.map(item => {
        return item.item
    })

    // NEEDED DROPS
    const neededDrops = [
        mapDrops(matchingCraftableItems[0].dropsNeeded, 0, 3),
        mapDrops(matchingCraftableItems[0].dropsNeeded, 1, 4),
        mapDrops(matchingCraftableItems[0].dropsNeeded, 2, 5),
    ]


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
                <InventoryRow itemsProp={playerDrops[menuActive - 1].slice(0, 6)} />
                <InventoryRow itemsProp={playerDrops[menuActive - 1].slice(6, 12)} />
            </div>

            {/* Craftable Items */}
            <div className='craftable-items'>
                <InventoryRow itemsProp={displayedCraftableItems.slice(0, 6)} />
                <InventoryRow itemsProp={displayedCraftableItems.slice(6, 12)} />
            </div>

            {/* Drops Needed */}
            <div className='drops-needed'>
                <InventoryRow itemsProp={neededDrops[menuActive - 1].slice(0, 6)} />
                <InventoryRow itemsProp={neededDrops[menuActive - 1].slice(6, 12)} />
            </div>

            {/* Craft Button */}
            <button className='craft-btn'>Craft</button>

        </div>
    )
}

Crafting.propTypes = {
    invItems: PropTypes.array.isRequired,
    craftableItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    invItems: state.items.invItems,
    craftableItems: state.items.craftableItems
})

export default connect(mapStateToProps)(Crafting)