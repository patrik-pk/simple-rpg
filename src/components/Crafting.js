import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from './inventory/InventoryRow'
import { unselectCraftableItems } from '../actions/itemsActions'
import mapDrops from '../logic/mapDrops'
import '../styles/crafting/crafting.css'

function Crafting({ invItems, craftableItems, unselectCraftableItems }) {

    // Unselect Items on Unmount
    useEffect(() => {
        return () => unselectCraftableItems()
    }, [unselectCraftableItems])

    // MENU

    // Activate Menu
    const activateMenu = index => {
        setMenuActive(index)
        unselectCraftableItems()
    }

    // Menu Active
    const [menuActive, setMenuActive] = useState(0)

    // Menu Classes
    const menuClass1 = menuActive === 0 ? 'active' : ''
    const menuClass2 = menuActive === 1 ? 'active' : ''
    const menuClass3 = menuActive === 2 ? 'active' : ''

    // Drop Indexes Based On Level Type
    const [ dropIndex1, dropIndex2 ] = (() => {
        switch(menuActive) {
            case 0: return [0, 3]
            case 1: return [1, 4]
            case 2: return [2, 5]
            default: return [0, 3]
        }
    })()

    // PLAYERS DROPS

    // Get Players Drops
    const playerDropItems = invItems.filter(item => item.type === 'drop')

    // Mapped Player Drops
    const playerDrops = mapDrops(playerDropItems, dropIndex1, dropIndex2)

    // CRAFTABLE ITEMS

    // Get Matching Items - that match level type menu and rarity type menu
    // - first index is for level type (low, medium, high)
    // - the second one is for rarity type (mythic, avian, etc.)
    const matchingCraftableItems = craftableItems[menuActive][0]

    const displayedCraftableItems = matchingCraftableItems.map(item => {
        return item.item
    })

    // NEEDED DROPS

    // Get Selected Item
    const selectedItem = craftableItems[menuActive][0].filter(item => item.item.isSelected)
    const selectedItemDrops = selectedItem[0] ? selectedItem[0].dropsNeeded : []

    const neededDrops = mapDrops(selectedItemDrops, dropIndex1, dropIndex2)


    // Render
    return (
        <div className='crafting'>

            {/* Heading */}
            <h3 className='heading'>Crafting</h3>

            {/* Menu */}
            <div className='crafting-menu'>
                <ul className='menu-items'>

                    <li className={`menu-item ${menuClass1}`} onClick={() => activateMenu(0)}>
                        <p>Low Level</p>
                    </li>
                    <li className={`menu-item ${menuClass2}`} onClick={() => activateMenu(1)}>
                        <p>Medium Level</p>
                    </li>
                    <li className={`menu-item ${menuClass3}`} onClick={() => activateMenu(2)}>
                        <p>High Level</p>
                    </li>

                </ul>
            </div>

            {/* Players Drops */}
            <div className="player-drops">
                <InventoryRow itemsProp={playerDrops.slice(0, 6)} />
                <InventoryRow itemsProp={playerDrops.slice(6, 12)} />
            </div>

            {/* Craftable Items */}
            <div className='craftable-items'>
                <InventoryRow itemsProp={displayedCraftableItems.slice(0, 6)} />
                <InventoryRow itemsProp={displayedCraftableItems.slice(6, 12)} />
            </div>

            {/* Drops Needed */}
            <div className='drops-needed'>
                <InventoryRow itemsProp={neededDrops.slice(0, 6)} />
                <InventoryRow itemsProp={neededDrops.slice(6, 12)} />
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

export default connect(mapStateToProps, { unselectCraftableItems })(Crafting)