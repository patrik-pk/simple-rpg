import {
    ADD_REWARD,
    SET_DIAMONDS,
    SET_GOLD
} from './types'

// ADD REWARD
export const addReward = reward => ({
    type: ADD_REWARD,
    payload: reward
})

// SET DIAMONDS (+ or -)
export const setDiamonds = amount => ({
    type: SET_DIAMONDS,
    payload: amount
})

// SET GOLD (+ or -)
export const setGold = amount => ({
    type: SET_GOLD,
    payload: amount
})

