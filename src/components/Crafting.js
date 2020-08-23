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

    // LEVEL MENU

    // Activate Level Menu
    const activateLevelMenu = index => {
        setLevelMenuActive(index)
        unselectCraftableItems()
    }

    // Level Menu Active
    const [levelMenuActive, setLevelMenuActive] = useState(0)

    // Mapped Level Menu Items
    const mappedLevelMenuItems = () => {
        const data = ['Low Level', 'Medium Level', 'High Level']

        const mapped = data.map((level, i) => {
            return (
                <li key={i} className={`menu-item ${levelMenuActive === i ? 'active' : ''}`} onClick={() => activateLevelMenu(i)}>
                    <p>{level}</p>
                </li>
            )
        })

        return mapped
    }

    // Drop Indexes Based On Level Type
    const [ dropIndex1, dropIndex2 ] = (() => {
        switch(levelMenuActive) {
            case 0: return [0, 3]
            case 1: return [1, 4]
            case 2: return [2, 5]
            default: return [0, 3]
        }
    })()

    // RARITY MENU

    // Activate Rarity Menu
    const activateRarityMenu = index => {
        setRarityMenuActive(index)
        unselectCraftableItems()
    }

    // Rarity Menu Active
    const [rarityMenuActive, setRarityMenuActive] = useState(0)

    // Mapped Rarity Menu Items
    const mappedRarityMenuItems = () => {
        const data = ['Mythic', 'Aquatic', 'Avian', 'Dinosaur', 'Insect', 'Wildlife', 'Reptile']

        const mapped = data.map((rarity, i) => {
            return (
                <li key={i} className={`menu-item ${rarityMenuActive === i ? 'active' : ''}`} onClick={() => activateRarityMenu(i)}>
                    <p>{rarity}</p>
                </li> 
            )
        })

        return mapped
    }

    // PLAYERS DROPS

    // Get Players Drops
    const playerDrops = invItems.filter(item => item.type === 'drop')

    // Mapped Player Drops
    const mappedPlayerDrops = mapDrops(playerDrops, dropIndex1, dropIndex2)

    // CRAFTABLE ITEMS

    // Get Matching Items - that match level type menu and rarity type menu
    // - first index is for level type (low, medium, high)
    // - the second one is for rarity type (mythic, avian, etc.)
    const matchingCraftableItems = craftableItems[levelMenuActive][rarityMenuActive]

    const displayedCraftableItems = matchingCraftableItems.map(item => {
        return item.item
    })

    // NEEDED DROPS

    // Get Selected Item
    const selectedItemArr = craftableItems[levelMenuActive][rarityMenuActive].filter(item => item.item.isSelected)
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

    // Craft Class - if player can craft selected item, set to active
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

            // unselect craftable items
            unselectCraftableItems()
        }
    }

    // Render
    return (
        <div className='crafting'>

            {/* Heading */}
            <h3 className='heading'>Crafting</h3>

            {/* Level Menu */}
            <div className='level-menu'>
                <ul className='menu-items'>
                    { mappedLevelMenuItems() }
                </ul>
            </div>

            {/* Content */}
            <div className='content'>

                {/* Explanations */}
                <div className='explanations'>
                    <p>Your Material</p>
                    <p>Craftable Items</p>
                    <p>Material Needed To Craft</p>
                </div>

                {/* Middle Container */}
                <div className='middle-container'>

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

                    {/* Craft Section */}
                    <button className={`craft-btn ${craftClass}`} onClick={craft}>Craft</button>

                </div>

                {/* Rarity Menu */}
                <div className='rarity-menu-container'>
                    <ul className='rarity-menu'>
                        { mappedRarityMenuItems() }
                    </ul>
                </div>

            </div>

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