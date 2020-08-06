import {
    SET_ENEMY,
    CLEAR_ENEMY,
    ENEMY_DODGED,
    ENEMY_HIT,
    RESET_ENEMY_DMG_TAKEN
} from '../actions/types'

const initialState = {
    currentHp: null,
    maxHp: null,
    meleeArmor: null,
    rangedArmor: null,
    damage: null,
    critChance: null,
    meleeDodgeChance: null,
    rangedDodgeChance: null,
    damageTaken: "",
    currentEnemy: "",
    receivedCrit: false
}

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
                damageTaken: 'Missed'
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
        // Default
        default:
            return state
    }
}