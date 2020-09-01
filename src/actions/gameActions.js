import {
    START_GAME,
    END_GAME,
    SET_CAN_ATTACK,
    SET_BATTLE_STATUS,
    ITEM_OBTAINED,
    GENERATE_CLASSIC_ENEMIES,
} from './types'

// START GAME
export const startGame = () => ({
    type: START_GAME
})

// END GAME
export const endGame = () => ({
    type: END_GAME
})

// SET CAN ATTACK
export const setCanAttack = bool => ({
    type: SET_CAN_ATTACK,
    payload: bool
})

// SET BATTLE STATUS
export const setBattleStatus = value => ({
    type: SET_BATTLE_STATUS,
    payload: value
})

// ITEM OBTAINED
export const itemObtained = item => ({
    type: ITEM_OBTAINED,
    payload: item
}) 

// GENERATE CLASSIC ENEMIES
export const generateClassicEnemies = currentLevel => ({
    type: GENERATE_CLASSIC_ENEMIES,
    payload: currentLevel
})
