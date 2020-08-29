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

const { aquatic } = rarities

// Variables
const specificBonuses = [
    { name: 'aquatic', value: 75 },
    { name: 'avian', value: 0 },
    { name: 'dinosaur', value: 0 },
    { name: 'insect', value: 0 },
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
const aquaticItems = {

    // LOW
    low: [
        {
            item: genItem(5, 'aquatic_low_0', aquatic, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_1', aquatic, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_2', aquatic, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_3', aquatic, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_4', aquatic, boots, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_5', aquatic, sword, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },

        {
            item: genItem(5, 'aquatic_low_6', aquatic, necklace, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_7', aquatic, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_8', aquatic, ring, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_9', aquatic, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_10', aquatic, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(5, 'aquatic_low_11', aquatic, bow, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
            ]
        },
    ],

    // MEDIUM
    medium: [
        {
            item: genItem(15, 'aquatic_medium_0', aquatic, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_1', aquatic, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_2', aquatic, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_3', aquatic, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_4', aquatic, boots, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_5', aquatic, sword, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },

        {
            item: genItem(15, 'aquatic_medium_6', aquatic, necklace, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_7', aquatic, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_8', aquatic, ring, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_9', aquatic, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_10', aquatic, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(15, 'aquatic_medium_11', aquatic, bow, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
            ]
        },
    ],

    // HIGH
    high: [
        {
            item: genItem(25, 'aquatic_high_0', aquatic, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_1', aquatic, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_2', aquatic, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_3', aquatic, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_4', aquatic, boots, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_5', aquatic, sword, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },

        {
            item: genItem(25, 'aquatic_high_6', aquatic, necklace, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_7', aquatic, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_8', aquatic, ring, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_9', aquatic, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_10', aquatic, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
        {
            item: genItem(25, 'aquatic_high_11', aquatic, bow, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
                genDrop(otherAmount, 'large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
            ]
        },
    ]
}

export default aquaticItems