import levelTresholds from '../../data/levelTresholds'
import { randomGenerator } from '../../shared/utils'
import possibleItems from '../../data/possibleItems'
import rarities from '../../data/rarities'

// After leveling up certain items need to be updated:
// - craftable items in Crafting section
// - players crafted items in both inventory & equipped
// - players drops value
export default (gameFlow, newLevel, craftableItems, invItems, equippedItems) => {

    // get gameFlow, with minimum value of 1
    const oldGameFlow = gameFlow >= 1 ? gameFlow : 1
    const newGameFlow = levelTresholds[newLevel].gameFlow >= 1 ? levelTresholds[newLevel].gameFlow : 1

    // if newGameFlow / oldGameFlow is 1, meaning there is nothing to be updated, return
    if(newGameFlow / oldGameFlow === 1) return { craftableItems, invItems, equippedItems }

    const levelTypeIndex = logic.getLevelTypeIndex(newLevel)

    return {
        craftableItems: logic.recalculateCraftableItems(craftableItems, levelTypeIndex, newLevel, newGameFlow),
        invItems: logic.recalculateInvItems(invItems, levelTypeIndex, newLevel, newGameFlow),
        equippedItems: logic.recalculateEquippedItems(equippedItems, levelTypeIndex, newLevel, newGameFlow)
    }
}

// Logic
const logic = {

    // Get proper index for updating crafted items based on newLevel (0 = low, 1 = medium, 2 = high),
    // only crafted items with this index will be updated
    getLevelTypeIndex: newLevel => {
        if (newLevel <= 15) return 0
        if (newLevel > 15 && newLevel <= 25) return 1
        if (newLevel > 25) return 2
    },

    // Update single craftable item
    updateCraftableItem: (item, newLevel, gameFlow) => {

        // find matching item type and get multipliers for stat
        const possibleItemsArray = Object.values(possibleItems)
        const mappedPossibleItemsNames = possibleItemsArray.map(possibleItem => possibleItem.type)
        const indexOfCurrentPossibleItem = mappedPossibleItemsNames.indexOf(item.name)
        const { baseStat, statMultiplier } = possibleItemsArray[indexOfCurrentPossibleItem]

        // find matching rarity of current item and get multipliers
        const raritiesArray = Object.values(rarities)
        const mappedRarityNames = raritiesArray.map(rarity => rarity.rarity)
        const currentItemRarityIndex = mappedRarityNames.indexOf(item.rarity)
        const { rarStatMult, rarValMult } = raritiesArray[currentItemRarityIndex]

        // calculate values
        item.level = newLevel
        item.goldValue = Math.round(20 * rarValMult * gameFlow * randomGenerator(95, 105, 0.01))
        // don't update the stat if it's block chance or crit chance because they don't scale with gameFlow
        item.stats.value = (item.stats.statName !== 'Block chance' && item.stats.statName !== 'Crit. chance') 
            ? Math.round(baseStat * statMultiplier * rarStatMult * gameFlow * randomGenerator(95, 105, 0.01)) 
            : item.stats.value
    },

    // Recalculate craftable items
    recalculateCraftableItems: (craftableItems, levelTypeIndex, newLevel, gameFlow) => {

        // loop through the craftableItems with given index and update all the items
        craftableItems[levelTypeIndex].forEach(specie => {
            specie.forEach(craftableItem => {
                logic.updateCraftableItem(craftableItem.item, newLevel, gameFlow)
            })
        })

        return craftableItems
    },

    // Recalculate inventory items
    recalculateInvItems: (invItems, levelTypeIndex, newLevel, gameFlow) => {

        // loop through inventory items and recalculate crafted items and drops
        invItems.forEach(item => {

            // if item is equip, isCrafted and its index matches the levelTypeIndex, update it
            if (item.type === 'equip' && item.isCrafted && item.craftedLevelType === levelTypeIndex) {
                logic.updateCraftableItem(item, newLevel, gameFlow)
            }

            // if it is drop, update its goldValue
            else if (item.type === 'drop') {
                item.goldValue = Math.round(10 * item.amount * gameFlow)
            }
        })

        return invItems
    },

    // Recalculate equipped items
    recalculateEquippedItems: (equippedItems, levelTypeIndex, newLevel, gameFlow) => {

        // loop through equipped items and recalculate the crafted ones
        equippedItems.forEach(item => {

            // if item isCrafted and its index matches the levelTypeIndex, update it
            if (item.isCrafted && item.craftedLevelType === levelTypeIndex) {
                logic.updateCraftableItem(item, newLevel, gameFlow)
            }
        })

        return equippedItems
    }

}