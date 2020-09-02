
// Slice items into a max-min (used for 6 items) items array
export default (type, items, min, max) => {
    const sliced = items.slice(min, max)
    const newItems = []

    for (let i = 0; i < max - min; i++) {
        // if item at index of i exists, put it into array, and add
        // 'stats-left' class for the items on the right side of inventory
        if (sliced[i]) {
            const item = sliced[i]
            const hasLeftClass = item.classes.includes('stats-left')
            
            // add 'stats-left' class to inventory items with indexes of 4, 5 and 6,
            // (the ones on the right side) their stats on hover will be displayed on the left
            if (type === 'inventory' && i > 2) {
                if(!hasLeftClass)
                    item.classes = [...item.classes, 'stats-left']
            }
            // if it doesn't match any of those conditions, and the item has the
            // 'stats-left' class, remove it
            else {
                if (hasLeftClass) {
                    item.classes = item.classes.filter(classVal => classVal !== 'stats-left')
                }
            }
    
            newItems.push(item)
        }
        // if it doesn't push empty item into the array
        else newItems.push({ type: 'Empty' })
    }

    return newItems
}
