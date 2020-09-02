import EquipItem from './data/EquipItem'
import possibleItems from './data/possibleItems'
import levelTresholds from './data/levelTresholds'
import rarities from './data/rarities'
import { randomGenerator, deepCopy } from '../shared/utils'

export default (level, destination, key, gameType, specific = {}) => {

    const gameFlow = logic.getGameFlow(level)
    const { 
        statName, 
        baseStat, 
        statMultiplier, 
        type, 
        genIcon: { iconKey, displayedName, icon } 
    } = logic.getItemType(specific.itemType)

    const { rarity, rarStatMult, rarValMult, bonusAmount } = logic.getRarity(specific.rarity)
    const stats = logic.calculateStat(statName, baseStat, statMultiplier, rarStatMult, gameFlow)
    const bonuses = logic.getBonuses(specific.bonuses, bonusAmount, gameType)
    const goldValue = logic.generateGoldValue(destination, rarValMult, gameFlow)

    const classes = (destination === 'Shop' || destination === 'Game') 
        ? ['stats-up'] 
        : []

    return new EquipItem(
        iconKey,
        destination,
        key,
        type,
        displayedName,
        rarity,
        icon,
        stats,
        bonuses,
        goldValue,
        level >= 5 ? level : 5,
        false,
        'equip',
        classes
    )
}

// Possible bonuses
const possibleBonuses = [
    'avian',
    'dinosaur',
    'insect',
    'wildlife',
    'reptile',
    'aquatic',
]

// Logic
const logic = {

    // Get gameFlow
    getGameFlow: level => {
        const maxLevel = levelTresholds[levelTresholds.length - 1].level

        // if level is higher than max level (which happens for few bosses), add 2 for each level difference
        if (level > maxLevel) {
            const diff = level - maxLevel
            return levelTresholds[maxLevel].gameFlow + (diff * 2)
        }

        // gameFlow has always minimum value of 1 for items, which is equal to level 5
        else return levelTresholds[level].gameFlow < 1 ? 1 : levelTresholds[level].gameFlow
    },

    // Get item type - If there is specific type return it, else generate random item type from possibleItems.js
    getItemType: specificItemType => {
        if (specificItemType) {
            const { type, iconIndex } = specificItemType
            const itemType = deepCopy(type)
            itemType.genIcon = type.iconInfo[iconIndex]

            return itemType
        }
        else {
            const possItemsArray = Object.values(possibleItems)
            // get random index for icon, there are two basic types for normal items, so generate 0 or 1
            const randIndex = randomGenerator(0, 1)
            const randType = possItemsArray[Math.floor(Math.random() * possItemsArray.length)]
            randType.genIcon = randType.iconInfo[randIndex]

            return randType
        }
    },

    // Get rarity if there is a specific one, or generate random one (check rarities.js for multiplier values)
    getRarity: specificRarity => {
        if (specificRarity) return specificRarity
        else {
            const rand = randomGenerator(0, 99)
            if (rand < 5) return rarities.legendary
            else if (rand < 20 && rand > 5) return rarities.epic
            else if (rand < 40 & rand > 20) return rarities.rare
            else if (rand < 70 && rand > 40) return rarities.uncommon
            else if (rand < 100 && rand > 70) return rarities.common
            else return rarities.common
        }
    },

    // Calculate stat - crit chance and block chance don't scale with gameFlow, so don't multiply them by it
    calculateStat: (statName, baseStat, statMultiplier, rarStatMult, gameFlow) => {

        let value = baseStat * statMultiplier * rarStatMult * randomGenerator(95, 105, 0.01)
        value = (statName === 'Crit. chance' || statName === 'Block chance') ? value : value *= gameFlow
        value = Math.round(value)

        return { statName, value }
    },

    // Get bonuses if they are specific ones, else generate random ones
    getBonuses: (specificBonuses, bonusAmount, gameType) => {
        if (specificBonuses) return specificBonuses

        const possibleBonusesCopy = JSON.parse(JSON.stringify(possibleBonuses))
        const generatedBonuses = []

        // every type of bonus is generated, but only for bonusAmount bonuses
        // there is a generated value, rest is set to 0
        for (let i = 0; i < 6; i++) {
            const randIndex = Math.floor(Math.random() * possibleBonusesCopy.length)
            const name = possibleBonusesCopy[randIndex]
            let value = 0

            if (i < bonusAmount) {
                const minimumValue = gameType === 'Boss' ? 7 : 3
                value = randomGenerator(minimumValue, 20)
            }

            // splice the curent bonus from the array, so that it can't be generated again 
            possibleBonusesCopy.splice(randIndex, 1)
            generatedBonuses.push({ name, value })
        }

        // sort bonuses
        const compare = (a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
        }

        return generatedBonuses.sort(compare)
    },

    // Generate gold value
    generateGoldValue: (destination, rarValMult, gameFlow) => {

        const base = 20
        const destinationMultiplier = destination === 'Shop' ? 1.33 : 1

        return Math.round(base * destinationMultiplier * rarValMult * gameFlow * randomGenerator(95, 105, 0.01))
    }
}