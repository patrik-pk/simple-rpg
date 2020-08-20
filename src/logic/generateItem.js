import EquipItem from '../data/EquipItem'
import possibleItems from '../data/possibleItems'
import possibleBonuses from '../data/possibleBonuses'
import levelTresholds from '../data/levelTresholds'
import rarities from '../data/rarities'
import randomGenerator from './randomGenerator'

export default function generateItem(level, destination, key, gameType, specific = {}) {

    // Get GameFlow (= multiplier for level)
    const gameFlow = (() => {
        const maxLevel = levelTresholds[levelTresholds.length - 1].level

        // If level is higher than max level (happens for bosses), create gameFlow manually
        if(level > maxLevel) {
            const diff = level - maxLevel
            return levelTresholds[maxLevel].gameFlow + (diff * 2)
        }

        // IMPORTANT: gameFlow has always minimum value of 1 for items, which is equal to level 5
        else return levelTresholds[level].gameFlow < 1 ? 1 : levelTresholds[level].gameFlow
    })()

    // Generate Type - If there is specific type assign it, else generate random item type from /data/possibleItem.js
    const { statName, baseStat, statMultiplier, type, icon } = (() => {
        if(specific.type) return specific.type
        else {
            const possItems = Object.values(possibleItems)
            return possItems[Math.floor(Math.random() * possItems.length)] 
        }
    })()

    // Generate Rarity (check rarities.js for multiplier values)
    const { rarity, rarStatMult, rarValMult, bonusAmount } = (() => {
        if(specific.rarity) return specific.rarity
        else if (gameType === 'Boss') return rarities.legendary
        else {
            const rand = Math.round(Math.random() * 100)
            if(rand <= 5) return rarities.legendary
            else if (rand <= 20 && rand > 5) return rarities.epic
            else if (rand <= 40 & rand > 20) return rarities.rare
            else if (rand <= 70 && rand > 40) return rarities.uncommon
            else if (rand <= 100 && rand > 70) return rarities.common
            return rarities.common
        }
    })()
    
    // Get Stat
    const stats = (() => {

        // calculate value - baseStat is a base value for item (e. g. weapons have 150),
        // statMultiplier is just 1 for most items, it is used to generate less value 
        // on different type of armor (chestplate has 1, helmet has 0.7, etc...),
        // rarStatMult is a multiplier based on generated rarity
        // and in the end randomize the value a little using randomGenerator
        let value = baseStat * statMultiplier * rarStatMult * randomGenerator(95, 105, 0.01)

        // multiply value by gameFlow if statName isn't crit or block chance, these stats don't scale with level
        value = (statName === 'Crit. chance' || statName === 'Block chance') ? value : value *= gameFlow

        // round the value
        value = Math.round(value)

        // and return it along with statName
        return { statName, value }
    })()

    // Generate Bonuses
    const bonuses = (() => {
        if(specific.bonuses) return specific.bonuses

        // create a copy of allPossibleBonuses object
        const allPossibleBonuses = JSON.parse(JSON.stringify(possibleBonuses))
        const genBonuses = []

        // every type of bonus is generated, but only for bonusAmount bonuses
        // there is a generated value, rest is set to 0
        for(let i = 0; i < 6; i++) { 

            // get random index
            const randIndex = Math.floor(Math.random() * allPossibleBonuses.length)

            // get bonus based on that index
            const name = allPossibleBonuses[randIndex]

            // and splice it from the possibleBonuses array, so that it can't be generated again
            allPossibleBonuses.splice(randIndex, 1)

            // calculate value of bonus
            const value = (() => {
                // generate value only to bonusAmount bonuses, rest set to 0
                if(i < bonusAmount) {
                    // boss items have minimum bonus value
                    const minVal = gameType === 'Boss' ? 7 : 1
                    return randomGenerator(minVal, 20)
                } 
                else return 0
            })()

            // push bonus to generated bonuses
            genBonuses.push({ name, value })
        }

        // sort bonuses
        const compare = (a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
        }

        genBonuses.sort(compare)

        // finally return generated bonuses
        return genBonuses
    })()

    // Generate Gold Value
    const goldValue = (() => {

        // base gold value of item
        const base = 20

        // randomize the price a little with multiplier
        const randomMultiplier = randomGenerator(95, 105, 0.01)

        // items in shop have higher value
        const destinationMultiplier = destination === 'Shop' ? 1.6 : 1

        // boss multiplier
        const bossMultiplier = gameType === 'Boss' ? 1.5 : 1

        // calculate the value
        let value = Math.round(base * randomMultiplier * destinationMultiplier * bossMultiplier * rarValMult * gameFlow)

        // and return it
        return value
    })()

    // Final Return
    return new EquipItem(
        destination,
        key,
        type,
        rarity,
        icon,
        stats,
        bonuses,
        goldValue,
        level >= 5 ? level : 5,
        false
    )
}