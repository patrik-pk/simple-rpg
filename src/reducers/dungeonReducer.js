import {

} from '../actions/types'

const initialState = {
    beasts: 0,
    dragons: 0,
    insect: 0,
    monsters: 0,
    reptiles: 0,
}

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}