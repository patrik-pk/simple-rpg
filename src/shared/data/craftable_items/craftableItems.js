import generateItem from '../../generateItem'
import possibleItems from '../possibleItems'
import data from './data'

const craftableItems = []

const createBonuses = values => ([
    { name: 'aquatic', value: values[0] },
    { name: 'avian', value: values[1] },
    { name: 'dinosaur', value: values[2] },
    { name: 'insect', value: values[3] },
    { name: 'reptile', value: values[4] },
    { name: 'wildlife', value: values[5] },
])

const possibleItemsArray = Object.values(possibleItems)

// loop through data and create complex craftable items array,
// which looks like this:
// [
//     3x levelType (low, medium, high)
//     [
//         7x rarityType (mythic, aquatic, avian, etc.)
//         [
//             12x item for each type (bow, sword, helmet, etc.)
//             [
//                 {
//                     dropsNeeded: [], drops needed array
//                     item: {} item object
//                 }
//             ]
//         ]
//     ]
// ]

data.forEach((levelType, levelTypeIndex) => {
    const { levelOfItems, rarities } = levelType
    craftableItems.push([])

    rarities.forEach((rarityType, rarityIndex) => {
        const { bonusValues, rarity, id, neededDrops, iconIndexes } = rarityType
        craftableItems[levelTypeIndex].push([])

        for(let i = 0; i < 12; i++) {

            const specific = {
                rarity,
                itemType: { 
                    type: possibleItemsArray[i], 
                    iconIndex: iconIndexes[i] 
                },
                bonuses: createBonuses(bonusValues)
            }
            
            const item = generateItem(
                levelOfItems,
                'Crafting',
                `${id}-${i}`,
                'Classic',
                specific
            )

            const dropsNeeded = neededDrops.drops.map(drop => 
                ({ name: drop, amount: neededDrops.amount })
            )

            craftableItems[levelTypeIndex][rarityIndex].push({
                item,
                dropsNeeded, 
            })
        }
    })
})

export default craftableItems
