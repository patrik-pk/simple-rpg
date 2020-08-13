import possibleEnemies from '../data/possibleEnemies'
import levelTresholds from '../data/levelTresholds'
import randomGenerator from './randomGenerator'

export default function generateEnemy(type, level, specificEnemy, strongStatIndex, dungeon) {

    // Get Gameflow
    const gameFlow = (() => {
        if(type === 'Classic') return levelTresholds[level].gameFlow
        if(type === 'Boss') {
            const maxLevel = levelTresholds.length - 1
            if (level <= maxLevel) return levelTresholds[level].gameFlow
            else {
                const diff = level - maxLevel
                const result = levelTresholds[maxLevel].gameFlow + (diff * 2)
                return result
            }
        }
    })()

    // Generate Enemy Type from possibleEnemies
    const enemyType = (() => {
        // If there is no 'specificEnemy', create random type from possibleEnemies
        if(typeof specificEnemy === 'undefined' || specificEnemy === null) {

            // make an array out of possibleEnemies
            const enemiesArray = Object.values(possibleEnemies)

            // get random specie
            const randomSpecie = enemiesArray[Math.floor(Math.random() * enemiesArray.length)]

            // make an array out of the specie object
            const specieArray = Object.values(randomSpecie)

            // get random enemy (in the future filter min, max level)
            const randomEnemy = specieArray[Math.floor(Math.random() * specieArray.length)]

            // and return that random enemy
            return randomEnemy
        }
        // else return that specificEnemy
        else return specificEnemy
    })()


    // Set Difficulty
    const difficulty = (() => {
        if(type === 'Classic') return Math.ceil(Math.random() * 3)
        if(type === 'Boss') return 3
    })() 
    
    let diffMult

    // Set Difficulty Multipliers
    switch(difficulty) {
        case 1: diffMult = 0.95; break;
        case 2: diffMult = 1; break;
        case 3: diffMult = 1.05; break;
        default: break;
    }


    // Bosses have 2 times more HP
    const hpMult = () => {
        if(type === 'Boss') return 2
        if(type === 'Classic') return 1
    }

    // Variables For Calculations
    const baseHp = 1000
    const baseArmor = 150
    const baseDamage = 150
    const baseCrit = 35
    const baseDodge = 25
    const randomMult = () => randomGenerator(90, 110, 0.01)
    const bossStrongStatMult = () => randomGenerator(135, 170, 0.01)

    // Every boss has one type of armor stronger that the other, if this enemy
    // is type of 'Boss' and has strongStatIndex that matches the index,
    // return multiplier for bosses strong stat, else return normal random multiplier
    const armorRandMult = (index) => {
        if (type === 'Classic') return randomMult()
        if (type === 'Boss') {
            if (strongStatIndex === null || strongStatIndex === undefined) return randomMult()
            else {
                if (index === strongStatIndex) return bossStrongStatMult()
                else return randomMult()
            }
        }
    }

    // Calculate HP
    const hp = Math.round(randomMult() * baseHp * diffMult * gameFlow * hpMult())

    // Calculate Melee Armor
    const meleeArmor = Math.round(armorRandMult(0) * baseArmor * diffMult * gameFlow)

    // Caclulate Ranged Armor
    const rangedArmor = Math.round(armorRandMult(1) * baseArmor * diffMult * gameFlow)

    // Calculate Damage
    const damage = Math.round(randomMult() * baseDamage * diffMult * gameFlow)

    // Calculate Crit Chance
    const critChance = Math.round(randomMult() * baseCrit * diffMult)

    // Calculate Melee Dodge Chance
    const meleeDodgeChance = (randomMult() * baseDodge * diffMult).toFixed(2)

    // Calculate Ranged Dodged Chance
    const rangedDodgeChance = (randomMult() * baseDodge * diffMult).toFixed(2)

    // Final return
    return {
        currentHp: hp,
        maxHp: hp,
        meleeArmor,
        rangedArmor,
        damage,
        critChance,
        meleeDodgeChance,
        rangedDodgeChance,
        enemyType,
        level,
        type,
        difficulty,
        dungeon,
        receivedCrit: false,
        damageTaken: '',
    }
}