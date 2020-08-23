import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from './inventory/InventoryRow'
import { unselectCraftableItems, addItemToInv, removeDropsFromInv } from '../actions/itemsActions'
import mapDrops from '../logic/mapDrops'
import deepCopy from '../logic/deepCopy'
import '../styles/crafting/crafting.css'

function Crafting({ invItems, craftableItems, unselectCraftableItems, addItemToInv, removeDropsFromInv }) {

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
    const playerDrops = invItems.filter(item => item.type === 'drop')

    // Mapped Player Drops
    const mappedPlayerDrops = mapDrops(playerDrops, dropIndex1, dropIndex2)

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
    const selectedItemArr = craftableItems[menuActive][0].filter(item => item.item.isSelected)
    const neededDrops = selectedItemArr[0] ? selectedItemArr[0].dropsNeeded : []

    const mappedNeededDrops = mapDrops(neededDrops, dropIndex1, dropIndex2)

    
    // CRAFT
    
    // Check if player has needed drops to craft the item
    const compareDrops = () => {

        // loop through need drops (return array of booleans)
        const compared = neededDrops.map(neededDrop => {
            let found = false

            // nest loop through player drops, if the names match
            //  and player has the amount, set found to true
            playerDrops.forEach(playerDrop => {
                if(playerDrop.name === neededDrop.name && playerDrop.amount >= neededDrop.amount) {
                    found = true
                }
            })

            return found
        })

        // if player has both drops with needed amount, return true
        return compared[0] && compared[1] ? true : false
    }

    const craftClass = compareDrops() ? 'active' : '' 

    // Craft Function - Remove players needed drops and add selected item to inventory
    const craft = () => {
        // Todo: Add inv items length conditions - player needs to have space in inventory
        if(selectedItemArr.length === 1 && compareDrops()) {

            // remove players drops needed to craft the item
            removeDropsFromInv(neededDrops)

            // make a deep copy of the selected item, edit its properties and add it to inventory
            const item = deepCopy(selectedItemArr[0].item)
            item.key = invItems.length
            item.destination = 'Inventory'
            item.isSelected = false
            addItemToInv(item)
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
                <InventoryRow itemsProp={mappedPlayerDrops.slice(0, 6)} />
                <InventoryRow itemsProp={mappedPlayerDrops.slice(6, 12)} />
            </div>

            {/* Craftable Items */}
            <div className='craftable-items'>
                <InventoryRow itemsProp={displayedCraftableItems.slice(0, 6)} />
                <InventoryRow itemsProp={displayedCraftableItems.slice(6, 12)} />
            </div>

            {/* Drops Needed */}
            <div className='drops-needed'>
                <InventoryRow itemsProp={mappedNeededDrops.slice(0, 6)} />
                <InventoryRow itemsProp={mappedNeededDrops.slice(6, 12)} />
            </div>

            {/* Craft Button */}
            {/* Todo: Success / Fail Alert on the left */}
            <button className={`craft-btn ${craftClass}`} onClick={craft}>Craft</button>

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

export default connect(mapStateToProps, { unselectCraftableItems, addItemToInv, removeDropsFromInv })(Crafting)