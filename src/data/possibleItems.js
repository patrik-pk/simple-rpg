import equipIcons from './icons/equipIcons'

class PossibleItem {
    constructor(type, icon, possibleStat, baseStat, statMultiplier) {
        this.type = type
        this.icon = icon
        this.possibleStat = possibleStat
        this.baseStat = baseStat
        this.statMultiplier = statMultiplier
    }
}

// All possible items that you can find in the game
const possibleItems = {
    helmet: new PossibleItem('Helmet', equipIcons.Helmet, 'Armor', 20, 0.7),
    chestplate: new PossibleItem('Chestplate', equipIcons.Chestplate, 'Armor', 20, 1),
    pants: new PossibleItem('Pants', equipIcons.Pants, 'Armor', 20, 0.8),
    gloves: new PossibleItem('Gloves', equipIcons.Gloves, 'Armor', 20, 0.6),
    boots: new PossibleItem('Boots', equipIcons.Boots, 'Armor', 20, 0.6),
    necklace: new PossibleItem('Necklace', equipIcons.Necklace, 'HP', 200, 1),
    earrings: new PossibleItem('Earrings', equipIcons.Earrings, 'HP', 200, 1),
    ring: new PossibleItem('Ring', equipIcons.Ring, 'Crit. chance', 12, 1),
    belt: new PossibleItem('Belt', equipIcons.Belt, 'Crit. chance', 12, 1),
    shield: new PossibleItem('Shield', equipIcons.Shield, 'Block chance', 15, 1),
    sword: new PossibleItem('Sword', equipIcons.Sword, 'M-DMG', 150, 1),
    bow: new PossibleItem('Bow', equipIcons.Bow, 'R-DMG', 150, 1),
}

export default possibleItems