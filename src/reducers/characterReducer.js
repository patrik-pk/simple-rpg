import levelTresholds from '../data/levelTresholds'
import {
    ADD_REWARD,
    SET_DIAMONDS,
    SET_GOLD
} from '../actions/types'

const initialState = {
    experience: 0,
    acquiredXp: 0,
    currentLevel: 7,
    gameFlow: levelTresholds[0].gameFlow,
    gold: 150,
    diamonds: 100,
    acquiredGold: 0,
    acquiredDiamonds: 0,
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
                diamonds: action.payload.diamonds,
                acquiredGold: action.payload.acquiredGold,
                acquiredDiamonds: action.payload.acquiredDiamonds
            }

        // Set Diamonds (+ or -)
        case SET_DIAMONDS:
            return {
                ...state,
                diamonds: state.diamonds + action.payload
            }

        // Set Gold (+ or -)
        case SET_GOLD:
            return {
                ...state,
                gold: state.gold + action.payload
            }

        // Default
        default:
            return state
    }
}