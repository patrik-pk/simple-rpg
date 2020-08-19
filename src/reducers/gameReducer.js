import {
    START_GAME, 
    END_GAME,
    SET_CAN_ATTACK,
    GAME_WON,
    GAME_LOST,
    ITEM_OBTAINED,
    GENERATE_CLASSIC_ENEMIES,
    SET_ROLLS,
    SET_ROLL_TIMER
} from '../actions/types'

const initialState = {
    classicEnemies: [],
    battleStatus: '',
    canAttack: true,
    generatedItems: null,
    gameTimer: 1000,
    rolls: 3,
    rollTimer: null
}

export default (state = initialState, action) => {
    switch(action.type) {

        // Start Game
        case START_GAME:
            return {
                ...state,
                battleStatus: 'inBattle',
                canAttack: true,
                generatedItems: null
            }

        // End Game
        case END_GAME:
            return {
                ...state,
                battleStatus: '',
                generatedItems: null
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

        // Items Obtained
        case ITEM_OBTAINED:
            return {
                ...state,
                generatedItems: action.payload
            }

        // Generate Classic Enemies
        case GENERATE_CLASSIC_ENEMIES:
            return {
                ...state,
                classicEnemies: action.payload
            }

        // Set Rolls
        case SET_ROLLS:
            return {
                ...state,
                rolls: state.rolls += action.payload
            }

        // Set Roll Timer
        case SET_ROLL_TIMER:
            return {
                ...state,
                rollTimer: action.payload,
            }

        // Default
        default:
            return state
    }
}