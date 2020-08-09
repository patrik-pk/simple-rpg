import {
    RESET_PLAYER, 
    PLAYER_BLOCKED,
    PLAYER_HIT,
    RESET_PLAYER_DMG_TAKEN,
    RECALCULATE_PLAYER_STATS
} from '../actions/types'

const initialState = {
    currentHp: 200,
    maxHp: 300,
    armor: 0,
    meleeDamage: 1,
    rangedDamage: 15000,
    critChance: 20,
    blockChance: 0,
    bonuses: [
        { name: 'beasts', value: 0 },
        { name: 'dragons', value: 0 },
        { name: 'insect', value: 0 },
        { name: 'monsters', value: 0 },
        { name: 'reptiles', value: 0 },
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

        // Recalculate Players Stats
        case RECALCULATE_PLAYER_STATS:
            const values = action.payload

            return {
                ...state,
                maxHp: values.maxHp,
                armor: values.armor,
                meleeDamage: values.meleeDamage,
                rangedDamage: values.rangedDamage,
                critChance: values.critChance,
                blockChance: values.blockChance,
                bonuses: values.bonuses
            }
        
        // Default
        default: 
            return state
    }
}