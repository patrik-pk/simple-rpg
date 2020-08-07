import possibleItems from "../data/possibleItems"
import possibleBonuses from "../data/possibleBonuses"
import levelTresholds from "../data/levelTresholds"
import randomGenerator from "./randomGenerator"
import md from "../data/_mainData"


// TODO: Pro specific item pridat dalsi parametr 'specific', coz bude objekt
// vsech spefikaci, ktere chci automaticky vygenerovat (rarita, typ),
// napr. specific = { rarity: 'legendary', itemType: 'sword' }
export default function generateItem(character, enemy, whereToPut, keyPar, gameType) {

    // Rarity Thresholds (= rt)
    const rt = {
        legendary: md.itemBase.rarityTresholds.legendary,
        epic: md.itemBase.rarityTresholds.epic,
        rare: md.itemBase.rarityTresholds.rare,
        uncommon: md.itemBase.rarityTresholds.uncommon,
        common: md.itemBase.rarityTresholds.common,
    }

    // Get gameFlow, if it is generated after defeating a Boss,
    // return gameFlow off that Boss, if its level is higher than Player's,
    // if Player's is higher, return Player's gameFlow
    // if it isn't from boss, return Player's gameFlow
    const gameFlow = (() => {
        if(gameType === "Boss") {
            const playerLevel = character.currentLevel
            const bossLevel = enemy.level
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
        // IMPORTANT: gameFlow has always minimum value of 1 for items, 
        // which is equal to level 5
        else return character.gameFlow < 1 ? 1 : character.gameFlow
    })()

    // Generate random item type from /data/possibleItem.js
    const generatedType = possibleItems[Math.floor(Math.random() * possibleItems.length)]

    // Generate item's rarity and set multipliers
    const genRarity = (() => {

        // rarMult (rm) is for the Stat itself and rmVal (rarValueMult) is for items gold value
        const rm = md.itemBase.rarMult
        const rmVal = md.itemBase.rarValueMult

        if (gameType === "Boss") return { rarityName: "Legendary", rarMult: rm.legendary, rarValMult: rmVal.legendary }
        else {
            const genNumber = Math.round(Math.random() * 100)
            if(genNumber <= rt.legendary) return { rarityName: "Legendary", rarMult: rm.legendary, rarValMult: rmVal.legendary }
            else if (genNumber <= rt.epic && genNumber > rt.legendary) return { rarityName: "Epic", rarMult: rm.epic, rarValMult: rmVal.epic }
            else if (genNumber <= rt.rare & genNumber > rt.epic) return { rarityName: "Rare", rarMult: rm.rare, rarValMult: rmVal.rare }
            else if (genNumber <= rt.uncommon && genNumber > rt.rare) return { rarityName: "Uncommon", rarMult: rm.uncommon, rarValMult: rmVal.uncommon }
            else if (genNumber <= rt.common && genNumber > rt.uncommon) return { rarityName: "Common", rarMult: rm.common, rarValMult: rmVal.common }
            return "Unknown"
        }
    })()

    const rarityName = genRarity.rarityName
    const rarityMultiplier = genRarity.rarMult
    const rarityValueMultiplier = genRarity.rarValMult
    
    // Generate Stat
    const generatedStat = (() => {

        // base value for stat (e. g. weapon has 150)
        const base = generatedType.baseStat
        // multiplier for armor to generate less armor for gloves than chestplate, for other items its 1
        const statMultiplier = generatedType.statMultiplier
        // multiplier to randomize stat a little (ranges between 0.95 and 1.05)
        const randMult = md.itemBase.statMultiplier.globalRandom
        // generate that random number
        const randomMultiplier = randomGenerator(randMult.min, randMult.max, randMult.perc)

        const statName = generatedType.possibleStat
    
        // calculate for the stat
        const calculateValue = () => {
            if(statName !== "Crit. chance" && statName !== "Block chance") {
                const calc = Math.floor(base * statMultiplier * gameFlow * rarityMultiplier * randomMultiplier)
                return calc
            }
            if(statName === "Crit. chance" || statName === "Block chance") {
                if(gameType === "Boss") {
                    const bonusVal = () => {
                        if(statName === "Crit. chance") return md.itemBase.boss.bonusCrit
                        if (statName === "Block chance") return md.itemBase.boss.bonusBlock
                    }
                    const calc = Math.floor((base + bonusVal()) * statMultiplier * rarityMultiplier * randomMultiplier)
                    return calc
                } else {
                    const calc = Math.floor(base * statMultiplier * rarityMultiplier * randomMultiplier)
                    return calc
                }
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

        // create a copy of allPossibleBonuses object
        let allPossibleBonuses = JSON.parse(JSON.stringify(possibleBonuses))
        let bonusAmount = null
        let genBonuses = []

        // set amount of bonuses that item should have based on rarity
        switch(rarityName) { 
            case "Legendary": bonusAmount = 5; break;
            case "Epic" || "Rare": bonusAmount = 4; break;
            case "Rare": bonusAmount = 3; break;
            case "Uncommon" || "Common": bonusAmount = 2; break;
            case "Common": bonusAmount = 1; break;
            default: break;
        }

        // every type of bonus is generated, but only for bonusAmount bonuses
        // there is a generated value, rest is set to 0
        for(let i = 0; i < 5; i++) { 

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
                    // boss item has minimum bonus value
                    if(gameType === "Boss") {
                        return Math.ceil(randomGenerator(md.itemBase.boss.bonusMin, md.itemBase.bonusMult - 1, 1))
                    }
                    // normal items don't 
                    else return Math.ceil(Math.random() * md.itemBase.bonusMult)
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
        const base = md.itemBase.value
        // random multiplier to randomize a little (0.95 to 1.05)
        const randMult = md.itemBase.valueMult
        // generate that random number
        const randomMultiplier = randomGenerator(randMult.min, randMult.max, randMult.perc)

        const destinationMultiplier = (() => {
            // shop items cost more than received items
            switch(whereToPut) {
                case "Shop": return md.itemBase.destMult.shop
                case "Game": return md.itemBase.destMult.game
                case "Inventory": return md.itemBase.destMult.inventory
                default: break
            }
        })()

        // calculate the value
        const calculateValue = () => {
            let calc = base * randomMultiplier * rarityValueMultiplier * destinationMultiplier * gameFlow
            // items generated by boss has 1.5 times more value than normal items
            if(gameType === "Boss") {
                const bossMult = md.itemBase.boss.valueMult
                return Math.round(calc * bossMult)
            } 
            else return Math.round(calc)
        }

        // and return it
        return calculateValue()
    })()

    // Generate Item Level
    const generatedLevel = (() => {
        let level = (() => {
            const playerLevel = character.currentLevel
            const enemyLevel = enemy.level
            // if enemy is boss and has higher level than player => return enemyLevel
            if(gameType === "Boss" && playerLevel < enemyLevel) return enemyLevel
            else return playerLevel // otherwise return playerLevel
        })()
        // if level is less than 5 => set item's level to 5 (gameFlow with value 1 is at level 5)
        if(level < 5) level = 5
        return level 
    })()

    // Assign generated values and return generatedItem
    const type = generatedType.type
    const name = rarityName + ' ' + generatedType.type
    const rarity = rarityName
    const stats = generatedStat
    const bonuses = generatedBonuses
    const goldValue = generatedValue
    const level = generatedLevel
    const isSelected = false
    const destination = whereToPut
    const imgSrc = generatedType.imgSrc
    const key = keyPar

    // Final Return
    return {
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
}