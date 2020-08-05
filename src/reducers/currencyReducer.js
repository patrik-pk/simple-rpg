import {

} from '../actions/types'

const initialState = {
    gold: 150,
    diamonds: 5,
    acquiredGold: null,
    acquiredDiamonds: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

