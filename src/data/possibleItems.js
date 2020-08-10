
// All the possible item's that you can find in the game
// values are set is _mainData.js file

import icons from '../data/icons'
import mainData from './_mainData'

class possibleItem {
    constructor(type, imgSrc, possibleStat, baseStat, statMultiplier) {
        this.type = type
        this.imgSrc = imgSrc
        this.possibleStat = possibleStat
        this.baseStat = baseStat
        this.statMultiplier = statMultiplier
    }
}

const helmet = new possibleItem('Helmet', icons.helmet, 'Armor', mainData.itemBase.baseStat.armor, mainData.itemBase.statMultiplier.helmet)
const chestplate = new possibleItem('Chestplate', icons.chestplate, 'Armor', mainData.itemBase.baseStat.armor, mainData.itemBase.statMultiplier.chestplate)
const pants = new possibleItem('Pants', icons.pants, 'Armor', mainData.itemBase.baseStat.armor, mainData.itemBase.statMultiplier.pants)
const gloves = new possibleItem('Gloves', icons.gloves, 'Armor', mainData.itemBase.baseStat.armor, mainData.itemBase.statMultiplier.gloves)
const boots = new possibleItem('Boots', icons.boots, 'Armor', mainData.itemBase.baseStat.armor, mainData.itemBase.statMultiplier.boots)

const necklace = new possibleItem('Necklace', icons.necklace, 'HP', mainData.itemBase.baseStat.hp, mainData.itemBase.statMultiplier.necklace)
const earrings = new possibleItem('Earrings', icons.earrings, 'HP', mainData.itemBase.baseStat.hp, mainData.itemBase.statMultiplier.earrings)
const ring = new possibleItem('Ring', icons.ring, 'Crit. chance', mainData.itemBase.baseStat.crit, mainData.itemBase.statMultiplier.ring)
const belt = new possibleItem('Belt', icons.belt, 'Crit. chance', mainData.itemBase.baseStat.crit, mainData.itemBase.statMultiplier.belt)
const shield = new possibleItem('Shield', icons.shield, 'Block chance', mainData.itemBase.baseStat.block, mainData.itemBase.statMultiplier.shield)

const sword = new possibleItem('Sword', icons.sword, 'M-DMG', mainData.itemBase.baseStat.meleeDmg, mainData.itemBase.statMultiplier.sword)
const bow = new possibleItem('Bow', icons.bow, 'R-DMG', mainData.itemBase.baseStat.rangedDmg, mainData.itemBase.statMultiplier.bow)


const possibleItems = [
    helmet,
    chestplate,
    pants,
    gloves,
    boots,
    necklace,
    earrings,
    ring,
    belt,
    shield,
    sword,
    bow
]

export default possibleItems