import {
    START_GAME,
    END_GAME
} from './types'

export const startGame = () => ({
    type: START_GAME
})

export const endGame = () => ({
    type: END_GAME
})