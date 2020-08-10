
// this file contains all the important data - base values,
// starting items, multipliers, etc...

const mainData = {
    global: {
        gameTimer: 1000, // changes speed of the game excluding animation duration
        loseMult: 0.25, // for experience only
        xpDispersion: { min: 100, max: 115, perc: 0.01 },
        minDmg: 30, // min DMG base that characters does when armor is too high (is multiplied by GameFlow)
        minDmgDisp: { min: 85, max: 115, perc: 0.01 }
    },
    startingCurrency: {
        gold: 100,
        diamonds: 3
    },
    playerBase: {
        critMult: 2,
        attackTypes: {
            damage: {
                light: { min: 70, max: 90, perc: 0.01 },
                medium: { min: 90, max: 110, perc: 0.01 },
                strong: { min: 110, max: 130, perc: 0.01 },
            },
            hitChance: { // lower value = higher chance
                light: 0.2,
                medium: 0.9,
                strong: 1.8
            }
        },
    },
    enemyBase: {
        critMult: 2,
        dispersion: {
            dmgMult: { min: 90, max: 110, perc: 0.01 } // dispersion for calculated damage
        },
        boss: {
            xp: 40 // percentage reward of next level xp
        }
    },
    rewardBase: {
        status: {
            winMult: 3,
            loseMult: 1
        },
        difficulty: {
            easy: 0.75,
            medium: 1,
            hard: 1.25
        },
        gold: 10,
        goldMult: { min: 80, max: 120, perc: 0.01 },
        diamonds: 1,
        diamondsMult: { min: 100, max: 150, perc: 0.01 },
        boss: {
            winMult: 6,
            loseMult: 0 
        }
    },
    itemBase: {
        rarityTresholds: { // chances
            legendary: 5,
            epic: 20,
            rare: 40,
            uncommon: 70,
            common: 100,
        },
        rarMult: { // multiplier for stat
            legendary: 1.7,
            epic: 1.45,
            rare: 1.25,
            uncommon: 1.1,
            common: 1,
        },
        rarValueMult: { // gold value multiplier
            legendary: 2.5,
            epic: 2,
            rare: 1.6,
            uncommon: 1.3,
            common: 1,
        },
        baseStat: { // base value of given stat
            meleeDmg: 150,
            rangedDmg: 150,
            armor: 20,
            hp: 200,
            crit: 12,
            block: 15
        },
        statMultiplier: { // multiplier for stats (used for armor)
            globalRandom: { min: 95, max: 105, perc: 0.01 },
            helmet: 0.7,
            chestplate: 1,
            pants: 0.8,
            gloves: 0.6,
            boots: 0.6,
            necklace: 1,
            earrings: 1,
            ring: 1,
            belt: 1,
            shield: 1,
            sword: 1,
            bow: 1,
        },
        bonusMult: 20, // max percentage on bonus
        value: 20, // base value of item
        valueMult: { min: 95, max: 105, perc: 0.01 },
        destMult: { // gold value in shop is higher than in inventory/game
            shop: 1.6,
            game: 1,
            inventory: 1
        },
        boss: { // boss item has better stats 
            bonusCrit: 1,
            bonusBlock: 2,
            bonusMin: 7, // minimum bonus value
            valueMult: 1.5 // higher gold value
        }
    },
}

export default mainData