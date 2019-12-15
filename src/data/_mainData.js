
import randomGenerator from "../logic/randomGenerator"
import icons from "./icons"

// Starting and base values

const mainData = {
    global: {
        gameFlow: 1,
        gameTimer: 1000
    },
    startingCurrency: {
        gold: 0,
        diamonds: 0
    },
    tutorial: {
        enemyCount: 0,
        multiplier: 0.75
    },
    playerBase: {
        hp: 400,
        critMult: 2,
        attackTypes: {
            damage: {
                light: { min: 60, max: 90, perc: 0.01 },
                medium: { min: 60, max: 90, perc: 0.01 },
                strong: { min: 60, max: 90, perc: 0.01 },
            },
            hitChance: { // lower value = higher chance
                light: 0.5,
                medium: 1,
                strong: 2
            }
        },
    },
    enemyBase: {
        hp: 500,
        armor: 40,
        damage: 100,
        crit: 35,
        critMult: 2,
        dodge: 30,
        diffMult: { // Difficulty Multiplier
            stats: {
                easy: 0.8,
                medium: 1,
                hard: 1.2
            },
            reward: {
                easy: 0.8,
                medium: 1,
                hard: 1.2
            }
        },
        dispersion: {
            hp: randomGenerator(80, 120, 0.01),
            armor: randomGenerator(80, 120, 0.01),
            damage: randomGenerator(80, 120, 0.01), // stat
            crit: randomGenerator(80, 120, 0.01),
            dodge: { min: 80, max: 120, perc: 0.01 },
            dmgMult: { min: 80, max: 120, perc: 0.01 }// calculated damage
        }
    },
    rewardBase: {
        status: {
            winMult: 3,
            loseMult: 1
        },
        difficulty: {
            easy: 1,
            medium: 1.15,
            hard: 1.3
        },
        gold: 7,
        goldMult: randomGenerator(75, 125, 0.01),
        diamonds: 1,
        diamondsMult: randomGenerator(60, 125, 0.01)
    },
    itemBase: {
        rarityTresholds: {
            legendary: 5,
            epic: 20,
            rare: 40,
            uncommon: 70,
            common: 100,
        },
        rarMult: {
            legendary: 2.5,
            epic: 2,
            rare: 1.6,
            uncommon: 1.3,
            common: 1,
        },
        baseStat: { // base value of given stat
            meleeDmg: 100,
            rangedDmg: 100,
            armor: 10,
            hp: 30,
            crit: 10,
            block: 10
        },
        statMultiplier: {
            globalRandom: randomGenerator(90, 110, 0.01),
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
        bonusMult: Math.ceil(Math.random() * 20),
        value: 10,
        valueMult: randomGenerator(90, 110, 0.01),
        destMult: {
            shop: 1,
            game: 0.75,
            inventory: 0.75
        }
    },
    equippedItems: [
        { type: "Helmet", rarity: "Common", stats: { statName: "Armor", value: 7 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.helmet, key: 0 },
        { type: "Chestplate", rarity: "Common", stats: { statName: "Armor", value: 10 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.chestplate, key: 1 },
        { type: "Pants", rarity: "Common", stats: { statName: "Armor", value: 8 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.pants, key: 2 },
        { type: "Gloves", rarity: "Common", stats: { statName: "Armor", value: 6 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.gloves, key: 3 },
        { type: "Boots", rarity: "Common", stats: { statName: "Armor", value: 6 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.boots, key: 4 },
        { type: "Sword", rarity: "Common", stats: { statName: "M-DMG", value: 100 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.sword, key: 5 },
        { type: "Necklace", rarity: "Common", stats: { statName: "HP", value: 50 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.necklace, key: 6 },
        { type: "Earrings", rarity: "Common", stats: { statName: "HP", value: 50 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.earrings, key: 7 },
        { type: "Ring", rarity: "Common", stats: { statName: "Crit. chance", value: 10 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.ring, key: 8 },
        { type: "Belt", rarity: "Common", stats: { statName: "Crit. chance", value: 10 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.belt, key: 9 },
        { type: "Shield", rarity: "Common", stats: { statName: "Block chance", value: 10 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.shield, key: 10 },
        { type: "Bow", rarity: "Common", stats: { statName: "R-DMG", value: 500 }, bonuses: null, goldValue: 50, destination: "Equipped", isSelected: false, imgSrc: icons.bow, key: 11 },
    ],
    invItems: [

    ],
    shopItems: [
        { type: "Empty", key: 0 },
        { type: "Empty", key: 1 },
        { type: "Empty", key: 2 },
    ],
}

export default mainData