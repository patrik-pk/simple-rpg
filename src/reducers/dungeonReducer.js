import {

} from '../actions/types'

const initialState = [
    { type: 'beasts', current: 0 },
    { type: 'dragons', current: 0 },
    { type: 'insect', current: 0 },
    { type: 'monsters', current: 0 },
    { type: 'reptiles', current: 0 },
]

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}