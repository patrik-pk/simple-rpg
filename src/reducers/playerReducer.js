import {
    RESET_PLAYER, 
    PLAYER_BLOCKED,
    PLAYER_HIT,
    RESET_PLAYER_DMG_TAKEN,
    UPDATE_PLAYER_STATS,
    LOAD_STATE
} from '../actions/types'

const initialState = {
    currentHp: 200,
    maxHp: 300,
    armor: 0,
    meleeDamage: 1,
    rangedDamage: 150000,
    critChance: 20,
    blockChance: 0,
    bonuses: [
        { name: 'avian', value: 0 },
        { name: 'dinosaur', value: 0 },
        { name: 'insect', value: 0 },
        { name: 'wildlife', value: 0 },
        { name: 'reptile', value: 0 },
        { name: 'aquatic', value: 0 },
    ],
    damageTaken: '',
    receivedCrit: false
}

export default (state = initialState, action) => {
    switch(action.type) {

        // Reset Player
        case RESET_PLAYER:
            return {
                ...state,
                currentHp: state.maxHp,
                damageTaken: ''
            }

        // Player Blocked
        case PLAYER_BLOCKED:
            return {
                ...state,
                damageTaken: 'Blocked',
                receivedCrit: false
            }

        // Player Hit
        case PLAYER_HIT:
            return {
                ...state,
                currentHp: state.currentHp - action.payload.dmgDealt,
                damageTaken: action.payload.dmgDealt,
                receivedCrit: action.payload.didCrit
            }
            
        // Reset Player Damage Taken
        case RESET_PLAYER_DMG_TAKEN:
            return {
                ...state,
                damageTaken: ''
            }

        // Update Players Stats
        case UPDATE_PLAYER_STATS:
            const values = action.payload

            return {
                ...state,
                currentHp: values.currentHp,
                maxHp: values.maxHp,
                armor: values.armor,
                meleeDamage: values.meleeDamage,
                rangedDamage: values.rangedDamage,
                critChance: values.critChance,
                blockChance: values.blockChance,
                bonuses: values.bonuses
            }

        // Load State
        case LOAD_STATE:
            return action.payload.player
        
        // Default
        default: 
            return state
    }
}