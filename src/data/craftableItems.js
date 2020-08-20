import generateItem from '../logic/generateItem'
import possibleItems from './possibleItems'
import rarities from './rarities'

// Destructure
const {
    legendary
} = rarities

const {
    helmet,
    sword,
    shield,
    ring
} = possibleItems

const randBonuses = [
    { name: 'aquatic', value: 20 },
    { name: 'avian', value: 20 },
    { name: 'dinosaur', value: 0 },
    { name: 'insect', value: 0 },
    { name: 'reptile', value: 20 },
    { name: 'wildlife', value: 0 },
]

// Exported Craftable Items
const craftableItems = [
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, type: helmet }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, type: sword, bonuses: randBonuses }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, type: helmet }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, type: shield, bonuses: randBonuses }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, type: helmet }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, type: ring }),
]

export default craftableItems