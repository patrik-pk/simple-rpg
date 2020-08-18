import levelTresholds from '../data/levelTresholds'
import randomGenerator from './randomGenerator'

export default function getReward(enemy, character, status, enemyType) {

    // WIN / LOSE MULTIPLIER
    const statusMultiplier = ((status) => {
        if(enemyType === 'Boss') {
            if (status === 'Victory') return 6
            if (status === 'Defeat') return 0
        }
        if(enemyType === 'Classic') {
            if (status === 'Victory') return 3
            if (status === 'Defeat') return 1
        }
    })(status)

    // ENEMY DIFFICULTY MULTIPLIER
    const difficultyMultiplier = (() => {
        if (enemyType === 'Boss') return 1
        else {
            switch(enemy.difficulty) {
                case 1: return 0.8
                case 2: return 1
                case 3: return 1.2
                default: break
            }
        }
    })()

    // GameFlow
    const gameFlow = character.gameFlow < 1 ? 1 : character.gameFlow
    
    // Gold
    const baseGold = 10

    // Random Gold Multiplier
    const randomGoldMult = randomGenerator(80, 120, 0.01)

    // Diamonds
    const baseDiamonds = 1

    // Random Diamonds Multiplier
    const randomDiamondsMult = randomGenerator(100, 150, 0.01)

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

    const randomXpMult = randomGenerator(100, 115, 0.01)

    // Gained XP
    const gainedXp = (() => {
        // In Classic Game xp = nextLevelXp / fightsNeededToLvl * randomXpMult
        if (enemyType === 'Classic') {
            return Math.round((nextLevelXp / fightsNeededToLvl) * randomXpMult)
        }
        // But In Boss Game, it's 40% of nextLevelXp * randomXpMult
        if (enemyType === 'Boss') {
            if(status === 'Victory') {
                return Math.round((nextLevelXp / 100 * 40) * randomXpMult)
            }
            if(status === 'Defeat') return 0
        }
    })()

    // New XP = currentXp + gainedXp (if you lose, you get 25% of gainedXp)
    const newExp = (() => {
        if (status === 'Victory') return currentXp + gainedXp
        if (status === 'Defeat') return Math.round(currentXp + (gainedXp * 0.25))
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