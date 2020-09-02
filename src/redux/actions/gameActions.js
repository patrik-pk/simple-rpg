import {
    START_GAME,
    END_GAME,
    SET_CAN_ATTACK,
    SET_BATTLE_STATUS,
    ITEM_OBTAINED,
    GENERATE_CLASSIC_ENEMIES,
} from '../types'

// Start game
export const startGame = () => ({
    type: START_GAME
})

// End game
export const endGame = () => ({
    type: END_GAME
})

// Set can attack
export const setCanAttack = bool => ({
    type: SET_CAN_ATTACK,
    payload: bool
})

// Set battle status
export const setBattleStatus = value => ({
    type: SET_BATTLE_STATUS,
    payload: value
})

// Set item obtained
export const itemObtained = item => ({
    type: ITEM_OBTAINED,
    payload: item
}) 

// Generate classic enemies
export const generateClassicEnemies = currentLevel => ({
    type: GENERATE_CLASSIC_ENEMIES,
    payload: currentLevel
})
