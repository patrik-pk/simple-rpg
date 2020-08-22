import generateItem from '../logic/generateItem'
import possibleItems from './possibleItems'
import rarities from './rarities'

// Destructure
const {
    legendary
} = rarities

const {
    helmet,
    chestplate,
    pants,
    gloves,
    boots,
    sword,
    necklace,
    earrings,
    ring,
    belt,
    shield,
    bow,
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
    // low (12 x 7)
    // medium (12 x 7)
    // high (12 x 7)
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: helmet, iconIndex: 2 } }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: chestplate, iconIndex: 2 }, bonuses: randBonuses }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: pants, iconIndex: 2 } }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: gloves, iconIndex: 1 }, bonuses: randBonuses }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: boots, iconIndex: 2 } }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: sword, iconIndex: 2 } }),

    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: necklace, iconIndex: 2 } }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: earrings, iconIndex: 2 }, bonuses: randBonuses }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: ring, iconIndex: 2 } }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: belt, iconIndex: 1 } }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: shield, iconIndex: 2 }, bonuses: randBonuses }),
    generateItem(10, 'Crafting', 1, 'Classic', { rarity: legendary, itemType: { type: bow, iconIndex: 2 } }),
]

export default craftableItems