import levelTresholds from '../data/levelTresholds'
import randomGenerator from './randomGenerator'
import generateItem from '../shared/generateItem'
import generateDrop from '../shared/generateDrop'
import possibleItems from '../data/possibleItems'
import possibleDrops from '../data/possibleDrops'
import craftableItems from '../data/craftable_items/craftableItems'
import shuffleArray from './shuffleArray'

export default function defaultSave() {

    // Character
    const randomLevel = 5

    const character = {
        experience: Math.round(levelTresholds[randomLevel].xp * randomGenerator(30, 70, 0.01)),
        acquiredXp: 0,
        currentLevel: randomLevel,
        gameFlow: levelTresholds[randomLevel].gameFlow,
        gold: 200/*Math.round(150 * levelTresholds[randomLevel].gameFlow * randomGenerator(95, 105, 0.01))*/,
        acquiredGold: 0,
        rolls: 5,
        rollTimer: null
    }

    // Items
    const items = {
        inventoryRows: 7,
        equippedItems: generateRandomEquipItems(randomLevel),
        invItems: generateRandomInvItems(randomLevel),
        shopItems: [
            { type: 'Empty', key: 0 },
            { type: 'Empty', key: 1 },
            { type: 'Empty', key: 2 },
            { type: 'Empty', key: 3 },
        ],
        craftableItems
    }

    // Dungeon
    const dungeon = [
        { type: 'Aquatic', current: 0 },
        { type: 'Avian', current: 0 },
        { type: 'Dinosaur', current: 0 },
        { type: 'Insect', current: 0 },
        { type: 'Wildlife', current: 0 },
        { type: 'Reptile', current: 0 },
    ]

    // Game
    const game = {
        classicEnemies: [],
        battleStatus: '',
        canAttack: true,
        generatedItems: null,
        gameTimer: 1000,
    }

    // Player
    const player = {
        currentHp: 300,
        maxHp: 300,
        armor: 0,
        meleeDamage: 150,
        rangedDamage: 150,
        critChance: 20,
        blockChance: 0,
        bonuses: [
            { name: 'aquatic', value: 0 },
            { name: 'avian', value: 0 },
            { name: 'dinosaur', value: 0 },
            { name: 'insect', value: 0 },
            { name: 'wildlife', value: 0 },
            { name: 'reptile', value: 0 },
        ],
        damageTaken: '',
        receivedCrit: false,
        classVal: 'aquatic'
    }

    // Enemy
    const enemy = null

    // Final Return
    return {
        character,
        items,
        dungeon,
        game,
        player,
        enemy,
    }
}

// Generate random equip items
const generateRandomEquipItems = currentLevel => {

    const possibleItemsArr = Object.values(possibleItems)

    return possibleItemsArr.map((item, i) => {
        const type = item
        const iconIndex = randomGenerator(0, 1)
        return generateItem(currentLevel, 'Equipped', i, 'Classic', { itemType: { type, iconIndex } })
    })
}

// Generate random inventory items
const generateRandomInvItems = currentLevel => {

    // Equip
    const equip = []

    for(let i = 0; i < 3; i++) {
        const randomRarity = randomGenerator(0, 6)
        const randomType = randomGenerator(0, 11)

        const item = craftableItems[0][randomRarity][randomType].item
        item.destination = 'Inventory'
        item.isCrafted = true
        item.craftedLevelType = 0

        equip.push(item)
    }


    // Drops
    const possibleDropsArr = Object.values(possibleDrops)

    const drops = []

    possibleDropsArr.forEach(specie => {
        const specieArr = Object.values(specie)

        specieArr.forEach((pd, i) => {

            if(i === 0 || i === 3) {
                const randomAmount = randomGenerator(11, 40)
    
                drops.push(generateDrop(
                    pd.iconKey, 
                    'Inventory', 
                    0, 
                    randomAmount,
                    pd.name,
                    pd.icon,
                    [pd.classVal],
                    Math.round(randomAmount * 10 * levelTresholds[currentLevel].gameFlow)
                ))
            }
        })
    })

    const allItems = [...equip, ...drops]

    // shuffle the array & assign proper keys
    shuffleArray(allItems)
    allItems.forEach((item, i) => item.key = i)

    // Final Return
    return allItems
}