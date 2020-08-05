import {

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
        default:
            return state
    }
}