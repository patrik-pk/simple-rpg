import DropItem from '../DropItem'
import generateItem from '../../generateItem'
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

const { avian } = rarities

// Variables
const specificBonuses = [
    { name: 'aquatic', value: 0 },
    { name: 'avian', value: 75 },
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
const avianItems = {

    // LOW
    low: [
        {
            item: genItem(5, 'avian_low_0', avian, helmet, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_1', avian, chestplate, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_2', avian, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_3', avian, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_4', avian, boots, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_5', avian, sword, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },

        {
            item: genItem(5, 'avian_low_6', avian, necklace, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_7', avian, earrings, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_8', avian, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_9', avian, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_10', avian, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'avian_low_11', avian, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
    ],

    // MEDIUM
    medium: [
        {
            item: genItem(15, 'avian_medium_0', avian, helmet, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_1', avian, chestplate, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_2', avian, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_3', avian, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_4', avian, boots, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_5', avian, sword, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },

        {
            item: genItem(15, 'avian_medium_6', avian, necklace, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_7', avian, earrings, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_8', avian, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_9', avian, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_10', avian, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(15, 'avian_medium_11', avian, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
    ],

    // HIGH
    high: [
        {
            item: genItem(25, 'avian_high_0', avian, helmet, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_1', avian, chestplate, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_2', avian, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_3', avian, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_4', avian, boots, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_5', avian, sword, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },

        {
            item: genItem(25, 'avian_high_6', avian, necklace, 3),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_7', avian, earrings, 2),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_8', avian, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_9', avian, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_10', avian, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'avian_high_11', avian, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
    ]
}

export default avianItems