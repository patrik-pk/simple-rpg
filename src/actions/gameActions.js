import {
    START_GAME,
    END_GAME,
    SET_CAN_ATTACK,
    GAME_WON,
    ITEM_OBTAINED
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

// GAME WON
export const gameWon = () => ({
    type: GAME_WON
})

// ITEM OBTAINED
export const itemObtained = item => ({
    type: ITEM_OBTAINED,
    payload: item
}) 