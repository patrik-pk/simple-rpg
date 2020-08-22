import possibleDrops from '../data/possibleDrops'
import DropItem from '../data/DropItem'

// Map Drops - get all the possible drops with the following keys,
// and add amount to those that player has
export default function mapDrops(playerDrops, key1, key2) {

    // make an array out of possibleDrops object
    const allDropsArr = Object.values(possibleDrops)
    const mappedDrops = []

    // loop through the array of possible drops
    allDropsArr.forEach(specie => {
        // make an array out of the current specie
        const specieArr = Object.values(specie)
        // and push key1 and key2 items to the mapped array
        mappedDrops.push(specieArr[key1])
        mappedDrops.push(specieArr[key2])
    })

    // make actual items from mapped drops
    const itemsArr = mappedDrops.map((drop, i) => {

        // loop through players drops and get the amount if the name matches
        let dropAmount = 0
        playerDrops.forEach(playerDrop => {
            if (playerDrop.name === drop.name) dropAmount = playerDrop.amount
        })

        return new DropItem('Crafting', i, dropAmount, drop.name, drop.icon, [drop.classVal], 10 * dropAmount)
    })

    // sort the array
    const firstHalf = []
    const secondHalf = []

    itemsArr.forEach((item, i) => {
        if (i % 2 === 0) firstHalf.push(item)
        else secondHalf.push(item)
    })

    // join the arrays together
    const result = firstHalf.concat(secondHalf)

    // return result
    return result
}