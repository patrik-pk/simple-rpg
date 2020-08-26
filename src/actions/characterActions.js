import {
    ADD_REWARD,
    SET_GOLD,
    SET_ROLLS,
    SET_ROLL_TIMER
} from './types'

// ADD REWARD
export const addReward = reward => ({
    type: ADD_REWARD,
    payload: reward
})

// SET GOLD (+ or -)
export const setGold = amount => ({
    type: SET_GOLD,
    payload: amount
})

// SET ROLLS (add or substract)
export const setRolls = amount => ({
    type: SET_ROLLS,
    payload: amount
})

// SET ROLL TIMER
export const setRollTimer = timer => ({
    type: SET_ROLL_TIMER,
    payload: timer
})
