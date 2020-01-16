
import possibleItems from "../data/possibleItems"
import possibleBonuses from "../data/possibleBonuses"
import levelTresholds from "../data/levelTresholds"

import randomGenerator from "./randomGenerator"

import mainData from "../data/_mainData"


export default function generateItem(props, whereToPut, keyPar, gameType) {

    // Rarity thresholds
    const rt = { // rt = rarity treshold
        legendary: mainData.itemBase.rarityTresholds.legendary,
        epic: mainData.itemBase.rarityTresholds.epic,
        rare: mainData.itemBase.rarityTresholds.rare,
        uncommon: mainData.itemBase.rarityTresholds.uncommon,
        common: mainData.itemBase.rarityTresholds.common,
    }

    const gameFlowFc = () => {
        if(gameType === "Boss") {
            const playerLevel = props.level.currentLevel
            const bossLevel = props.enemy.level
            const maxLevel = levelTresholds.length - 1
            if(playerLevel > bossLevel) {
                return levelTresholds[playerLevel].gameFlow
            } else {
                if (bossLevel <= maxLevel) return levelTresholds[bossLevel].gameFlow
                else {
                    const diff = bossLevel - maxLevel
                    const result = levelTresholds[maxLevel].gameFlow + (diff * 2)
                    return result
                }
            }
        }
        else return props.level.gameFlow < 1 ? 1 : props.level.gameFlow
        
    } 
    const gameFlow = gameFlowFc()

    // generate random item type from /data/possibleItem.js
    const generatedType = possibleItems[Math.floor(Math.random() * possibleItems.length)]

    const rm = mainData.itemBase.rarMult
    const rmVal = mainData.itemBase.rarValueMult

    // generate item's rarity and set multipliers
    const generatedRarity = () => {
        if (gameType === "Boss") return { rarityName: "Legendary", rarMult: rm.legendary, rarValMult: rmVal.legendary }
        else {
            const genNumber = Math.round(Math.random() * 100)
            if(genNumber <= rt.legendary) return { rarityName: "Legendary", rarMult: rm.legendary, rarValMult: rmVal.legendary }
            if (genNumber <= rt.epic && genNumber > rt.legendary) return { rarityName: "Epic", rarMult: rm.epic, rarValMult: rmVal.epic }
            if (genNumber <= rt.rare & genNumber > rt.epic) return { rarityName: "Rare", rarMult: rm.rare, rarValMult: rmVal.rare }
            if (genNumber <= rt.uncommon && genNumber > rt.rare) return { rarityName: "Uncommon", rarMult: rm.uncommon, rarValMult: rmVal.uncommon }
            if (genNumber <= rt.common && genNumber > rt.uncommon) return { rarityName: "Common", rarMult: rm.common, rarValMult: rmVal.common }
            return "Unknown"
        }
    }

    const genRarity = generatedRarity()
    const rarityMultiplier = genRarity.rarMult
    const rarityValueMultiplier = genRarity.rarValMult
    
    // generate stat
    const generatedStat = () => {

        const base = generatedType.baseStat
        const statMultiplier = generatedType.statMultiplier
        const randMult = mainData.itemBase.statMultiplier.globalRandom
        const randomMultiplier = randomGenerator(randMult.min, randMult.max, randMult.perc)

        const statName = generatedType.possibleStat
    
        const calculatedValue = () => {
            if(statName !== "Crit. chance" && statName !== "Block chance") {
                const calc = Math.floor(base * statMultiplier * gameFlow * rarityMultiplier * randomMultiplier)
                return calc
            }
            if(statName === "Crit. chance" || statName === "Block chance") {
                if(gameType === "Boss") {
                    const bonusVal = () => {
                        if(statName === "Crit. chance") return mainData.itemBase.boss.bonusCrit
                        if (statName === "Block chance") return mainData.itemBase.boss.bonusBlock
                    }
                    const calc = Math.floor((base + bonusVal()) * statMultiplier * rarityMultiplier * randomMultiplier)
                    return calc
                } else {
                    const calc = Math.floor(base * statMultiplier * rarityMultiplier * randomMultiplier)
                    return calc
                }
            } 
        } 

        return {
            statName: statName,
            value: calculatedValue()
        }
    }

    // generate bonuses
    const generatedBonuses = () => {
        let allPossibleBonuses = JSON.parse(JSON.stringify(possibleBonuses)) // create copy of an object
        let bonusAmount = null
        let genBonuses = []

        switch(genRarity.rarityName) { // set bonus amount based on rarity
            case "Legendary": bonusAmount = 5; break;
            case "Epic" || "Rare": bonusAmount = 4; break;
            case "Rare": bonusAmount = 3; break;
            case "Uncommon" || "Common": bonusAmount = 2; break;
            case "Common": bonusAmount = 1; break;
            default: break;
        }

        for(let i = 0; i < 5; i++) { // for bonusAmount generate new bonus

            for(let x = 0; x < genBonuses.length; x++) { // remove already existing bonus from allPossibleBonuses to prevent generating same bonus
                if(allPossibleBonuses.some(bonus => bonus["displayedName"] === genBonuses[x].displayedName)) {
                    const index = allPossibleBonuses.map(e => e.displayedName).indexOf(genBonuses[x].displayedName)
                    allPossibleBonuses.splice(index, 1)
                }
            }   

            const randBonus = allPossibleBonuses[Math.floor(Math.random() * allPossibleBonuses.length)]

            let displayedName
            let value
            let effectiveAgainst

            displayedName = randBonus.displayedName
            effectiveAgainst = randBonus.effectiveAgainst

            // set random value to bonusAmount bonuses, set 0 to rest
            if(i < bonusAmount) {
                const valueCalc = () => {
                    if(gameType === "Boss") {
                        return Math.ceil(randomGenerator(mainData.itemBase.boss.bonusMin, mainData.itemBase.bonusMult - 1, 1))
                    } else return Math.ceil(Math.random() * mainData.itemBase.bonusMult)
                } 
                value = valueCalc()
            } else {
                value = 0
            }

            const bonus = {
                displayedName,
                value,
                effectiveAgainst,
            }

            genBonuses.push(bonus)
        }

        // Sort bonuses
        function compare(a, b) {
            if (a.effectiveAgainst < b.effectiveAgainst) return -1
            if (a.effectiveAgainst > b.effectiveAgainst) return 1
            return 0
        }

        genBonuses.sort(compare)

        return genBonuses
    }

    const generatedValue = () => {
        const base = mainData.itemBase.value
        const randMult = mainData.itemBase.valueMult
        const randomMultiplier = randomGenerator(randMult.min, randMult.max, randMult.perc)
        let destinationMultiplier

        // shop items cost more than received items
        switch(whereToPut) {
            case "Shop": destinationMultiplier = mainData.itemBase.destMult.shop; break;
            case "Game": destinationMultiplier = mainData.itemBase.destMult.game; break;
            case "Inventory": destinationMultiplier = mainData.itemBase.destMult.inventory; break;
            default: break;
        }

        const valueCalc = () => {
            if(gameType === "Boss") {
                const bossMult = mainData.itemBase.boss.valueMult
                return Math.round(base * randomMultiplier * rarityValueMultiplier * destinationMultiplier * gameFlow * bossMult)
            } else return Math.round(base * randomMultiplier * rarityValueMultiplier * destinationMultiplier * gameFlow)
        }

        return valueCalc()
    }

    const generatedLevel = () => {
        const setLevel = () => {
            const playerLevel = props.level.currentLevel
            const enemyLevel = props.enemy.level
            // If enemy is boss and has higher level than enemy => return enemyLevel
            if(gameType === "Boss" && playerLevel < enemyLevel) return enemyLevel
            else return playerLevel // otherwise return playerLevel
        }
        let level = setLevel()
        // if level is less than 5 => set item's level to 5 (gameFlow with value 1 is at level 5)
        if(level < 5) level = 5
        return level 
    }

    // assign generated values and return generatedItem
    const type = generatedType.type
    const name = genRarity.rarityName + " " + generatedType.type
    const rarity = genRarity.rarityName
    const stats = generatedStat()
    const bonuses = generatedBonuses()
    const goldValue = generatedValue()
    const level = generatedLevel()
    const isSelected = false
    const destination = whereToPut
    const imgSrc = generatedType.imgSrc
    const key = keyPar

    const generatedItem = {
        type,
        name,
        rarity,
        stats,
        bonuses,
        goldValue,
        level,
        isSelected,
        destination,
        imgSrc,
        key
    }

    return generatedItem
}