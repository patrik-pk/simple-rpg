import levelTresholds from '../../shared/data/levelTresholds'
import { randomGenerator } from '../../shared/utils'

export default (enemy, character, status, enemyType) => {
    
    // Gameflow and enemy difficutly multiplier
    const gameFlow = character.gameFlow < 1 ? 1 : character.gameFlow
    const enemyDifficultyMultiplier = logic.getEnemyDifficultyMultiplier(enemyType, enemy.difficulty)
    
    // Gold calculations
    const goldMultiplier = logic.getGoldMultiplier(enemyType, status) 
    const acquiredGold = logic.calculateAcquiredGold(gameFlow, goldMultiplier, enemyDifficultyMultiplier)
    const gold = character.gold + acquiredGold
    
    // Experience calculations
    const gainedExperience = logic.calculateGainedExperience(status, enemyType, enemy.level, character.currentLevel)
    const currentExperience = character.experience + gainedExperience
    const finalExperience = logic.calculateIfPlayerLeveledUp(currentExperience, character.currentLevel)

    // Final return
    return {
        acquiredGold,
        gold,
        experience: finalExperience.currentExperience,
        currentLevel: finalExperience.currentLevel,
        gameFlow: levelTresholds[finalExperience.currentLevel].gameFlow,
        acquiredXp: gainedExperience,
        didLevelUp: finalExperience.didLevelUp
    }
}

// Logic
const logic = {

    // Get gold multiplier based on enemyType and status (win / lose)
    getGoldMultiplier: (enemyType, status) => {
        if (status === 'Defeat') {
            if (enemyType === 'Boss') return 0
            else return 2
        }
        if (status === 'Victory') {
            if (enemyType === 'Boss') return 6
            else return 3
        }
    },

    // Get enemy difficulty multiplier based on enemyType and enemy difficulty
    getEnemyDifficultyMultiplier: (enemyType, enemyDifficulty) => {
        if (enemyType === 'Boss') return 1
        else switch (enemyDifficulty) {
            case 1: return 0.8
            case 2: return 1
            case 3: return 1.2
            default: break
        }
    },

    // Calculate acquired gold
    calculateAcquiredGold: (gameFlow, goldMultiplier, enemyDifficultyMultiplier) => {
        const baseGold = 10
        const randomMultiplier = randomGenerator(90, 110, 0.01)

        const acquiredGold = baseGold * randomMultiplier * gameFlow * goldMultiplier * enemyDifficultyMultiplier
        return Math.round(acquiredGold)
    },

    // Calculate gained experience
    calculateGainedExperience: (status, enemyType, enemyLevel, currentLevel) => {
        if (status === 'Defeat') return 0

        // if enemy is type of 'Boss', return 30% of XP needed to level based on enemy level * random
        if (enemyType === 'Boss') {
            const enemyNextLevelExperience = enemyLevel <= 30 ? levelTresholds[enemyLevel].xp : levelTresholds[30].xp
            return Math.round((enemyNextLevelExperience * 0.3) * randomGenerator(90, 110, 0.01))
        }
        // if the type is 'Classic', calculate xp based on fightNeededToLvl of the current players level
        else { 
            const nextLevelExperience = levelTresholds[currentLevel].xp
            const fightsNeededToLvl = levelTresholds[currentLevel].fightsNeededToLevel
            return Math.round((nextLevelExperience / fightsNeededToLvl) * randomGenerator(90, 110, 0.01))
        }
    },

    // Calculate if player leveled up
    calculateIfPlayerLeveledUp: (currentExperience, currentLevel) => {
        let nextLevelExperience = levelTresholds[currentLevel].xp

        // if player has more experience than needed, level up
        if (currentExperience >= nextLevelExperience) {
            while (currentExperience > nextLevelExperience) {
                // if currentLevel is not maxLevel, add 1 to currentLevel, substract currentExperience
                // by nextLevelExperience and set new nextLevelExperience, if player still has more experience
                // than he needs, this will loop through once more
                if (currentLevel !== levelTresholds[levelTresholds.length - 1].level) {
                    currentLevel += 1
                    currentExperience -= nextLevelExperience
                    nextLevelExperience = levelTresholds[currentLevel].xp
                }
                // if currentLevel is max level, set currentExperience to nextLevelExperience and keep level the same
                else currentExperience = nextLevelExperience
            }
            return {
                currentExperience,
                currentLevel,
                didLevelUp: true,
            }
        }
        // else just return
        else return {
            currentExperience,
            currentLevel,
            didLevelUp: false
        }
    }
}