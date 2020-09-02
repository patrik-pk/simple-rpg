import { randomGenerator } from '../../shared/utils'
import levelTresholds from '../../data/levelTresholds'
import DropItem from '../../data/DropItem'

// Generate unique drop, although there are only 2 different ones every time
export default (items, alreadyGeneratedDrops, i, enemyDrops, invItemsLength, newLevel) => {
    if (alreadyGeneratedDrops.length === enemyDrops.length) return

    const gameFlow = levelTresholds[newLevel].gameFlow > 1 
        ? levelTresholds[newLevel].gameFlow 
        : 1
        
    // generate random index, if that index is already generated, keep generating
    // new one, then push that index into already generated array
    let index = randomGenerator(0, enemyDrops.length - 1)
    while (alreadyGeneratedDrops.includes(index)) index = randomGenerator(0, enemyDrops.length - 1)
    alreadyGeneratedDrops.push(index)

    const { iconKey, name, icon, classVal, goldValue } = enemyDrops[index]
    const randomAmount = randomGenerator(3, 7)
    const dropGoldValue = Math.round(randomAmount * goldValue * gameFlow)
    const classes = [classVal && classVal]

    items.push(new DropItem(
        iconKey, 
        'Inventory', 
        invItemsLength + i, 
        randomAmount, 
        name, 
        icon, 
        classes, 
        dropGoldValue
    ))
}
