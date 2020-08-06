import {
    RESET_PLAYER
} from '../actions/types'

const initialState = {
    currentHp: 200,
    maxHp: 300,
    armor: 50,
    meleeDamage: 150,
    rangedDamage: 150,
    critChance: 50,
    blockChance: 50,
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
        case RESET_PLAYER:
            return {
                ...state,
                currentHp: state.maxHp,
                damageTaken: ''
            }
        default: 
            return state
    }
}