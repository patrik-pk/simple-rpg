import EquipItem from '../data/EquipItem'
import possibleItems from '../data/possibleItems'
import possibleBonuses from '../data/possibleBonuses'
import levelTresholds from '../data/levelTresholds'
import rarities from '../data/rarities'
import randomGenerator from './randomGenerator'

export default function generateItem(level, destination, key, gameType, specific) {

    // Get GameFlow (= multiplier for level)
    const gameFlow = (() => {
        const maxLevel = levelTresholds[levelTresholds.length].level

        // If level is higher than max level (happens for bosses), create gameFlow manually
        if(level > maxLevel) {
            const diff = level - maxLevel
            return levelTresholds[maxLevel].gameFlow + (diff * 2)
        }

        // IMPORTANT: gameFlow has always minimum value of 1 for items, which is equal to level 5
        else return levelTresholds[level].gameFlow < 1 ? 1 : levelTresholds[level].gameFlow
    })()

    // Generate Type - If there is specific type assign it, else generate random item type from /data/possibleItem.js
    const generatedType = (() => {
        if(specific.type) return specific.type
        else {
            const possItems = Object.values(possibleItems)
            return possItems[Math.floor(Math.random() * possItems.length)] 
        }
    })()

    // Generate Rarity (check rarities.js for multiplier values)
    const genRarity = (() => {
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

    // TODO: Continue here, simplify this using destructuring?
    const rarity = genRarity.name
    const rarityMultiplier = genRarity.mult
    const rarityValueMultiplier = genRarity.valueMult
    
    // Generate Stat
    const generatedStat = (() => {

        // base value for stat (e. g. weapon has 150)
        const base = generatedType.baseStat
        // multiplier for armor to generate less armor based on type, 
        // e.g. gloves (0.6), pants (0.8), for other items it's 1
        // and randomize it
        const statMultiplier = generatedType.statMultiplier * randomGenerator(95, 105, 0.01)

        const statName = generatedType.possibleStat
    
        // calculate value for the stat
        const calculateValue = () => {
            // if statName isn't crit chance or block chance, return calculation with gameFlow
            if(statName !== 'Crit. chance' && statName !== 'Block chance') {
                return Math.floor(base * statMultiplier * gameFlow * rarityMultiplier)
            }
            // if it is one of the following, return calc without gameFlow, because
            // crit and block don't scale with level
            if(statName === 'Crit. chance' || statName === 'Block chance') {
                // if item is generated from boss, add bonus value to base
                if(gameType === 'Boss') {
                    const bonusVal = () => {
                        if(statName === 'Crit. chance') return 1
                        if (statName === 'Block chance') return 2
                    }
                    return Math.floor((base + bonusVal()) * statMultiplier * rarityMultiplier)
                } 
                else return Math.floor(base * statMultiplier * rarityMultiplier)
            } 
        } 

        // return statName and stat value
        return {
            statName: statName,
            value: calculateValue()
        }
    })()

    // Generate Bonuses
    const generatedBonuses = (() => {
        if(specific.bonuses) return specific.bonuses

        // create a copy of allPossibleBonuses object
        let allPossibleBonuses = JSON.parse(JSON.stringify(possibleBonuses))
        let bonusAmount = null
        let genBonuses = []

        // set amount of bonuses that item should have based on rarity
        switch(rarity) { 
            case 'Legendary': bonusAmount = 5; break;
            case 'Epic' || 'Rare': bonusAmount = 4; break;
            case 'Rare': bonusAmount = 3; break;
            case 'Uncommon' || 'Common': bonusAmount = 2; break;
            case 'Common': bonusAmount = 1; break;
            default: break;
        }

        // every type of bonus is generated, but only for bonusAmount bonuses
        // there is a generated value, rest is set to 0
        for(let i = 0; i < 6; i++) { 

            // remove already existing bonus from allPossibleBonuses to prevent generating same bonus
            for(let x = 0; x < genBonuses.length; x++) {
                // check if bonus is already generated using some() 
                if(allPossibleBonuses.some(bonus => bonus === genBonuses[x].name)) {
                    // get index of matched bonus
                    const index = allPossibleBonuses.indexOf(genBonuses[x].name)
                    // and remove it from the array, so that it can't be generated again
                    allPossibleBonuses.splice(index, 1)
                }
            }   

            // generate random bonus (name) from allPossibleBonus substracted by already generated bonuses
            const randBonus = allPossibleBonuses[Math.floor(Math.random() * allPossibleBonuses.length)]

            // calculate value of bonus
            const calculateValue = () => {
                // add value only to bonusAmount bonuses (1 to 20)
                if(i < bonusAmount) {
                    // boss items have minimum bonus value
                    if(gameType === 'Boss') {
                        return Math.ceil(randomGenerator(7, 20, 1))
                    }
                    // normal items don't 
                    else return Math.ceil(randomGenerator(1, 20, 1))
                } 
                // rest set to 0
                else return 0
            }

            // push bonus to generated bonuses
            genBonuses.push({
                name: randBonus,
                value: calculateValue()
            })
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
    const generatedValue = (() => {

        // base gold value of item
        const base = 20
        // randomize the price a little with multiplier
        const randomMultiplier = randomGenerator(95, 105, 0.01)

        // items in shop have higher value
        const destinationMultiplier = destination === 'Shop' ? 1.6 : 1

        // calculate the value
        const calculateValue = () => {
            let calc = base * randomMultiplier * rarityValueMultiplier * destinationMultiplier * gameFlow
            // items generated by boss has 1.5 times more value than normal items
            if(gameType === 'Boss') return Math.round(calc * 1.5)
            else return Math.round(calc)
        }

        // and return it
        return calculateValue()
    })()

    // Generate Item Level
    const generatedLevel = (() => {
        let level = (() => {
            if(!gameType) return playerLevel
            // if enemy is boss and has higher level than player => return enemyLevel
            if(gameType === 'Boss' && playerLevel < enemyLevel) return enemyLevel
            else return playerLevel // otherwise return playerLevel
        })()
        // if level is less than 5 => set item's level to 5 (gameFlow with value 1 is at level 5)
        if(level < 5) level = 5
        return level 
    })()

    // Assign generated values and return generatedItem
    const { type, icon } = generatedType
    const stats = generatedStat
    const bonuses = generatedBonuses
    const goldValue = generatedValue
    const level = generatedLevel
    const isSelected = false

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
        level,
        isSelected
    )
}