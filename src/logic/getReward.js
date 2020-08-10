import md from '../data/_mainData'
import levelTresholds from '../data/levelTresholds'
import randomGenerator from './randomGenerator'

export default function getReward(enemy, character, status, enemyType) {

    // WIN / LOSE MULTIPLIER
    const statusMultiplier = ((status) => {
        if(enemyType === 'Boss') {
            if (status === 'Victory') return md.rewardBase.boss.winMult
            if (status === 'Defeat') return md.rewardBase.boss.loseMult
        }
        if(enemyType === 'Classic') {
            if (status === 'Victory') return md.rewardBase.status.winMult
            if (status === 'Defeat') return md.rewardBase.status.loseMult
        }
    })(status)

    // ENEMY DIFFICULTY MULTIPLIER
    const difficultyMultiplier = (() => {
        if (enemyType === 'Boss') return md.rewardBase.difficulty.hard
        else {
            switch(enemy.difficulty) {
                case 1: return md.rewardBase.difficulty.easy; 
                case 2: return md.rewardBase.difficulty.medium;
                case 3: return md.rewardBase.difficulty.hard;
                default: break;
            }
        }
    })()

    // GameFlow
    const gameFlow = character.gameFlow < 1 ? 1 : character.gameFlow
    
    // Gold
    const baseGold = md.rewardBase.gold

    // Random Gold Multiplier
    const rgm = md.rewardBase.goldMult
    const randomGoldMult = randomGenerator(rgm.min, rgm.max, rgm.perc)

    // Diamonds
    const baseDiamonds = md.rewardBase.diamonds

    // Random Diamonds Multiplier
    const rdm = md.rewardBase.diamondsMult
    const randomDiamondsMult = randomGenerator(rdm.min, rdm.max, rdm.perc)

    // Calculations
    const acquiredGold = Math.round(baseGold * gameFlow * randomGoldMult * statusMultiplier * difficultyMultiplier)
    const acquiredDiamonds = Math.round(baseDiamonds * randomDiamondsMult * statusMultiplier * difficultyMultiplier)
    const gold = character.gold + acquiredGold
    const diamonds = character.diamonds + acquiredDiamonds


    // EXPERIENCE

    const currentXp = character.experience
    const currentLevel = character.currentLevel
    const nextLevelXp = levelTresholds[currentLevel].xp

    const fightsNeededToLvl = levelTresholds[currentLevel].fightsNeededToLevel

    const xpDisp = md.global.xpDispersion

    // Gained XP
    const gainedXp = (() => {
        if (enemyType === 'Classic') {
            return Math.round((nextLevelXp / fightsNeededToLvl) * randomGenerator(xpDisp.min, xpDisp.max, xpDisp.perc))
        }
        if (enemyType === 'Boss') {
            if(status === 'Victory') {
                return Math.round((nextLevelXp / 100 * md.enemyBase.boss.xp) * randomGenerator(xpDisp.min, xpDisp.max, xpDisp.perc))
            }
            if(status === 'Defeat') return 0
        }
    })()

    // New XP = currentXp + gainedXp
    const newExp = (() => {
        if (status === 'Victory') return currentXp + gainedXp
        if (status === 'Defeat') return Math.round(currentXp + (gainedXp * md.global.loseMult))
    })()

    // Set Xp
    const setXp = ((newExp) => {
        // If Player overleveled
        if (newExp >= nextLevelXp) {
            let currXp = newExp
            let currLevel = currentLevel
            let nextXp = levelTresholds[currLevel].xp
            while (currXp > nextXp) {
                // If currLevel is not maxLevel
                if (currLevel !== levelTresholds[levelTresholds.length - 1].level) {
                    // Increase level by 1
                    currLevel += 1
                    // Substract next level XP from current XP
                    currXp -= nextXp
                    // Set next level XP to the next level (current level)
                    nextXp = levelTresholds[currLevel].xp
                } 
                // If currLevel is max level => set currXp to nextXp and keep level the same
                else {
                    currXp = nextXp
                }
            }
            return { xp: currXp, level: currLevel }
        } 
        // Else return newExp and currentLevel
        else {
            return { xp: newExp, level: currentLevel }
        }
    })(newExp)

    // FINAL RETURN
    return {
        acquiredGold,
        acquiredDiamonds,
        gold,
        diamonds,
        experience: setXp.xp,
        currentLevel: setXp.level,
        gameFlow: levelTresholds[setXp.level].gameFlow,
        acquiredXp: gainedXp
    }
}