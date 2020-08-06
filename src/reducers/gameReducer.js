import {
    START_GAME, END_GAME
} from '../actions/types'

const initialState = {
    battleStatus: '',
    canAttack: true,
    acquiredXp: 0,
    acquiredGold: 0,
    acquiredDiamonds: 0,
    generatedItem: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case START_GAME:
            return {
                ...state,
                battleStatus: 'inBattle',
                canAttack: true,
                acquiredGold: 0,
                acquiredDiamonds: 0,
                acquiredXp: 0,
                generatedItem: null
            }
        case END_GAME:
            return {
                battleStatus: ''
            }
        default:
            return state
    }
}