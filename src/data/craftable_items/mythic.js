import DropItem from '../DropItem'
import generateItem from '../../shared/generateItem'
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

const neededAmount = 10

// Functions To Simplify Syntax
const genItem = (level, key, rarity, type, iconIndex) => {
    const specificProcessed = {
        rarity,
        itemType: { type, iconIndex },
        bonuses: specificBonuses
    }
    return generateItem(level, 'Crafting', key, 'Classic', specificProcessed)
}

const genDrop = (name, icon, classes) => {
    // key (2nd argument) is used in Inventory to display items at proper place,
    // this DropItem is used just to display static drops that are needed for crafting
    return new DropItem(null, 'Crafting', 0, neededAmount, name, icon, classes, null)
}

// Needed Mythic Drops
const mythicNeededDrops = type => {

    if(type === 'low') return [
        genDrop('small aquatic soul', dropIcons.smallSoul.icon, ['aquatic-soul']),
        genDrop('small aqua meat', dropIcons.smallMeat.icon, ['aqua-meat']),
        genDrop('small avian soul', dropIcons.smallSoul.icon, ['avian-soul']),
        genDrop('small feather', dropIcons.smallFeather.icon, ['feather']), 
        genDrop('small dinosaur soul', dropIcons.smallSoul.icon, ['dinosaur-soul']),
        genDrop('small fossil', dropIcons.smallFossil.icon, ['fossil']),
        genDrop('small insect soul', dropIcons.smallSoul.icon, ['insect-soul']),
        genDrop('weak poison', dropIcons.weakPoison.icon, ['poison']),
        genDrop('small wildlife soul', dropIcons.smallSoul.icon, ['wildlife-soul']),
        genDrop('soft wildlife leather', dropIcons.softLeather.icon, ['wildlife-leather']),
        genDrop('small reptile soul', dropIcons.smallSoul.icon, ['reptile-soul']),
        genDrop('soft reptile leather', dropIcons.softLeather.icon, ['reptile-leather']),
    ]
    if(type === 'medium') return [
        genDrop('medium aquatic soul', dropIcons.mediumSoul.icon, ['aquatic-soul']),
        genDrop('medium aqua meat', dropIcons.mediumMeat.icon, ['aqua-meat']),
        genDrop('medium avian soul', dropIcons.mediumSoul.icon, ['avian-soul']),
        genDrop('medium feather', dropIcons.mediumFeather.icon, ['feather']),
        genDrop('medium dinosaur soul', dropIcons.mediumSoul.icon, ['dinosaur-soul']),
        genDrop('medium fossil', dropIcons.mediumFossil.icon, ['fossil']),
        genDrop('medium insect soul', dropIcons.mediumSoul.icon, ['insect-soul']),
        genDrop('medium poison', dropIcons.mediumPoison.icon, ['poison']),
        genDrop('medium wildlife soul', dropIcons.mediumSoul.icon, ['wildlife-soul']),
        genDrop('medium wildlife leather', dropIcons.mediumLeather.icon, ['wildlife-leather']),
        genDrop('medium reptile soul', dropIcons.mediumSoul.icon, ['reptile-soul']),
        genDrop('medium reptile leather', dropIcons.mediumLeather.icon, ['reptile-leather']),
    ]
    if(type === 'high') return [
        genDrop('large aquatic soul', dropIcons.largeSoul.icon, ['aquatic-soul']),
        genDrop('large aqua meat', dropIcons.largeMeat.icon, ['aqua-meat']),
        genDrop('large avian soul', dropIcons.largeSoul.icon, ['avian-soul']),
        genDrop('large feather', dropIcons.largeFeather.icon, ['feather']),
        genDrop('large dinosaur soul', dropIcons.largeSoul.icon, ['dinosaur-soul']),
        genDrop('large fossil', dropIcons.largeFossil.icon, ['fossil']),
        genDrop('large insect soul', dropIcons.largeSoul.icon, ['insect-soul']),
        genDrop('strong poison', dropIcons.strongPoison.icon, ['poison']),
        genDrop('large wildlife soul', dropIcons.largeSoul.icon, ['wildlife-soul']),
        genDrop('tough wildlife leather', dropIcons.toughLeather.icon, ['wildlife-leather']),
        genDrop('large reptile soul', dropIcons.largeSoul.icon, ['reptile-soul']),
        genDrop('tough reptile leather', dropIcons.toughLeather.icon, ['reptile-leather']),
    ]
}

// Exported object
const mythicItems = {

    // LOW
    low: [
        {
            item: genItem(5, 'mythic_low_0', mythic, helmet, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_1', mythic, chestplate, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_2', mythic, pants, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_3', mythic, gloves, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_4', mythic, boots, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_5', mythic, sword, 0),
            dropsNeeded: mythicNeededDrops('low')
        },

        {
            item: genItem(5, 'mythic_low_6', mythic, necklace, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_7', mythic, earrings, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_8', mythic, ring, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_9', mythic, belt, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_10', mythic, shield, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
        {
            item: genItem(5, 'mythic_low_11', mythic, bow, 0),
            dropsNeeded: mythicNeededDrops('low')
        },
    ],

    // MEDIUM
    medium: [
        {
            item: genItem(15, 'mythic_medium_0', mythic, helmet, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_1', mythic, chestplate, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_2', mythic, pants, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_3', mythic, gloves, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_4', mythic, boots, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_5', mythic, sword, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },

        {
            item: genItem(15, 'mythic_medium_6', mythic, necklace, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_7', mythic, earrings, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_8', mythic, ring, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_9', mythic, belt, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_10', mythic, shield, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
        {
            item: genItem(15, 'mythic_medium_11', mythic, bow, 0),
            dropsNeeded: mythicNeededDrops('medium')
        },
    ],

    // HIGH
    high: [
        {
            item: genItem(25, 'mythic_high_0', mythic, helmet, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_1', mythic, chestplate, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_2', mythic, pants, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_3', mythic, gloves, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_4', mythic, boots, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_5', mythic, sword, 0),
            dropsNeeded: mythicNeededDrops('high')
        },

        {
            item: genItem(25, 'mythic_high_6', mythic, necklace, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_7', mythic, earrings, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_8', mythic, ring, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_9', mythic, belt, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_10', mythic, shield, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
        {
            item: genItem(25, 'mythic_high_11', mythic, bow, 0),
            dropsNeeded: mythicNeededDrops('high')
        },
    ]
}

export default mythicItems