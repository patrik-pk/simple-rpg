import DropItem from '../DropItem'
import generateItem from '../../logic/generateItem'
import possibleItems from '../possibleItems'
import dropIcons from '../icons/dropIcons'
import rarities from '../rarities'

// Destructure
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

const { dinosaur } = rarities

// Variables
const specificBonuses = [
    { name: 'aquatic', value: 0 },
    { name: 'dinosaur', value: 0 },
    { name: 'dinosaur', value: 100 },
    { name: 'insect', value: 0 },
    { name: 'reptile', value: 0 },
    { name: 'wildlife', value: 0 },
]

const soulAmount = 10
const otherAmount = 15

// Functions To Simplify Syntax
const genItem = (level, key, rarity, type, iconIndex) => {
    const specificProcessed = {
        rarity,
        itemType: { type, iconIndex },
        bonuses: specificBonuses
    }
    return generateItem(level, 'Crafting', key, 'Classic', specificProcessed)
}

const genDrop = (amount, name, icon, classes) => {
    // key (2nd argument) is used in Inventory to display items at proper place,
    // this DropItem is used just to display static drops that are needed for crafting
    return new DropItem('Crafting', 0, amount, name, icon, classes, null)
}

// Exported object
const dinosaurItems = {

    // LOW
    low: [
        {
            item: genItem(5, 'dinosaur_low_0', dinosaur, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_1', dinosaur, chestplate, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_2', dinosaur, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_3', dinosaur, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_4', dinosaur, boots, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_5', dinosaur, sword, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },

        {
            item: genItem(5, 'dinosaur_low_6', dinosaur, necklace, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_7', dinosaur, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_8', dinosaur, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_9', dinosaur, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_10', dinosaur, shield, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(5, 'dinosaur_low_11', dinosaur, bow, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'small fossil', dropIcons.smallFossil.icon, ['fossil']),
            ]
        },
    ],

    // MEDIUM
    medium: [
        {
            item: genItem(otherAmount, 'dinosaur_medium_0', dinosaur, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_1', dinosaur, chestplate, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_2', dinosaur, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_3', dinosaur, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_4', dinosaur, boots, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_5', dinosaur, sword, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },

        {
            item: genItem(otherAmount, 'dinosaur_medium_6', dinosaur, necklace, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_7', dinosaur, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_8', dinosaur, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_9', dinosaur, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_10', dinosaur, shield, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(otherAmount, 'dinosaur_medium_11', dinosaur, bow, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
            ]
        },
    ],

    // HIGH
    high: [
        {
            item: genItem(25, 'dinosaur_high_0', dinosaur, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_1', dinosaur, chestplate, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_2', dinosaur, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_3', dinosaur, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_4', dinosaur, boots, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_5', dinosaur, sword, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },

        {
            item: genItem(25, 'dinosaur_high_6', dinosaur, necklace, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_7', dinosaur, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_8', dinosaur, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_9', dinosaur, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_10', dinosaur, shield, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
        {
            item: genItem(25, 'dinosaur_high_11', dinosaur, bow, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
                genDrop(otherAmount, 'large fossil', dropIcons.largeFossil.icon, ['fossil']),
            ]
        },
    ]
}

export default dinosaurItems