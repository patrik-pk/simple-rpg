import { randomGenerator } from '../../shared/utils'
import possibleDrops from '../../data/possibleDrops'
import generateItem from '../../shared/generateItem'
import DropItem from '../../data/DropItem'

export default (currentLevel, gameFlow) => {
    const newShopItems = []

    // 50% chance to 4 generate items, 50% to generate 4 drop items
    const random = randomGenerator(0, 99)
    const shopMultiplier = 1.33

    for (let i = 0; i < 4; i++) {
        if (random < 50) newShopItems.push(generateItem(currentLevel, 'Shop', i))
        else {
            const dropsArray = Object.values(possibleDrops)

            // get proper indexes based on level to generate low, medium or high level drops
            let dropIndexes = [0, 0]
            if (currentLevel <= 12) dropIndexes = [0, 3]
            else if (currentLevel > 12 && currentLevel <= 22) dropIndexes = [1, 4]
            else if (currentLevel > 22) dropIndexes = [2, 5]

            // get random drop index out of the two available
            const randomIndex = dropIndexes[Math.floor(Math.random() * dropIndexes.length)]

            // get random specie
            const randomSpecie = dropsArray[Math.floor(Math.random() * dropsArray.length)]

            // make an array out of that specie object 
            const specieArr = Object.values(randomSpecie)

            // get the drop from generated index
            const dropItem = specieArr[randomIndex]

            // destructure drop item
            const { iconKey, name, icon, classVal, goldValue } = dropItem

            // get random amount
            const randomAmount = randomGenerator(3, 5)

            // get gameFlow, which has to be minimum of 1
            gameFlow = gameFlow > 1 ? gameFlow : 1

            // multiply value by gameFlow and that amount
            const value = Math.round(goldValue * gameFlow * randomAmount * shopMultiplier)

            // push the item to the array
            newShopItems.push(new DropItem(
                iconKey, 
                'Shop', 
                i, 
                randomAmount, 
                name, 
                icon, 
                [classVal], 
                value
            ))
        }
    }

    return newShopItems
}
