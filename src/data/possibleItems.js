import equipIcons from './icons/equipIcons'

// type is used for where the item should go when equipped,
// iconInfo is an array of icons, that each have property name and icon, it is processed in generateItem.js,
// statName is name used for stat displaying and calculations,
// baseStat is a base value for every item,
// statMultiplier is specifically targeted for armor items to generate
// different amount on different type of armor (e. g. chestplate has more armor than boots)

class PossibleItem {
    constructor(type, iconInfo, statName, baseStat, statMultiplier) {
        this.type = type
        this.iconInfo = iconInfo
        this.statName = statName
        this.baseStat = baseStat
        this.statMultiplier = statMultiplier
    }
}

// Destructure Icons A Little
const {
    type1: t1,
    type2: t2,
    aquatic: aq,
    avian: av,
    dinosaur: dn,
    insect: is,
    reptile: rp,
    wildlife: wf
} = equipIcons

// All possible items that you can find in the game
const possibleItems = {
    helmet: new PossibleItem('Helmet', [ t1.helmet, t2.helmet, av.helmet, is.helmet, wf.helmet ], 'Armor', 20, 0.7),
    chestplate: new PossibleItem('Chestplate', [ t1.chestplate, t2.chestplate, av.chestplate, dn.chestplate, is.chestplate, rp.chestplate ], 'Armor', 20, 1),
    pants: new PossibleItem('Pants', [ t1.pants, t2.pants, is.pants ], 'Armor', 20, 0.8),
    gloves: new PossibleItem('Gloves', [ t1.gloves, t2.gloves ], 'Armor', 20, 0.6),
    boots: new PossibleItem('Boots', [ t1.boots, t2.boots, aq.fins, av.boots, dn.boots, rp.boots ], 'Armor', 20, 0.6),
    sword: new PossibleItem('Sword', [ t1.sword, t2.sword, aq.trident, av.spear, dn.axe, is.mace, rp.sword, wf.tomahawk ], 'M-DMG', 150, 1),
    necklace: new PossibleItem('Necklace', [ t1.necklace, t2.necklace, aq.necklace, av.necklace, is.necklace, rp.necklace, wf.necklace ], 'HP', 200, 1),
    earrings: new PossibleItem('Earrings', [ t1.earrings, t2.earrings, av.earrings ], 'HP', 200, 1),
    ring: new PossibleItem('Ring', [ t1.ring, t2.ring, aq.ring ], 'Crit. chance', 12, 1),
    belt: new PossibleItem('Belt', [ t1.belt, t2.belt ], 'Crit. chance', 12, 1),
    shield: new PossibleItem('Shield', [ t1.shield, t2.shield, dn.shield, is.shield, wf.shield ], 'Block chance', 15, 1),
    bow: new PossibleItem('Bow', [ t1.bow, t2.bow, aq.harpoon, dn.crossbow ], 'R-DMG', 150, 1),
}

export default possibleItems