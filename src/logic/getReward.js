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
            if (status === 'Defeat') return 2
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

    // Calculations
    const acquiredGold = Math.round(baseGold * gameFlow * randomGoldMult * statusMultiplier * difficultyMultiplier)
    const gold = character.gold + acquiredGold


    // EXPERIENCE

    const currentXp = character.experience
    let currentLevel = character.currentLevel
    const nextLevelXp = levelTresholds[currentLevel].xp

    const fightsNeededToLvl = levelTresholds[currentLevel].fightsNeededToLevel

    const randomXpMult = randomGenerator(100, 115, 0.01)

    // Gained XP
    const gainedXp = (() => {

        // If Player lost, return 0
        if(status === 'Defeat') return 0

        // In Classic Game xp = nextLevelXp / fightsNeededToLvl * randomXpMult
        if (enemyType === 'Classic') {
            return Math.round((nextLevelXp / fightsNeededToLvl) * randomXpMult)
        }

        // But In Boss Game, it's 30% of the xp based on enemy level 
        if (enemyType === 'Boss') {
            const enemyLevel = enemy.level
            const enemyXp = enemyLevel <= 30 ? levelTresholds[enemyLevel].xp : levelTresholds[30].xp

            return Math.round((enemyXp * 0.3) * randomXpMult)
        }
    })()

    
    // New XP = currentXp + gainedXp (if you lose, you get 25% of gainedXp)
    const currXp = (() => {
        if (status === 'Victory') return currentXp + gainedXp
        if (status === 'Defeat') return Math.round(currentXp + (gainedXp * 0.25))
    })()

    // Set Xp
    const setXp = ((currXp) => {
        // If Player overleveled
        if (currXp >= nextLevelXp) {
            let nextXp = levelTresholds[currentLevel].xp
            while (currXp > nextXp) {
                // If currentLevel is not maxLevel
                if (currentLevel !== levelTresholds[levelTresholds.length - 1].level) {
                    // Increase level by 1
                    currentLevel += 1
                    // Substract next level XP from current XP
                    currXp -= nextXp
                    // Set next level XP to the next level (current level)
                    nextXp = levelTresholds[currentLevel].xp
                } 
                // If currentLevel is max level => set currXp to nextXp and keep level the same
                else {
                    currXp = nextXp
                }
            }
            return { 
                xp: currXp, 
                level: currentLevel, 
                levelUp: { 
                    didLevelUp: true, 
                    newLevel: currentLevel 
                } 
            }
        } 
        // Else return currXp and currentLevel
        else return { 
            xp: currXp, 
            level: currentLevel, 
            levelUp: { 
                didLevelUp: false, 
                newLevel: currentLevel 
            } 
        }
    })(currXp)

    // FINAL RETURN
    // TODO: return two values - overleveled boolean (recalculating happens) and reward object
    return {
        acquiredGold,
        gold,
        experience: setXp.xp,
        currentLevel: setXp.level,
        gameFlow: levelTresholds[setXp.level].gameFlow,
        acquiredXp: gainedXp,
        levelUp: setXp.levelUp
    }
}