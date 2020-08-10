// All the possible item's that you can find in the game
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

const helmet = new possibleItem('Helmet', icons.helmet, 'Armor', 20, 0.7)
const chestplate = new possibleItem('Chestplate', icons.chestplate, 'Armor', 20, 1)
const pants = new possibleItem('Pants', icons.pants, 'Armor', 20, 0.8)
const gloves = new possibleItem('Gloves', icons.gloves, 'Armor', 20, 0.6)
const boots = new possibleItem('Boots', icons.boots, 'Armor', 20, 0.6)

const necklace = new possibleItem('Necklace', icons.necklace, 'HP', 200, 1)
const earrings = new possibleItem('Earrings', icons.earrings, 'HP', 200, 1)
const ring = new possibleItem('Ring', icons.ring, 'Crit. chance', 12, 1)
const belt = new possibleItem('Belt', icons.belt, 'Crit. chance', 12, 1)
const shield = new possibleItem('Shield', icons.shield, 'Block chance', 15, 1)

const sword = new possibleItem('Sword', icons.sword, 'M-DMG', 150, 1)
const bow = new possibleItem('Bow', icons.bow, 'R-DMG', 150, 1)


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