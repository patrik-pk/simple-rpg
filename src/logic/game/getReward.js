
import mainData from "../../data/_mainData"
import levelTresholds from "../../data/levelTresholds"

import randomGenerator from "../randomGenerator"


export default function getReward(props, status, enemyType) {

    // GOLD & DIAMONDS
    const acquiredMultiplier = (status) => {
        if(enemyType === "Boss") {
            if (status === "Victory") return mainData.rewardBase.boss.winMult
            if (status === "Defeat") return mainData.rewardBase.boss.loseMult
        }
        if(enemyType === "Classic") {
            if (status === "Victory") return mainData.rewardBase.status.winMult
            if (status === "Defeat") return mainData.rewardBase.status.loseMult
        }
    }

    const difficultyMultiplier = () => {
        if (enemyType === "Boss") return mainData.rewardBase.difficulty.hard
        else {
            switch(props.enemy.difficulty) {
                case 1: return mainData.rewardBase.difficulty.easy; 
                case 2: return mainData.rewardBase.difficulty.medium;
                case 3: return mainData.rewardBase.difficulty.hard;
                default: break;
            }
        }
    }

    // Global
    const statusMult = acquiredMultiplier(status)
    const difficultyMult = difficultyMultiplier()

    // Gold
    const baseGold = mainData.rewardBase.gold
    const gameFlow = props.level.gameFlow < 1 ? 1 : props.level.gameFlow

    const rgm = mainData.rewardBase.goldMult
    const randomGoldMult = randomGenerator(rgm.min, rgm.max, rgm.perc)

    // Diamonds
    const baseDiamonds = mainData.rewardBase.diamonds

    const rdm = mainData.rewardBase.diamondsMult
    const randomDiamondsMult = randomGenerator(rdm.min, rdm.max, rdm.perc)

    // Calculations
    const acquiredGold = Math.round(baseGold * gameFlow * randomGoldMult * statusMult * difficultyMult)
    const acquiredDiamonds = Math.round(baseDiamonds * randomDiamondsMult * statusMult * difficultyMult)
    const gold = props.currency.gold + acquiredGold
    const diamonds = props.currency.diamonds + acquiredDiamonds


    // EXPERIENCE

    const currentXp = props.level.experience
    const currentLevel = props.level.currentLevel
    const nextLevelXp = levelTresholds[currentLevel].xp

    const fightsNeededToLvl = levelTresholds[currentLevel].fightsNeededToLevel

    const xpDisp = mainData.global.xpDispersion
    const gainedXpFc = () => {
        if (enemyType === "Classic") {
            return Math.round((nextLevelXp / fightsNeededToLvl) * randomGenerator(xpDisp.min, xpDisp.max, xpDisp.perc))
        }
        if (enemyType === "Boss") {
            if(status === "Victory") {
                return Math.round((nextLevelXp / 100 * mainData.enemyBase.boss.xp) * randomGenerator(xpDisp.min, xpDisp.max, xpDisp.perc))
            }
            if(status === "Defeat") return 0
        }
    }
    const gainedXp = gainedXpFc()

    const newExp = () => {
        if (status === "Victory") return currentXp + gainedXp
        if (status === "Defeat") return Math.round(currentXp + (gainedXp * mainData.global.loseMult))
    }

    const setXp = (newXp) => {
        if (newXp >= nextLevelXp) {
            let currXp = newXp
            let currLevel = currentLevel
            let nextXp = levelTresholds[currLevel].xp
            while (currXp > nextXp) {
                // If currLevel is max level => set currXp to nextXp and keep level the same
                if (currLevel !== levelTresholds[levelTresholds.length - 1].level) {
                    currXp -= nextXp
                    currLevel += 1
                    nextXp = levelTresholds[currLevel].xp
                } else {
                    currXp = nextXp
                }
            }
            return { xp: currXp, level: currLevel }
        } else {
            return { xp: newXp, level: currentLevel }
        }
    }

    // FINAL RETURN
    return {
        currency: {
            acquiredGold,
            acquiredDiamonds,
            gold,
            diamonds
        },
        level: {
            experience: setXp(newExp()).xp,
            currentLevel: setXp(newExp()).level,
            gameFlow: levelTresholds[setXp(newExp()).level].gameFlow,
            acquiredXp: gainedXp
        }
    }
}