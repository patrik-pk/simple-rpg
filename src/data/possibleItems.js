import icons from '../data/icons'

class possibleItem {
    constructor(type, imgSrc, possibleStat, baseStat, statMultiplier) {
        this.type = type
        this.imgSrc = imgSrc
        this.possibleStat = possibleStat
        this.baseStat = baseStat
        this.statMultiplier = statMultiplier
    }
}

// All possible items that you can find in the game
const possibleItems = [
    new possibleItem('Helmet', icons.helmet, 'Armor', 20, 0.7),
    new possibleItem('Chestplate', icons.chestplate, 'Armor', 20, 1),
    new possibleItem('Pants', icons.pants, 'Armor', 20, 0.8),
    new possibleItem('Gloves', icons.gloves, 'Armor', 20, 0.6),
    new possibleItem('Boots', icons.boots, 'Armor', 20, 0.6),

    new possibleItem('Necklace', icons.necklace, 'HP', 200, 1),
    new possibleItem('Earrings', icons.earrings, 'HP', 200, 1),
    new possibleItem('Ring', icons.ring, 'Crit. chance', 12, 1),
    new possibleItem('Belt', icons.belt, 'Crit. chance', 12, 1),
    new possibleItem('Shield', icons.shield, 'Block chance', 15, 1),

    new possibleItem('Sword', icons.sword, 'M-DMG', 150, 1),
    new possibleItem('Bow', icons.bow, 'R-DMG', 150, 1),
]

export default possibleItems