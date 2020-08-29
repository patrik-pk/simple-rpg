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

const { reptile } = rarities

// Variables
const specificBonuses = [
    { name: 'aquatic', value: 0 },
    { name: 'reptile', value: 0 },
    { name: 'dinosaur', value: 0 },
    { name: 'insect', value: 0 },
    { name: 'reptile', value: 75 },
    { name: 'reptile', value: 0 },
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
const reptileItems = {

    // LOW
    low: [
        {
            item: genItem(5, 'reptile_low_0', reptile, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_1', reptile, chestplate, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_2', reptile, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_3', reptile, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_4', reptile, boots, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_5', reptile, sword, 6),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },

        {
            item: genItem(5, 'reptile_low_6', reptile, necklace, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_7', reptile, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_8', reptile, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_9', reptile, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_10', reptile, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(5, 'reptile_low_11', reptile, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
            ]
        },
    ],

    // MEDIUM
    medium: [
        {
            item: genItem(15, 'reptile_medium_0', reptile, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_1', reptile, chestplate, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_2', reptile, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_3', reptile, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_4', reptile, boots, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_5', reptile, sword, 6),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },

        {
            item: genItem(15, 'reptile_medium_6', reptile, necklace, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_7', reptile, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_8', reptile, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_9', reptile, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_10', reptile, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(15, 'reptile_medium_11', reptile, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
            ]
        },
    ],

    // HIGH
    high: [
        {
            item: genItem(25, 'reptile_high_0', reptile, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_1', reptile, chestplate, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_2', reptile, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_3', reptile, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_4', reptile, boots, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_5', reptile, sword, 6),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },

        {
            item: genItem(25, 'reptile_high_6', reptile, necklace, 5),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_7', reptile, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_8', reptile, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_9', reptile, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_10', reptile, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
        {
            item: genItem(25, 'reptile_high_11', reptile, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
                genDrop(otherAmount, 'tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
            ]
        },
    ]
}

export default reptileItems