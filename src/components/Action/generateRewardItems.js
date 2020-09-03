import generateItem from '../../shared/generateItem'
import generateUniqueDrop from './generateUniqueDrop'
import { randomGenerator, deepCopy } from '../../shared/utils'

export default (
    gameType, 
    invItemsLength, 
    enemyLevel, 
    enemyDifficulty,
    enemyDrops, 
    enemyDungeon, 
    dungeon, 
    craftableItems,
    newLevel
) => {

    let items = []
    let alreadyGeneratedDrops = []

    // generate 3 items, first item is always an equip item, others are drop items
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            // for classic game generate random item, for boss game get crafting item
            if (gameType === 'Classic') 
                items.push(generateItem(enemyLevel, 'Inventory', invItemsLength, gameType))
            if (gameType === 'Boss') {

                // get levelTypeIndex based on level (low = 0-10, medium = 11 - 23, high = 24+)
                let levelTypeIndex = 0
                if (enemyLevel <= 10) levelTypeIndex = 0
                else if (enemyLevel > 10 && enemyLevel <= 23) levelTypeIndex = 1
                else if (enemyLevel > 23) levelTypeIndex = 2

                const matchingDungeonIndex = dungeon.findIndex(item => item.type === enemyDungeon)

                // generate random index for rarity,
                // if its less than 4 (0, 1, 2 - 30%) set index to 0, which is 
                // where mythic items are at, else (70%) set it to matchingDungeonIndex + 1 
                // to generate item with same specie type as the boss
                const randRarityIndex = randomGenerator(1, 10)
                const rarityIndex = randRarityIndex < 4 ? 0 : matchingDungeonIndex + 1

                // random index for the type of item (bow, helmet, etc.)
                const randomItemTypeIndex = randomGenerator(0, 11)

                // and get that item
                const item = deepCopy(craftableItems[levelTypeIndex][rarityIndex][randomItemTypeIndex].item)
                item.destination = 'Inventory'
                item.key = invItemsLength
                item.isCrafted = true
                item.craftedLevelType = levelTypeIndex

                items.push(item)
            }
        }
        else generateUniqueDrop(
            items, 
            alreadyGeneratedDrops, 
            i, enemyDrops, 
            invItemsLength, 
            newLevel,
            enemyDifficulty
        )
    }

    return items
}


