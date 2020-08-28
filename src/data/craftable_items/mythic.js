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

const { mythic } = rarities

// Variables
const specificBonuses = [
    { name: 'aquatic', value: 20 },
    { name: 'avian', value: 20 },
    { name: 'dinosaur', value: 20 },
    { name: 'insect', value: 20 },
    { name: 'reptile', value: 20 },
    { name: 'wildlife', value: 20 },
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
    return new DropItem(null, 'Crafting', 0, amount, name, icon, classes, null)
}

// Exported object
const mythicItems = {

    // LOW
    low: [
        {
            item: genItem(5, 'mythic_low_0', mythic, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_1', mythic, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_2', mythic, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_3', mythic, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_4', mythic, boots, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_5', mythic, sword, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },

        {
            item: genItem(5, 'mythic_low_6', mythic, necklace, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_7', mythic, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_8', mythic, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_9', mythic, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_10', mythic, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(5, 'mythic_low_11', mythic, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.smallFeather.icon, ['feather']),
            ]
        },
    ],

    // MEDIUM
    medium: [
        {
            item: genItem(otherAmount, 'mythic_medium_0', mythic, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_1', mythic, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_2', mythic, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_3', mythic, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_4', mythic, boots, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_5', mythic, sword, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },

        {
            item: genItem(otherAmount, 'mythic_medium_6', mythic, necklace, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_7', mythic, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_8', mythic, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_9', mythic, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_10', mythic, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 'mythic_medium_11', mythic, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.mediumFeather.icon, ['feather']),
            ]
        },
    ],

    // HIGH
    high: [
        {
            item: genItem(25, 'mythic_high_0', mythic, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_1', mythic, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_2', mythic, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_3', mythic, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_4', mythic, boots, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_5', mythic, sword, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },

        {
            item: genItem(25, 'mythic_high_6', mythic, necklace, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_7', mythic, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_8', mythic, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_9', mythic, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_10', mythic, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
        {
            item: genItem(25, 'mythic_high_11', mythic, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.largeFeather.icon, ['feather']),
            ]
        },
    ]
}

export default mythicItems