import {
    SET_ENEMY,
    CLEAR_ENEMY,
    ENEMY_DODGED,
    ENEMY_HIT,
    RESET_ENEMY_DMG_TAKEN
} from '../types'

// Set enemy
export const setEnemy = enemy => ({
    type: SET_ENEMY,
    payload: enemy
})

// Clear enemy
export const clearEnemy = () => ({
    type: CLEAR_ENEMY
})

// Enemy dodged
export const enemyDodged = () => ({
    type: ENEMY_DODGED
})

// Enemy hit
export const enemyHit = (dmgDealt, didCrit) => ({
    type: ENEMY_HIT,
    payload: {
        dmgDealt,
        didCrit
    }
})

// Reset enemy damage taken
export const resetEnemyDmgTaken = () => ({
    type: RESET_ENEMY_DMG_TAKEN
})