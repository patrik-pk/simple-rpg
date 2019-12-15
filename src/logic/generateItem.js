
import possibleItems from "../data/possibleItems"
import possibleBonuses from "../data/possibleBonuses"

import mainData from "../data/_mainData"


export default function generateItem(props, whereToPut, keyPar) {

    // Rarity thresholds
    const rt = { // rt = rarity treshold
        legendary: mainData.itemBase.rarityTresholds.legendary,
        epic: mainData.itemBase.rarityTresholds.epic,
        rare: mainData.itemBase.rarityTresholds.rare,
        uncommon: mainData.itemBase.rarityTresholds.uncommon,
        common: mainData.itemBase.rarityTresholds.common,
    }

    const gameFlow = props.gameFlow

    // generate random item type from /data/possibleItem.js
    const generatedType = possibleItems[Math.floor(Math.random() * possibleItems.length)]

    // generate item's rarity
    const generatedRarity = () => {
        const genNumber = Math.round(Math.random() * 100)
        if(genNumber <= rt.legendary) return { rarityName: "Legendary", rarMult: mainData.itemBase.rarMult.legendary, }
        if (genNumber <= rt.epic && genNumber > rt.legendary) return { rarityName: "Epic", rarMult: mainData.itemBase.rarMult.epic, }
        if (genNumber <= rt.rare & genNumber > rt.epic) return { rarityName: "Rare", rarMult: mainData.itemBase.rarMult.rare, }
        if (genNumber <= rt.uncommon && genNumber > rt.rare) return { rarityName: "Uncommon", rarMult: mainData.itemBase.rarMult.uncommon, }
        if (genNumber <= rt.common && genNumber > rt.uncommon) return { rarityName: "Common", rarMult: mainData.itemBase.rarMult.common, }
        return "Unknown"
    }

    const genRarity = generatedRarity()
    const rarityMultiplier = genRarity.rarMult
    
    // generateStat
    const generatedStat = () => {

        const base = generatedType.baseStat
        const statMultiplier = generatedType.statMultiplier
        const randomMultiplier = mainData.itemBase.statMultiplier.globalRandom
    
        const calculatedValue = Math.floor(base * statMultiplier * gameFlow * rarityMultiplier * randomMultiplier)

        return {
            statName: generatedType.possibleStat,
            value: calculatedValue
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

        for(let i = 0; i < bonusAmount; i++) { // for bonusAmount generate new bonus

            for(let x = 0; x < genBonuses.length; x++) { // remove already existing bonus from allPossibleBonuses to prevent generating same bonus
                if(allPossibleBonuses.some(bonus => bonus["displayedName"] === genBonuses[x].displayedName)) {
                    const index = allPossibleBonuses.map(e => e.displayedName).indexOf(genBonuses[x].displayedName)
                    allPossibleBonuses.splice(index, 1)
                }
            }            
            
            const randBonus = allPossibleBonuses[Math.floor(Math.random() * allPossibleBonuses.length)]
            
            const displayedName = randBonus.displayedName
            const value = mainData.itemBase.bonusMult
            const effectiveAgainst = randBonus.effectiveAgainst

            const bonus = {
                displayedName,
                value,
                effectiveAgainst
            }

            genBonuses.push(bonus)
        }

        return genBonuses
    }

    const generatedValue = () => {
        const base = mainData.itemBase.value
        const randomMultiplier = mainData.itemBase.valueMult
        let destinationMultiplier

        // shop items cost more than received items
        switch(whereToPut) {
            case "Shop": destinationMultiplier = mainData.itemBase.destMult.shop; break;
            case "Game": destinationMultiplier = mainData.itemBase.destMult.game; break;
            case "Inventory": destinationMultiplier = mainData.itemBase.destMult.inventory; break;
            default: break;
        }

        const value = Math.round(base * randomMultiplier * rarityMultiplier * destinationMultiplier * gameFlow)

        return value
    }

    // assign generated values and return generatedItem
    const type = generatedType.type
    const name = genRarity.rarityName + " " + generatedType.type
    const rarity = genRarity.rarityName
    const stats = generatedStat()
    const bonuses = generatedBonuses()
    const goldValue = generatedValue()
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
        isSelected,
        destination,
        imgSrc,
        key
    }

    return generatedItem
}