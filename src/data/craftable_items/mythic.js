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
    return new DropItem('Crafting', 0, amount, name, icon, classes, null)
}

// Exported object
const mythicItems = {

    // LOW
    low: [
        {
            item: genItem(5, 0, mythic, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 1, mythic, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 2, mythic, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 3, mythic, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 4, mythic, boots, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 5, mythic, sword, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },

        {
            item: genItem(5, 6, mythic, necklace, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 7, mythic, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 8, mythic, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 9, mythic, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 10, mythic, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
        {
            item: genItem(5, 11, mythic, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small avian soul', dropIcons.SmallSoul, ['avian-soul']),
                genDrop(otherAmount, 'small feather', dropIcons.SmallFeather, ['feather']),
            ]
        },
    ],

    // MEDIUM
    medium: [
        {
            item: genItem(otherAmount, 0, mythic, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 1, mythic, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 2, mythic, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 3, mythic, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 4, mythic, boots, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 5, mythic, sword, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },

        {
            item: genItem(otherAmount, 6, mythic, necklace, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 7, mythic, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 8, mythic, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 9, mythic, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 10, mythic, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
        {
            item: genItem(otherAmount, 11, mythic, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium avian soul', dropIcons.MediumSoul, ['avian-soul']),
                genDrop(otherAmount, 'medium feather', dropIcons.MediumFeather, ['feather']),
            ]
        },
    ],

    // HIGH
    high: [
        {
            item: genItem(25, 0, mythic, helmet, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 1, mythic, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 2, mythic, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 3, mythic, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 4, mythic, boots, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 5, mythic, sword, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },

        {
            item: genItem(25, 6, mythic, necklace, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 7, mythic, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 8, mythic, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 9, mythic, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 10, mythic, shield, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
        {
            item: genItem(25, 11, mythic, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large avian soul', dropIcons.LargeSoul, ['avian-soul']),
                genDrop(otherAmount, 'large feather', dropIcons.LargeFeather, ['feather']),
            ]
        },
    ]
}

export default mythicItems