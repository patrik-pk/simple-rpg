import {
    RESET_PLAYER,
    PLAYER_BLOCKED,
    PLAYER_HIT,
    RESET_PLAYER_DMG_TAKEN,
    RECALCULATE_PLAYER_STATS
} from './types'

// RESET PLAYER
export const resetPlayer = () => ({
    type: RESET_PLAYER
})

// PLAYER BLOCKED
export const playerBlocked = () => ({
    type: PLAYER_BLOCKED
})

// PLAYER HIT
export const playerHit = (dmgDealt, didCrit) => ({
    type: PLAYER_HIT,
    payload: {
        dmgDealt,
        didCrit
    }
})

// RESET PLAYER DAMAGE TAKEN
export const resetPlayerDmgTaken = () => ({
    type: RESET_PLAYER_DMG_TAKEN
})

// RECALCULATE PLAYERS STATS
export const recalculatePlayerStats = values => ({
    type: RECALCULATE_PLAYER_STATS,
    payload: values
})