import {
    ADD_REWARD
} from './types'

export const addReward = reward => ({
    type: ADD_REWARD,
    payload: reward
})