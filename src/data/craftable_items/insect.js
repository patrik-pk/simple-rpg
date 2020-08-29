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

const { insect } = rarities

// Variables
const specificBonuses = [
    { name: 'aquatic', value: 0 },
    { name: 'insect', value: 0 },
    { name: 'insect', value: 0 },
    { name: 'insect', value: 75 },
    { name: 'reptile', value: 0 },
    { name: 'wildlife', value: 0 },
]

const soulAmount = 25
const otherAmount = 25

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
    return new DropItem(null, 'Crafting', 0, amount, name, icon, classes, null)
}

// Exported object
const insectItems = {

    // LOW
    low: [
        {
            item: genItem(5, 'insect_low_0', insect, helmet, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_1', insect, chestplate, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_2', insect, pants, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_3', insect, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_4', insect, boots, 1),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_5', insect, sword, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },

        {
            item: genItem(5, 'insect_low_6', insect, necklace, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_7', insect, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_8', insect, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_9', insect, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_10', insect, shield, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(5, 'insect_low_11', insect, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'weak poison', dropIcons.weakPoison.icon, ['poison']),
            ]
        },
    ],

    // MEDIUM
    medium: [
        {
            item: genItem(15, 'insect_medium_0', insect, helmet, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_1', insect, chestplate, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_2', insect, pants, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_3', insect, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_4', insect, boots, 1),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_5', insect, sword, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },

        {
            item: genItem(15, 'insect_medium_6', insect, necklace, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_7', insect, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_8', insect, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_9', insect, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_10', insect, shield, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(15, 'insect_medium_11', insect, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'medium poison', dropIcons.mediumPoison.icon, ['poison']),
            ]
        },
    ],

    // HIGH
    high: [
        {
            item: genItem(25, 'insect_high_0', insect, helmet, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_1', insect, chestplate, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_2', insect, pants, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_3', insect, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_4', insect, boots, 1),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_5', insect, sword, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },

        {
            item: genItem(25, 'insect_high_6', insect, necklace, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_7', insect, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_8', insect, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_9', insect, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_10', insect, shield, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
        {
            item: genItem(25, 'insect_high_11', insect, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
                genDrop(otherAmount, 'strong poison', dropIcons.strongPoison.icon, ['poison']),
            ]
        },
    ]
}

export default insectItems