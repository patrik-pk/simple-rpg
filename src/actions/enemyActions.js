import {
    SET_ENEMY,
    CLEAR_ENEMY
} from './types'

export const setEnemy = enemy => ({
    type: SET_ENEMY,
    payload: enemy
})

export const clearEnemy = () => ({
    type: CLEAR_ENEMY
})