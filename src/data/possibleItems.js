import icons from '../data/icons'

class PossibleItem {
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
    new PossibleItem('Helmet', icons.helmet, 'Armor', 20, 0.7),
    new PossibleItem('Chestplate', icons.chestplate, 'Armor', 20, 1),
    new PossibleItem('Pants', icons.pants, 'Armor', 20, 0.8),
    new PossibleItem('Gloves', icons.gloves, 'Armor', 20, 0.6),
    new PossibleItem('Boots', icons.boots, 'Armor', 20, 0.6),

    new PossibleItem('Necklace', icons.necklace, 'HP', 200, 1),
    new PossibleItem('Earrings', icons.earrings, 'HP', 200, 1),
    new PossibleItem('Ring', icons.ring, 'Crit. chance', 12, 1),
    new PossibleItem('Belt', icons.belt, 'Crit. chance', 12, 1),
    new PossibleItem('Shield', icons.shield, 'Block chance', 15, 1),

    new PossibleItem('Sword', icons.sword, 'M-DMG', 150, 1),
    new PossibleItem('Bow', icons.bow, 'R-DMG', 150, 1),
]

export default possibleItems