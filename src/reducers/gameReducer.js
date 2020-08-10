import {
    START_GAME, 
    END_GAME,
    SET_CAN_ATTACK,
    GAME_WON,
    GAME_LOST,
    ITEM_OBTAINED
} from '../actions/types'

const initialState = {
    battleStatus: '',
    canAttack: true,
    generatedItem: null,
    gameTimer: 1000,
}

export default (state = initialState, action) => {
    switch(action.type) {

        // Start Game
        case START_GAME:
            return {
                ...state,
                battleStatus: 'inBattle',
                canAttack: true,
                generatedItem: null
            }

        // End Game
        case END_GAME:
            return {
                ...state,
                battleStatus: '',
                generatedItem: null
            }

        // Set Attack
        case SET_CAN_ATTACK:
            return {
                ...state,
                canAttack: action.payload
            }

        // Game Won
        case GAME_WON:
            return {
                ...state,
                battleStatus: 'Victory',
            }

        // Game Lost
        case GAME_LOST:
            return {
                ...state,
                battleStatus: 'Defeat'
            }

        // Item Obtained
        case ITEM_OBTAINED:
            return {
                ...state,
                generatedItem: action.payload
            }

        // Default
        default:
            return state
    }
}