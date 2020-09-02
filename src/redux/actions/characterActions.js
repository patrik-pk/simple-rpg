import {
    ADD_REWARD,
    SET_GOLD,
    SET_ROLLS,
    SET_ROLL_TIMER
} from '../types'

// Add reward
export const addReward = reward => ({
    type: ADD_REWARD,
    payload: reward
})

// Set gold (+ or -)
export const setGold = amount => ({
    type: SET_GOLD,
    payload: amount
})

// Set rolls (+ or -)
export const setRolls = amount => ({
    type: SET_ROLLS,
    payload: amount
})

// Set roll timer
export const setRollTimer = timer => ({
    type: SET_ROLL_TIMER,
    payload: timer
})
