import levelTresholds from '../data/levelTresholds'
import {
    ADD_REWARD,
    SET_DIAMONDS
} from '../actions/types'

const initialState = {
    experience: 0,
    acquiredXp: 0,
    currentLevel: 0,
    gameFlow: levelTresholds[0].gameFlow,
    gold: 150,
    diamonds: 5,
    acquiredGold: 0,
    acquiredDiamonds: 0,
}

export default (state = initialState, action) => {
    switch(action.type) {

        // Add reward
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

        // Set diamonds (+ or -)
        case SET_DIAMONDS:
            return {
                ...state,
                diamonds: state.diamonds + action.payload
            }

        // Default
        default:
            return state
    }
}