import mainData from '../data/_mainData'
import possibleEnemies from '../data/possibleEnemies'
import levelTresholds from '../data/levelTresholds'
import randomGenerator from './randomGenerator'
import dungeon_img from '../resources/environment/dungeon.jpg'

export default function generateEnemy(gameType, level, specificEnemy, strongStatIndex, dungeon) {

    // Gameflow
    const gameFlow = (() => {
        if(gameType === 'Classic') return levelTresholds[level].gameFlow
        if(gameType === 'Boss') {
            const maxLevel = levelTresholds.length - 1
            if (level <= maxLevel) return levelTresholds[level].gameFlow
            else {
                const diff = level - maxLevel
                const result = levelTresholds[maxLevel].gameFlow + (diff * 2)
                return result
            }
        }
    })()

    // Variables
    const baseHp = mainData.enemyBase.hp
    const baseArmor = mainData.enemyBase.armor
    const baseDamage = mainData.enemyBase.damage
    const baseCrit = mainData.enemyBase.crit
    const baseDodge = mainData.enemyBase.dodge

    // Generate Enemy Type from possibleEnemies
    const generatedEnemy = (() => {
        // If there is no 'specificEnemy', create random
        if(typeof specificEnemy === 'undefined' || specificEnemy === null) {
            return possibleEnemies[Math.floor(Math.random() * possibleEnemies.length)]
        }
        else {
            let enemy = JSON.parse(JSON.stringify(possibleEnemies[specificEnemy]))
            enemy.environmentSrc = dungeon_img
            return enemy
        } 
    })()


    // Difficulty
    const difficulty = (() => {
        if(gameType === 'Classic') return Math.ceil(Math.random() * 3)
        if(gameType === 'Boss') return 3
    })() 
    
    let difficultyMultiplier

    // Set difficulty multipliers from mainData
    switch(difficulty) {
        case 1: 
            difficultyMultiplier = mainData.enemyBase.diffMult.stats.easy; 
            break;
        case 2: 
            difficultyMultiplier = mainData.enemyBase.diffMult.stats.medium; 
            break;
        case 3: 
            difficultyMultiplier = mainData.enemyBase.diffMult.stats.hard; 
            break;
        default: break;
    }

    // Global + Classic gameType dispersions
    const hpd = mainData.enemyBase.dispersion.hp // HP Dispersion
    const dp = mainData.enemyBase.dispersion.dodge // Dodge Dispersion
    const lad = mainData.enemyBase.dispersion.lowerArmor // Lower Armor Dispersion
    const had = mainData.enemyBase.dispersion.higherArmor // Higher Armor Dispersion
    const dd = mainData.enemyBase.dispersion.damage // Damage dispersion
    const cd = mainData.enemyBase.dispersion.crit // Crit dispersion

    // Boss dispersions
    const bad = mainData.enemyBase.boss.armorDispersion // Boss Armor Dispersion
    const ssm = mainData.enemyBase.boss.strongStatMult // Strong Stat Multiplier

    // Create one type of armor higher and the other lower
    const setArmor = (index) => {
        if (gameType === 'Classic') {
            const rand = Math.round(Math.random()) // 0 or 1
            if(index === rand) return { min: had.min, max: had.max, perc: had.perc }
            else return { min: lad.min, max: lad.max, perc: lad.perc }
        }  
        if (gameType === 'Boss') {
            const rand = strongStatIndex // parameter
            if(strongStatIndex === null || strongStatIndex === undefined) {
                return { min: bad.min, max: bad.max, perc: bad.perc }
            } else {
                if (index === rand) return { min: bad.min * ssm, max: bad.max * ssm, perc: bad.perc }
                else return { min: bad.min, max: bad.max, perc: bad.perc }
            }
        }
    }

    const a0 = setArmor(0)
    const a1 = setArmor(1)

    const hpMult = () => {
        if(gameType === 'Boss') return mainData.enemyBase.boss.bonusHpMult
        if(gameType === 'Classic') return 1
    }


    const hp = Math.round(randomGenerator(hpd.min, hpd.max, hpd.perc) * baseHp * difficultyMultiplier * gameFlow * hpMult())
    const meleeArmor = Math.round(randomGenerator(a0.min, a0.max, a0.perc) * baseArmor * difficultyMultiplier * gameFlow)
    const rangedArmor = Math.round(randomGenerator(a1.min, a1.max, a1.perc) * baseArmor * difficultyMultiplier * gameFlow)
    const damage = Math.round(randomGenerator(dd.min, dd.max, dd.perc) * baseDamage * difficultyMultiplier * gameFlow)
    const critChance = Math.round(randomGenerator(cd.min, cd.max, cd.perc) * baseCrit * difficultyMultiplier)
    const meleeDodgeChance = (randomGenerator(dp.min, dp.max, dp.perc) * baseDodge * difficultyMultiplier).toFixed(2)
    const rangedDodgeChance = (randomGenerator(dp.min, dp.max, dp.perc) * baseDodge * difficultyMultiplier).toFixed(2)
    const receivedCrit = false


    return {
        currentHp: hp,
        maxHp: hp,
        meleeArmor: meleeArmor,
        rangedArmor: rangedArmor,
        damage: damage,
        critChance: critChance,
        meleeDodgeChance: meleeDodgeChance,
        rangedDodgeChance: rangedDodgeChance,
        receivedCrit: receivedCrit,
        currentEnemy: generatedEnemy,
        level: level,
        type: gameType,
        difficulty: difficulty,
        dungeon: dungeon,
        damageTaken: '',
    }
}