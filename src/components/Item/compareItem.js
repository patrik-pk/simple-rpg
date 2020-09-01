
// Compare current item with equipped item of same type (e.g. sword with sword)
export default (isEquipped, isDrop, equippedItems, currentItem) => {
    // don't compare equipped items and drops
    if (isEquipped || isDrop) return {}

    const itemToCompare = equippedItems.find(item => item.name === currentItem.name)

    return {
        level: logic.compareSingle(itemToCompare.level, currentItem.level),
        stat: logic.compareSingle(itemToCompare.stats.value, currentItem.stats.value),
        bonuses: logic.compareBonuses(itemToCompare, currentItem)
    }
}

// Logic
const logic = {

    // Single value comparison (for stat and level)
    compareSingle: (comparedItem, currentItem) => {
        const diff = currentItem - comparedItem

        if (diff > 0) return { value: '+' + Math.abs(diff), color: 'green' }
        else if (diff < 0) return { value: '-' + Math.abs(diff), color: 'red' }
        else if (diff === 0) return { value: diff, color: 'yellow' }
    },

    // Compare bonuses
    compareBonuses: (comparedItem, currentItem) => {
        const compBonuses = comparedItem.bonuses
        const currBonuses = currentItem.bonuses
        const diffArray = []

        currBonuses.forEach(current => {
            const currentBonusName = current.name
            const currentBonusValue = current.value

            compBonuses.forEach(compared => {
                const comparedBonusName = compared.name
                const comparedBonusValue = compared.value

                // if they match, calculate the diff and push to diffArray
                if (currentBonusName === comparedBonusName) {
                    const diff = currentBonusValue - comparedBonusValue

                    if (diff > 0) diffArray.push({ value: '+' + Math.abs(diff), color: 'green' })
                    else if (diff < 0) diffArray.push({ value: '-' + Math.abs(diff), color: 'red' })
                    else if (diff === 0) diffArray.push({ value: diff, color: 'yellow' })
                }
            })
        })

        return diffArray
    }
}