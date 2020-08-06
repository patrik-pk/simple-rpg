import {

} from '../actions/types'

const initialState = {
    gold: 150,
    diamonds: 5,
    acquiredGold: 0,
    acquiredDiamonds: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

