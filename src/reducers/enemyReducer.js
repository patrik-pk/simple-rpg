import {
    SET_ENEMY,
    CLEAR_ENEMY
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
        case SET_ENEMY:
            return action.payload
        case CLEAR_ENEMY:
            return initialState
        default:
            return state
    }
}