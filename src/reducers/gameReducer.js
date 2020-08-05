import {

} from '../actions/types'

const initialState = {
    battleStatus: "",
    canAttack: true,
    environmentSrc: "",
    generatedItem: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}