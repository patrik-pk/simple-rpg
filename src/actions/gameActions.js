import {
    START_GAME,
    END_GAME,
    SET_CAN_ATTACK,
    GAME_WON
} from './types'

export const startGame = () => ({
    type: START_GAME
})

export const endGame = () => ({
    type: END_GAME
})

export const setCanAttack = bool => ({
    type: SET_CAN_ATTACK,
    payload: bool
})

export const gameWon = () => ({
    type: GAME_WON
})