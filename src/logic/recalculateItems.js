import levelTresholds from '../data/levelTresholds'

// after level up, certain items need to be updated
// - craftable items in Crafting section
// - players crafted items in both inventory & equipped
// - players drops value
export default function recalculateItems(gameFlow, newLevel, craftableItems, invItems, equippedItems) {

    // Get gameFlow, minimum value is 1
    const oldGameFlow = gameFlow >= 1 ? gameFlow : 1
    const newGameFlow = levelTresholds[newLevel].gameFlow >= 1 ? levelTresholds[newLevel].gameFlow : 1

    // If newGameFlow / oldGameFlow is 1, meaning there is nothing to be updated, return
    if(newGameFlow / oldGameFlow === 1) {
        return {
            craftableItems,
            invItems,
            equippedItems
        }
    }


    // Get proper index for updating items based on newLevel (0 = low, 1 = medium, 2 = high)
    let levelTypeIndex = 0
    if(newLevel < 15) levelTypeIndex = 0
    if(newLevel > 15 && newLevel < 25) levelTypeIndex = 1
    if(newLevel > 25) levelTypeIndex = 2

    // Recalculate Craftable Items
    const recalculateCraftableItems = () => {
        
        // Loop through the craftableItems with given index
        craftableItems[levelTypeIndex].forEach(specie => {
            specie.forEach(craftableItem => {
    
                // get the item
                const item = craftableItem.item
    
                // get gameFlow based on item level
                const itemGameFlow = levelTresholds[item.level].gameFlow
    
                // calculate multiplier
                const multiplier = newGameFlow / itemGameFlow
    
                // update the values
                item.level = newLevel
                item.goldValue = Math.round(item.goldValue * multiplier)
                // don't update the stat if it's block chance or crit chance cause they don't scale with gameFlow
                item.stats.value = (item.stats.statName !== 'Block chance' && item.stats.statName !== 'Crit. chance') ? 
                    Math.round(item.stats.value * multiplier) : item.stats.value
            })
        })

        // final return
        return craftableItems
    }

    // Recalculate Inventory Items
    const recalculateInvItems = () => {

        // Loop through Inventory items and recalculate crafted items and drops
        invItems.forEach(item => {
            
            // If item is equip, isCrafted and its index matches the levelTypeIndex, update it
            if(item.type === 'equip' && item.isCrafted && item.craftedLevelType === levelTypeIndex) {
    
                // get gameFlow based on item level
                const itemGameFlow = levelTresholds[item.level].gameFlow
    
                // calculate multiplier
                const multiplier = newGameFlow / itemGameFlow
    
                // update the values
                item.level = newLevel
                item.goldValue = Math.round(item.goldValue * multiplier)
                // don't update the stat if it's block chance or crit chance cause they don't scale with gameFlow
                item.stats.value = (item.stats.statName !== 'Block chance' && item.stats.statName !== 'Crit. chance') ?
                    Math.round(item.stats.value * multiplier) : item.stats.value
            }
    
            // If item is drop
            else if(item.type ==='drop') {
    
                // just update the goldValue
                item.goldValue = Math.round(item.goldValue * (newGameFlow / oldGameFlow)) 
            }
        })  

        return invItems
    }

    // Recalculate Equipped Items
    const recalculateEquippedItems = () => {

        // Loop through Equipped items and recalculate crafted items
        equippedItems.forEach(item => {

            // If item is equip, isCrafted and its index matches the levelTypeIndex, update it
            if (item.isCrafted && item.craftedLevelType === levelTypeIndex) {

                // get gameFlow based on item level
                const itemGameFlow = levelTresholds[item.level].gameFlow

                // calculate multiplier
                const multiplier = newGameFlow / itemGameFlow

                // update the values
                item.level = newLevel
                item.goldValue = Math.round(item.goldValue * multiplier)
                // don't update the stat if it's block chance or crit chance cause they don't scale with gameFlow
                item.stats.value = (item.stats.statName !== 'Block chance' && item.stats.statName !== 'Crit. chance') ?
                    Math.round(item.stats.value * multiplier) : item.stats.value
            }
        })

        return equippedItems
    }

    return {
        craftableItems: recalculateCraftableItems(),
        invItems: recalculateInvItems(),
        equippedItems: recalculateEquippedItems()
    }
}