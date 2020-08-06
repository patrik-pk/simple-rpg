import {
    IN_BATTLE
} from '../actions/types'

const initialState = {
    battleStatus: "",
    canAttack: true,
    acquiredGold: null,
    acquiredDiamonds: null,
    generatedItem: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case IN_BATTLE:
            return {
                ...state,
                battleStatus: 'inBattle',
                canAttack: true,
                acquiredGold: null,
                acquiredDiamonds: null,
            }
        default:
            return state
    }
}