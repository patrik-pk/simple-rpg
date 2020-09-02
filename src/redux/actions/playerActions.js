import {
    RESET_PLAYER,
    PLAYER_BLOCKED,
    PLAYER_HIT,
    RESET_PLAYER_DMG_TAKEN,
    UPDATE_PLAYER_STATS
} from '../types'

// Reset Player
export const resetPlayer = () => ({
    type: RESET_PLAYER
})

// Player Blocked
export const playerBlocked = () => ({
    type: PLAYER_BLOCKED
})

// Player Hit
export const playerHit = (dmgDealt, didCrit) => ({
    type: PLAYER_HIT,
    payload: {
        dmgDealt,
        didCrit
    }
})

// Reset Player Damage Taken
export const resetPlayerDmgTaken = () => ({
    type: RESET_PLAYER_DMG_TAKEN
})

// Update Player Stats
export const updatePlayerStats = (equippedItems, currentLevel) => ({
    type: UPDATE_PLAYER_STATS,
    payload: {
        equippedItems,
        currentLevel
    }
})