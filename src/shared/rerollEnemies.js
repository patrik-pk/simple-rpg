import generateEnemy from './generateEnemy'
import { shuffleArray } from './utils'

// Reroll - generate 3 enemies with unique enemyType, with 
// different level - first has one level less than player, second has the same
// and the third has one level more than player, then randomize the array
export default playerLevel => {

    const enemies = []
    const alreadyGenerated = []
    const diff = [-1, 0, 1]
    
    for (let i = 0; i < 3; i++) {
    
        // set enemy level to playerLevel + diff from array for 3 different difficulties
        let enemyLevel = playerLevel + diff[i]
    
        // enemy level cant be -1 or 31, if it is, substract the diff back
        if (enemyLevel < 0 || enemyLevel > 30) enemyLevel -= diff[i]
    
        // generate enemy
        const newEnemy = generateEnemy('Classic', enemyLevel, playerLevel, { alreadyGenerated, isSet: false })
    
        // and push it to the array
        enemies.push(newEnemy)
        //also push enemyType to alreadyGenerated, so the same type can't be generated again
        alreadyGenerated.push(newEnemy.enemyType)
    }
    
    // shuffle the array to randomize the order of enemies
    const shuffled = shuffleArray(enemies)
    
    // and return it
    return shuffled
} 