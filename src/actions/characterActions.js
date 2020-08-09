import {
    ADD_REWARD,
    SET_DIAMONDS
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