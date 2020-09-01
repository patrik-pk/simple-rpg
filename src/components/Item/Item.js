import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ItemName from './ItemName'
import ItemStat from './ItemStat'
import ItemBonuses from './ItemBonuses'
import ItemValue from './ItemValue'
import { 
    setInvItemSelect, 
    unselectShopItems, 
    setShopItemSelect, 
    setCraftableItemSelect, 
    unselectCraftableItems 
} from '../../actions/itemsActions'
import compareItem from './compareItem'

function Item(props) {

    // If item has data & isn't of type 'Empty' (for shop items) render item
    if (props.data && props.data.type !== 'Empty') {

        // Destructure props
        const { 
            data,
            items: { equippedItems, craftableItems, shopItems },
            setInvItemSelect, 
            unselectShopItems, 
            setShopItemSelect,
            setCraftableItemSelect,
            unselectCraftableItems,
            renderedInGame 
        } = props

        const {
            name,
            displayedName,
            destination,
            rarity,
            stats,
            bonuses,
            goldValue,
            level,
            icon,
            isSelected,
            key,
            type,
            amount,
            classes
        } = data

        // Item Handle Click
        const handleClick = () => {
            // If this Item is rendered in Game.js, don't do anything
            if(renderedInGame) return

            // If clicked item is in the Inventory, set its isSelected value to the opposite
            if (destination === 'Inventory') setInvItemSelect(key)

            // If clicked item is in the Shop, only one can be selected at the same time
            if (destination === 'Shop') {
                const selectedShopItems = shopItems.filter(item => item.isSelected)
                
                const cond1 = selectedShopItems.length === 1 && key === selectedShopItems[0].key
                const cond2 = selectedShopItems.length === 0
                
                // If (condition 1) there is one selected item, and it's the clicked one,
                // or if (condition 2) there are no selected items => just set items select to the opposite,
                // else unselect all shop items, and select the clicked one
                if(cond1 || cond2) {
                    setShopItemSelect(key)
                } else {
                    unselectShopItems()
                    setShopItemSelect(key)                        
                }
            }

            // Do the similiar thing for Crafting Items as for Shop Items
            if(destination === 'Crafting') {
                let selectedCraftableItems = []

                // Loop through every craftableItem and add to array the selected one(s),
                // along with the levelType and rarityType index that the item is located in 
                craftableItems.forEach(levelType => {
                    levelType.forEach(rarityType => {
                        rarityType.forEach(item => {
                            if(item.item.isSelected) selectedCraftableItems.push(item.item)
                        })
                    })
                })

                const cond1 = selectedCraftableItems.length === 1 && key === selectedCraftableItems[0].key
                const cond2 = selectedCraftableItems.length === 0

                if (cond1 || cond2) {
                    setCraftableItemSelect(key)
                } else {
                    unselectCraftableItems()
                    setCraftableItemSelect(key)
                }
            }
        }

        // Checks
        const isEquipped = destination === 'Equipped' ? true : false
        const isDrop = type === 'drop' ? true : false
        const hasDropFunctionality = isDrop && (destination === 'Shop' || destination === 'Inventory') ? true : false

        // Set Classes - first push items into classesArray, 
        // then join them into single string with with space between them
        const setClasses = () => {
            const classesArray = []

            if(rarity) classesArray.push(rarity.toLowerCase())
            if(isSelected) classesArray.push('selected')
            if(isDrop) classesArray.push('drop')
            if(!hasDropFunctionality) classesArray.push('no-functionality')
            if(amount) classesArray.push('has-amount')
            if(classes) classes.forEach(item => classesArray.push(item))

            return classesArray.join(' ')
        }

        // Comparison
        const comparison = compareItem(isEquipped, isDrop, equippedItems, data)

        // Render
        return ( 
            <li className={`item-container ${setClasses()}`}>
                <div className='item' onClick={handleClick} >

                    {/* Icon */}
                    <div className='item-icon'>
                        { icon.render() } 
                    </div>

                    {/* Info */}
                    <div className='stats'>
                        <ItemName 
                            isDrop={isDrop} 
                            comparison={comparison.level} 
                            name={name} 
                            rarity={rarity} 
                            displayedName={displayedName} 
                            level={level} 
                        />
                        <ItemStat isDrop={isDrop} comparison={comparison.stat} stats={stats} />
                        <ItemBonuses isDrop={isDrop} comparison={comparison.bonuses} bonuses={bonuses} />
                        <ItemValue goldValue={goldValue} />
                    </div>

                    {/* Drop Amount - only for drop items */}
                    { amount ? <p className='drop-amount'>{amount}</p> : null }
                    
                </div>
            </li>
        )
    }
    // or render an empty item 
    return <li className='item-container'></li>
}

Item.propTypes = {
    items: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    items: state.items
})

export default connect(mapStateToProps, { 
    setInvItemSelect, 
    unselectShopItems, 
    setShopItemSelect,
    setCraftableItemSelect,
    unselectCraftableItems 
})(Item)
