import levelTresholds from '../../shared/data/levelTresholds'
import {
    ADD_REWARD,
    SET_GOLD,
    SET_ROLLS,
    SET_ROLL_TIMER,
    RESET_STATE,
    LOAD_STATE
} from '../types'

const initialState = {
    experience: 0,
    acquiredXp: 0,
    currentLevel: 0,
    gameFlow: levelTresholds[0].gameFlow,
    gold: 150,
    acquiredGold: 0,
    rolls: 5,
    rollTimer: null
}

export default (state = initialState, action) => {
    switch(action.type) {

        // Add Reward
        case ADD_REWARD:
            return {
                ...state,
                experience: action.payload.experience,
                acquiredXp: action.payload.acquiredXp,
                currentLevel: action.payload.currentLevel,
                gameFlow: action.payload.gameFlow,
                gold: action.payload.gold,
                acquiredGold: action.payload.acquiredGold,
            }

        // Set Gold (+ or -)
        case SET_GOLD:
            return {
                ...state,
                gold: state.gold + action.payload
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

        // Reset State
        case RESET_STATE:
            return initialState

        // Load State
        case LOAD_STATE:
            return action.payload.character

        // Default
        default:
            return state
    }
}