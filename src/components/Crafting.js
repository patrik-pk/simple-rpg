import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from './Inventory/InventoryRow'
import Menu from './Menu'
import { unselectCraftableItems, addItemToInv, removeDropsFromInv } from '../actions/itemsActions'
import mapDrops from '../logic/mapDrops'
import deepCopy from '../logic/deepCopy'

function Crafting({ invItems, craftableItems, inventoryRows, unselectCraftableItems, addItemToInv, removeDropsFromInv }) {

    // Unselect Items on Unmount 
    useEffect(() => {
        return () => unselectCraftableItems()
    }, [unselectCraftableItems])

    // Check if Player has space in inventory
    const haveSpaceInv = invItems.length <= (inventoryRows * 6) - 1 ? true : false

    // Level Menu
    const [levelMenuActive, setLevelMenuActive] = useState(0)
    const levelMenuData = ['Low Level', 'Medium Level', 'High Level']

    // Activate Level Menu
    const activateLevelMenu = index => {
        setLevelMenuActive(index)
        unselectCraftableItems()
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

    // Rarity Menu
    const [rarityMenuActive, setRarityMenuActive] = useState(0)
    const rarityMenuData = ['Mythic', 'Aquatic', 'Avian', 'Dinosaur', 'Insect', 'Wildlife', 'Reptile']

    // Activate Rarity Menu
    const activateRarityMenu = index => {
        setRarityMenuActive(index)
        unselectCraftableItems()
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
    const craftClass = compareDrops() && haveSpaceInv ? 'active2' : '' 


    // Craft Function - Remove players needed drops and add selected item to inventory
    const craft = () => {
        if(selectedItemArr.length === 1 && compareDrops() && haveSpaceInv) {

            // remove players drops needed to craft the item
            removeDropsFromInv(neededDrops)

            // make a deep copy of the selected item, edit its properties and add it to inventory
            const item = deepCopy(selectedItemArr[0].item)
            item.key = invItems.length
            item.destination = 'Inventory'
            item.isSelected = false
            item.isCrafted = true
            item.craftedLevelType = levelMenuActive
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
            <Menu data={levelMenuData} menuActive={levelMenuActive} itemOnClick={activateLevelMenu} menuClass='crafting-level-menu' />

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
                    <button className={`btn craft-btn ${craftClass}`} onClick={craft}>Craft</button>

                </div>

                {/* Rarity Menu */}
                <Menu data={rarityMenuData} menuActive={rarityMenuActive} itemOnClick={activateRarityMenu} menuClass='rarity-menu' />

            </div>

        </div>
    )
}

Crafting.propTypes = {
    invItems: PropTypes.array.isRequired,
    craftableItems: PropTypes.array.isRequired,
    inventoryRows: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    invItems: state.items.invItems,
    craftableItems: state.items.craftableItems,
    inventoryRows: state.items.inventoryRows
})

export default connect(mapStateToProps, { unselectCraftableItems, addItemToInv, removeDropsFromInv })(Crafting)