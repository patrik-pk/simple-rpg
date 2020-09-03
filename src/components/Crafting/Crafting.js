import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InventoryRow from '../Inventory/InventoryRow'
import Menu from '../Menu/Menu'
import { unselectCraftableItems, addItemToInv, removeDropsFromInv } from '../../redux/actions/itemsActions'
import mapDrops from './mapDrops'
import compareDrops from './compareDrops'
import { deepCopy } from '../../shared/utils'

const Crafting = ({ 
    invItems, 
    craftableItems, 
    inventoryRows, 
    unselectCraftableItems, 
    addItemToInv, 
    removeDropsFromInv, 
    gameFlow 
}) => {

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
    const rarityMenuData = ['Mythic', 'Aquatic', 'Avian', 'Dinosaur', 'Insect', 'Reptile', 'Wildlife',]

    // Activate Rarity Menu
    const activateRarityMenu = index => {
        setRarityMenuActive(index)
        unselectCraftableItems()
    }

    // Get Matching Items - that match level type menu and rarity type menu
    // - first index represents level type (low, medium, high)
    // - the second one is for rarity type (mythic, avian, etc.)
    const matchingCraftableItems = craftableItems[levelMenuActive][rarityMenuActive]

    // Get Selected Item, Player Drops & Needed Drops For That Item
    const selectedItem = craftableItems[levelMenuActive][rarityMenuActive].find(item => item.item.isSelected)
    const playerDrops = invItems.filter(item => item.type === 'drop')
    const neededDrops = selectedItem ? selectedItem.dropsNeeded : []

    // Check If Player has Needed Drops
    const hasPlayerNeededDrops = compareDrops(neededDrops, playerDrops)
    
    // Craft Function - Remove players needed drops and add selected item to inventory
    const craft = () => {
        if(selectedItem && hasPlayerNeededDrops && haveSpaceInv) {

            // remove players drops needed to craft the item
            removeDropsFromInv(neededDrops)

            // make a deep copy of the selected item, edit its properties and add it to inventory
            const item = deepCopy(selectedItem.item)
            item.key = invItems.length
            item.destination = 'Inventory'
            item.isSelected = false
            item.isCrafted = true
            item.craftedLevelType = levelMenuActive
            addItemToInv(item, gameFlow)

            // unselect craftable items
            unselectCraftableItems()
        }
    }

    // Mapped Items & Drops for rendering
    const mappedPlayerDrops = mapDrops(playerDrops, dropIndex1, dropIndex2)
    const displayedCraftableItems = matchingCraftableItems.map(item => item.item)
    const mappedNeededDrops = mapDrops(neededDrops, dropIndex1, dropIndex2)

    // Crit Class
    const craftClass = hasPlayerNeededDrops && haveSpaceInv ? 'active2' : '' 

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
    gameFlow: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    invItems: state.items.invItems,
    craftableItems: state.items.craftableItems,
    inventoryRows: state.items.inventoryRows,
    gameFlow: state.character.gameFlow
})

export default connect(mapStateToProps, { unselectCraftableItems, addItemToInv, removeDropsFromInv })(Crafting)