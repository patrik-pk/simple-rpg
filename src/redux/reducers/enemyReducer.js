import {
    SET_ENEMY,
    CLEAR_ENEMY,
    ENEMY_DODGED,
    ENEMY_HIT,
    RESET_ENEMY_DMG_TAKEN,
    LOAD_STATE
} from '../types'

const initialState = null

export default (state = initialState, action) => {
    switch(action.type) {

        // Set Enemy
        case SET_ENEMY:
            return action.payload

        // Clear Enemy
        case CLEAR_ENEMY:
            return initialState

        // Enemy Dodged
        case ENEMY_DODGED:
            return {
                ...state,
                damageTaken: 'Missed',
                receivedCrit: false
            }

        // Enemy Hit
        case ENEMY_HIT:
            return {
                ...state,
                currentHp: state.currentHp - action.payload.dmgDealt,
                damageTaken: action.payload.dmgDealt,
                receivedCrit: action.payload.didCrit
            }

        // Reset Damage Taken
        case RESET_ENEMY_DMG_TAKEN:
            return {
                ...state,
                damageTaken: ''
            }

        // Load State
        case LOAD_STATE:
            return action.payload.state ? action.payload.state : null

        // Default
        default:
            return state
    }
}