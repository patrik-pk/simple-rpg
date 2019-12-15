
import possibleEnemies from "../../data/possibleEnemies"

import mainData from "../../data/_mainData"
import randomGenerator from "../randomGenerator"

export default function generateEnemy(props) {

    const gameFlow = props.gameFlow
    const gameMultiplier = props.tutorial.enemyCount >= 3 ? gameFlow : props.tutorial.multiplier

    const baseHp = mainData.enemyBase.hp
    const baseArmor = mainData.enemyBase.armor
    const baseDamage = mainData.enemyBase.damage
    const baseCrit = mainData.enemyBase.crit
    const baseDodge = mainData.enemyBase.dodge

    // generate random enemy from /data/possibleEnemies.js
    const generatedEnemy = possibleEnemies[Math.floor(Math.random() * possibleEnemies.length)]
    const randomDifficulty = Math.ceil(Math.random() * 3)
    
    let difficultyMultiplier
    let rewardMultiplier

    // set difficulty multipliers from mainData
    switch(randomDifficulty) {
        case 1: 
            difficultyMultiplier = mainData.enemyBase.diffMult.stats.easy; 
            rewardMultiplier = mainData.enemyBase.diffMult.reward.easy; 
            break;
        case 2: 
            difficultyMultiplier = mainData.enemyBase.diffMult.stats.medium; 
            rewardMultiplier = mainData.enemyBase.diffMult.reward.medium; 
            break;
        case 3: 
            difficultyMultiplier = mainData.enemyBase.diffMult.stats.hard; 
            rewardMultiplier = mainData.enemyBase.diffMult.reward.hard; 
            break;
        default: break;
    }

    // dp = dodge dispersion
    const dp = mainData.enemyBase.dispersion.dodge

    const hp = Math.round(mainData.enemyBase.dispersion.hp * baseHp * difficultyMultiplier * gameMultiplier)
    const armor = Math.round(mainData.enemyBase.dispersion.armor * baseArmor * difficultyMultiplier * gameMultiplier)
    const damage = Math.round(mainData.enemyBase.dispersion.damage * baseDamage * difficultyMultiplier * gameMultiplier)
    const critChance = Math.round(mainData.enemyBase.dispersion.crit * baseCrit * difficultyMultiplier)
    const meleeDodgeChance = (randomGenerator(dp.min, dp.max, dp.perc) * baseDodge * difficultyMultiplier).toFixed(2)
    const rangedDodgeChance = (randomGenerator(dp.min, dp.max, dp.perc) * baseDodge * difficultyMultiplier).toFixed(2)
    const receivedCrit = false

    return {
        currentHp: hp,
        maxHp: hp,
        armor: armor,
        damage: damage,
        critChance: critChance,
        meleeDodgeChance: meleeDodgeChance,
        rangedDodgeChance: rangedDodgeChance,
        receivedCrit: receivedCrit,
        damageTaken: "",
        currentEnemy: generatedEnemy,
        difficulty: randomDifficulty,
        rewardMultiplier: rewardMultiplier
    }
}