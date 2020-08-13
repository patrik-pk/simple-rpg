import icons from "./icons"

export class StartingItem {
    constructor(
        destination = 'Equipped', 
        key,
        type = 'Helmet', 
        rarity = 'Common', 
        imgSrc = icons.helmet, 
        stats = { statName: 'Armor', value: 7 }, 
        bonuses = [
            { name: 'avian', value: 0 },
            { name: 'dinosaur', value: 0 },
            { name: 'insect', value: 0 },
            { name: 'wildlife', value: 0 },
            { name: 'reptile', value: 0 },
            { name: 'aquatic', value: 0 },
        ], 
        goldValue = 10, 
        level = 0, 
        isSelected = false, 
    ) {
        this.destination = destination
        this.key = key
        this.type = type
        this.rarity = rarity
        this.imgSrc = imgSrc
        this.stats = stats
        this.bonuses = bonuses
        this.goldValue = goldValue
        this.level = level
        this.isSelected = isSelected
    }
}

const startingItems = [
    new StartingItem(undefined, 0, 'Helmet', 'Common', icons.helmet, { statName: 'Armor', value: 7 }),
    new StartingItem(undefined, 1, 'Chestplate', 'Common', icons.chestplate, { statName: 'Armor', value: 10 }),
    new StartingItem(undefined, 2, 'Pants', 'Common', icons.pants, { statName: 'Armor', value: 8 }),
    new StartingItem(undefined, 3, 'Gloves', 'Common', icons.gloves, { statName: 'Armor', value: 6 }),
    new StartingItem(undefined, 4, 'Boots', 'Common', icons.boots, { statName: 'Armor', value: 6 }),
    new StartingItem(undefined, 5, 'Sword', 'Common', icons.sword, { statName: 'M-DMG', value: 125 }),

    new StartingItem(undefined, 6, 'Necklace', 'Common', icons.necklace, { statName: 'HP', value: 175 }),
    new StartingItem(undefined, 7, 'Earrings', 'Common', icons.earrings, { statName: 'HP', value: 175 }),
    new StartingItem(undefined, 8, 'Ring', 'Common', icons.ring, { statName: 'Crit. chance', value: 10 }),
    new StartingItem(undefined, 9, 'Belt', 'Common', icons.belt, { statName: 'Crit. chance', value: 10 }),
    new StartingItem(undefined, 10, 'Shield', 'Common', icons.shield, { statName: 'Block chance', value: 15 }),
    new StartingItem(undefined, 11, 'Bow', 'Common', icons.bow, { statName: 'R-DMG', value: 125 }),
]

export default startingItems