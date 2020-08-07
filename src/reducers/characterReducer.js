import levelTresholds from '../data/levelTresholds'
import {

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
        default:
            return state
    }
}