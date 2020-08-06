import {
    SET_ENEMY,
    CLEAR_ENEMY,
    ENEMY_DODGED,
    ENEMY_HIT,
    RESET_ENEMY_DMG_TAKEN
} from './types'

export const setEnemy = enemy => ({
    type: SET_ENEMY,
    payload: enemy
})

export const clearEnemy = () => ({
    type: CLEAR_ENEMY
})

export const enemyDodged = () => ({
    type: ENEMY_DODGED
})

export const enemyHit = (dmgDealt, didCrit) => ({
    type: ENEMY_HIT,
    payload: {
        dmgDealt,
        didCrit
    }
})

export const resetEnemyDmgTaken = () => ({
    type: RESET_ENEMY_DMG_TAKEN
})