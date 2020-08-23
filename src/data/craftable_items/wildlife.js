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

const { wildlife } = rarities

// Variables
const specificBonuses = [
    { name: 'aquatic', value: 0 },
    { name: 'wildlife', value: 0 },
    { name: 'dinosaur', value: 0 },
    { name: 'insect', value: 0 },
    { name: 'reptile', value: 0 },
    { name: 'wildlife', value: 100 },
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
const wildlifeItems = {

    // LOW
    low: [
        {
            item: genItem(5, 'wildlife_low_0', wildlife, helmet, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_1', wildlife, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_2', wildlife, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_3', wildlife, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_4', wildlife, boots, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_5', wildlife, sword, 7),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },

        {
            item: genItem(5, 'wildlife_low_6', wildlife, necklace, 6),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_7', wildlife, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_8', wildlife, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_9', wildlife, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_10', wildlife, shield, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(5, 'wildlife_low_11', wildlife, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'small wildlife soul', dropIcons.SmallSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'soft wildlife leather', dropIcons.SoftLeather, ['wildlife-leather']),
            ]
        },
    ],

    // MEDIUM
    medium: [
        {
            item: genItem(otherAmount, 'wildlife_medium_0', wildlife, helmet, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_1', wildlife, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_2', wildlife, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_3', wildlife, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_4', wildlife, boots, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_5', wildlife, sword, 7),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },

        {
            item: genItem(otherAmount, 'wildlife_medium_6', wildlife, necklace, 6),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_7', wildlife, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_8', wildlife, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_9', wildlife, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_10', wildlife, shield, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(otherAmount, 'wildlife_medium_11', wildlife, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'medium wildlife soul', dropIcons.MediumSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'medium wildlife leather', dropIcons.MediumLeather, ['wildlife-leather']),
            ]
        },
    ],

    // HIGH
    high: [
        {
            item: genItem(25, 'wildlife_high_0', wildlife, helmet, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_1', wildlife, chestplate, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_2', wildlife, pants, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_3', wildlife, gloves, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_4', wildlife, boots, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_5', wildlife, sword, 7),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },

        {
            item: genItem(25, 'wildlife_high_6', wildlife, necklace, 6),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_7', wildlife, earrings, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_8', wildlife, ring, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_9', wildlife, belt, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_10', wildlife, shield, 4),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
        {
            item: genItem(25, 'wildlife_high_11', wildlife, bow, 0),
            dropsNeeded: [
                genDrop(soulAmount, 'large wildlife soul', dropIcons.LargeSoul, ['wildlife-soul']),
                genDrop(otherAmount, 'tough wildlife leather', dropIcons.ToughLeather, ['wildlife-leather']),
            ]
        },
    ]
}

export default wildlifeItems