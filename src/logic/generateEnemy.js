import possibleEnemies from '../data/possibleEnemies'
import levelTresholds from '../data/levelTresholds'
import randomGenerator from './randomGenerator'

export default function generateEnemy(type, enemyLevel, playerLevel, specificEnemy = null, strongStatIndex = null, dungeon = null) {

    // Get Gameflow
    const gameFlow = (() => {
        if(type === 'Classic') return levelTresholds[enemyLevel].gameFlow
        if(type === 'Boss') {
            const maxLevel = levelTresholds.length - 1
            if (enemyLevel <= maxLevel) return levelTresholds[enemyLevel].gameFlow
            else {
                const diff = enemyLevel - maxLevel
                const result = levelTresholds[maxLevel].gameFlow + (diff * 2)
                return result
            }
        }
    })()

    // Generate Enemy Type from possibleEnemies, the are two types
    const enemyType = (() => {
        // If there is no specificEnemy set, specificEnemy is a array of enemyTypes that can't be generated again
        if(!specificEnemy.isSet) {

            // make an array out of possibleEnemies
            const enemiesArray = Object.values(possibleEnemies)

            // Recursion function to generate random enemy type with matching level
            const getRandomEnemy = (alreadyLooped = []) => {

                // if there is no enemy with matching level in any of the 6 species,
                // (which never happens), return turkey
                if(alreadyLooped.length === enemiesArray.length) return possibleEnemies.avians.turkey
            
                // generate random index, if it is in alreadyLooped, generate new
                const randSpecIndex = (() => {
                    let rand = randomGenerator(0, enemiesArray.length - 1)
                    while(alreadyLooped.includes(rand)) {
                        rand = randomGenerator(0, enemiesArray.length - 1)
                    } 
                    return rand
                })() 

                // get specie object with generated index
                const specie = enemiesArray[randSpecIndex]
                
                // make an array out of that specie object
                const specieArray = Object.values(specie)

                // from that array filter out enemies, that match enemy level between min and max
                const filtered = specieArray.filter(enemy => enemy.minLevel <= enemyLevel && enemy.maxLevel >= enemyLevel)

                // If there are no Enemies in filtered (with that level),
                // add index of this specie to alreadyLooped and execute this function again
                if(filtered.length === 0) {
                    alreadyLooped.push(randSpecIndex)
                    return getRandomEnemy(alreadyLooped)
                }

                // If there are, get random enemy from filtered (even if there is just one)
                const randFilteredIndex = Math.floor(Math.random() * filtered.length)
                const randomFiltered = filtered[randFilteredIndex]

                // Create array of names of already generated enemies names
                const alreadyGeneratedNames = specificEnemy.alreadyGenerated.map(enemy => enemy.name)

                // If that randomFiltered enemy is already generated
                if(alreadyGeneratedNames.includes(randomFiltered.name)) {
                    // if it is the only one in filtered array, 
                    // just add the whole specie to the alreadyLooped array and run the whole function again
                    if(filtered.length === 1) {
                        alreadyLooped.push(randSpecIndex)
                        return getRandomEnemy(alreadyLooped)
                    }
                    // else splice the already generated one from filtered and get another one
                    else {
                        filtered.splice(randFilteredIndex, 1)
                        const anotherFiltered = filtered[Math.floor(Math.random() * filtered.length)]

                        // if that anotherFiltered is still included (that means there are two
                        // different enemyTypes with same specie already generated). 
                        // then push the specie to alreadyLooped and get new one
                        if(alreadyGeneratedNames.includes(anotherFiltered.name)) {
                            alreadyLooped.push(randSpecIndex)
                            return getRandomEnemy(alreadyLooped)
                        } else return anotherFiltered
                    } 
                } 
                // If it's not already generated, return randomFiltered
                else return randomFiltered
            }

            // return random enemy type
            return getRandomEnemy()
        }
        // else return that specificEnemy
        else return specificEnemy.enemy
    })()


    // Set Difficulty - based on difference between enemyLevel and playerLevel
    const difficulty = (() => {
        if(type === 'Classic') {
            const lvlDiff = enemyLevel - playerLevel
            if(lvlDiff < 0) return 1
            if(lvlDiff === 0) return 2
            if(lvlDiff > 0) return 3
        }
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
            if (!strongStatIndex) return randomMult()
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
        level: enemyLevel,
        type,
        difficulty,
        dungeon,
        receivedCrit: false,
        damageTaken: '',
    }
}